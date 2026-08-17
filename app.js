/* ==========================================================================
   Preply Conversational ESL Hub - Interactive App Logic (Week 1 & Week 2)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'gabriela_esl_progress_v2';
  const LEGACY_STORAGE_KEY = 'would_you_rather_progress';
  
  let state = {
    activeWeek: 2, // Default to Week 2 (Storytelling & Personal Anecdotes)
    completedQuizzes: {}, // { quizId: { correct: boolean, answer: string, score: number } }
    selectedCardOptions: {}, // { cardId: optionIndex }
    gridGameState: {}, // { tileId: { placed: true, row: X, col: Y, answeredCorrectly: true } }
    activeCardCat: 'all'
  };

  // Load saved state
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.completedQuizzes = parsed.completedQuizzes || {};
      state.selectedCardOptions = parsed.selectedCardOptions || {};
      state.gridGameState = parsed.gridGameState || {};
      if (parsed.activeWeek) state.activeWeek = parsed.activeWeek;
    }
  } catch (e) {
    console.error('Could not load local progress', e);
  }

  // Ensure global dataset is synced to activeWeek
  if (typeof syncActiveWeekData === 'function') {
    syncActiveWeekData(state.activeWeek);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        activeWeek: state.activeWeek,
        completedQuizzes: state.completedQuizzes,
        selectedCardOptions: state.selectedCardOptions,
        gridGameState: state.gridGameState
      }));
    } catch (e) {
      console.error('Could not save progress', e);
    }
    updateProgressUI();
  }

  /* --------------------------------------------------------------------------
     1. British Audio Pronunciation (Web Speech API)
     -------------------------------------------------------------------------- */
  function speakWord(text, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      if (typeof onEndCallback === 'function') onEndCallback();
      return;
    }
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 1.0;

    let hasEnded = false;
    const safeEnd = () => {
      if (!hasEnded) {
        hasEnded = true;
        if (typeof onEndCallback === 'function') onEndCallback();
      }
    };

    utterance.onend = safeEnd;
    utterance.onerror = safeEnd;

    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British'));
    if (ukVoice) {
      utterance.voice = ukVoice;
    } else {
      utterance.lang = 'en-GB';
    }

    window.speechSynthesis.speak(utterance);

    if (typeof onEndCallback === 'function') {
      const estimatedDurationMs = Math.max(2500, text.length * 110);
      setTimeout(safeEnd, estimatedDurationMs + 1000);
    }
  }

  window.playAudio = (text) => {
    speakWord(text);
  };

  // Pre-load voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  /* --------------------------------------------------------------------------
     2. Week Switcher Controller
     -------------------------------------------------------------------------- */
  function setWeek(weekNum) {
    state.activeWeek = weekNum;
    if (typeof syncActiveWeekData === 'function') {
      syncActiveWeekData(weekNum);
    }
    saveState();
    updateHeaderAndHeroUI();
    render8WeekSyllabus();
    renderVisualCards();
    renderTeacherLessonPlan();
    renderFunctionalPhrases();
    renderCardFilters();
    renderConversationCards();
    renderQuizzes();
    renderGridGame();
  }

  window.switchWeek = (weekNum) => {
    setWeek(weekNum);
  };

  function updateHeaderAndHeroUI() {
    const weekData = LONDON_VOCAB_DATA.weeks ? LONDON_VOCAB_DATA.weeks[state.activeWeek] : LONDON_VOCAB_DATA;
    if (!weekData) return;

    const activeBadge = document.getElementById('hero-active-week-badge');
    const heroTopic = document.getElementById('hero-topic-title');
    const activeSectionTitle = document.getElementById('active-homework-title');
    const activeSectionDesc = document.getElementById('active-homework-desc');

    if (activeBadge) activeBadge.textContent = `Week ${state.activeWeek} of 8 (Active)`;
    if (heroTopic) heroTopic.textContent = weekData.lessonTitle;
    if (activeSectionTitle) activeSectionTitle.textContent = `Week ${state.activeWeek}: "${weekData.lessonTitle}" Workspace`;
    if (activeSectionDesc) activeSectionDesc.textContent = `Complete these exercises, practice natural phrase pronunciation, play the Add-the-Grid Game, and export your Preply report!`;

    // Render Week Switcher Pills if container exists
    const switcherContainer = document.getElementById('week-switcher-container');
    if (switcherContainer && LONDON_VOCAB_DATA.eightWeekSyllabus) {
      switcherContainer.innerHTML = `
        <div class="week-switcher-container">
          <span style="font-weight: 700; color: var(--text-dark); font-size: 0.9rem;">📍 Select Active Lesson Week:</span>
          ${LONDON_VOCAB_DATA.eightWeekSyllabus.slice(0, 2).map(w => `
            <button class="week-pill-btn ${state.activeWeek === w.week ? 'active' : ''}" onclick="window.switchWeek(${w.week})">
              <span>${w.week === 1 ? '🌸' : '📖'}</span>
              <span>Week ${w.week}: ${w.title.split('(')[0]}</span>
              <span class="week-pill-badge">${state.activeWeek === w.week ? 'ACTIVE' : 'PRACTICE'}</span>
            </button>
          `).join('')}
        </div>
      `;
    }
  }

  /* --------------------------------------------------------------------------
     3. Navigation Tabs
     -------------------------------------------------------------------------- */
  const navButtons = document.querySelectorAll('#main-nav-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      navButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetEl = document.getElementById(`tab-${targetTab}`);
      if (targetEl) {
        targetEl.classList.add('active');
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Visual Dilemma & Story Cards Renderer
     -------------------------------------------------------------------------- */
  function renderVisualCards() {
    const container = document.getElementById('visual-cards-container');
    if (!container || !LONDON_VOCAB_DATA.visualCards) return;

    container.innerHTML = LONDON_VOCAB_DATA.visualCards.map(card => `
      <div class="visual-card">
        <div class="visual-card-image-wrap">
          <img src="${card.image}" alt="${card.title}" class="visual-card-img" />
          <span class="visual-card-badge">${card.badge}</span>
        </div>
        <div class="visual-card-body">
          <h3 class="visual-card-title">${card.title}</h3>
          <div class="visual-card-subtitle">${card.category}</div>
          <div class="visual-card-pt">🇵🇹 ${card.ptTranslation}</div>
          <p class="visual-card-desc">"${card.description}"</p>

          <div class="visual-vocab-section">
            <h4 class="visual-section-heading">🗣️ Useful Target Phrases:</h4>
            <div class="visual-vocab-chips">
              ${card.targetPhrases.map(p => `
                <div class="vocab-chip">
                  <button class="audio-btn-sm" title="Listen" onclick="window.playAudio('${p.replace(/'/g, "\\'")}')">🔊</button>
                  <div class="vocab-chip-info">
                    <strong style="color: var(--text-dark); font-size: 0.88rem;">${p}</strong>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="visual-flow-box">
            <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">🔄 3-Step Discussion Flow:</h4>
            <ol style="font-size: 0.88rem; color: var(--text-dark); padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
              <li><strong>1. The Hook / Choice:</strong> ${card.discussionFlow.step1}</li>
              <li><strong>2. The Details / Justification:</strong> ${card.discussionFlow.step2}</li>
              <li><strong>3. The Twist / Counter-Argument:</strong> ${card.discussionFlow.step3}</li>
            </ol>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     5. Teacher Lesson Plan Renderer
     -------------------------------------------------------------------------- */
  function renderTeacherLessonPlan() {
    const container = document.getElementById('teacher-plan-container');
    if (!container || !LONDON_VOCAB_DATA.teacherLessonPlan) return;

    const plan = LONDON_VOCAB_DATA.teacherLessonPlan;

    container.innerHTML = `
      <div class="teacher-plan-header">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 0.85rem;">
            🎓 Tutor Teaching Guide • Week ${state.activeWeek}
          </span>
          <span style="color: var(--text-muted); font-size: 0.85rem;">Preply 1-on-1 Lesson</span>
        </div>
        <h3 class="serif-font" style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: 12px;">${plan.lessonTitle}</h3>
        <div class="teacher-meta-row" style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px;">
          <span class="meta-tag">⏳ <strong>Duration:</strong> ${plan.duration}</span>
          <span class="meta-tag">📊 <strong>Level:</strong> ${plan.level}</span>
          <span class="meta-tag">👩‍🎓 <strong>Student:</strong> ${plan.studentProfile}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-dark); background: var(--bg-gradient-start); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 24px;">
          <strong>Focus:</strong> ${plan.focus}
        </p>
      </div>

      <h4 class="serif-font" style="font-size: 1.3rem; color: var(--text-dark); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
        <span>⏰</span> 50–60 Minute Step-by-Step Lesson Timeline
      </h4>

      <div class="timeline-stepper">
        ${plan.timeline.map((step) => `
          <div class="timeline-step-card">
            <div class="step-time-badge">${step.time}</div>
            <div class="step-card-content">
              <h4 class="step-stage-title">${step.stage}</h4>
              <p style="margin-bottom: 6px; font-size: 0.92rem; color: var(--primary); font-weight: 600;">Goal: ${step.goal}</p>
              <p style="margin-bottom: 10px; font-size: 0.95rem; color: var(--text-dark); white-space: pre-line;">${step.activity}</p>
              <div style="background: var(--primary-light); border-left: 3px solid var(--primary); padding: 10px 14px; border-radius: 6px; font-size: 0.92rem; color: var(--text-dark);">
                <strong>💡 Teacher Note / Prompt:</strong><br>
                <em>"${step.teacherPrompt}"</em>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="teacher-tips-section" style="margin-top: 32px;">
        <h4 class="serif-font" style="font-size: 1.3rem; color: var(--text-dark); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>💡</span> Teacher's Tips for Adult Learners & Portuguese Speakers
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          ${plan.teacherTips.map(tip => `
            <div style="background: var(--surface); border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
              <h5 style="color: var(--primary); font-size: 1rem; margin-bottom: 6px;">✨ ${tip.title}</h5>
              <p style="font-size: 0.9rem; color: var(--text-dark); line-height: 1.5;">${tip.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     6. Functional Language Renderer
     -------------------------------------------------------------------------- */
  function renderFunctionalPhrases() {
    const container = document.getElementById('functional-phrases-container');
    if (!container || !LONDON_VOCAB_DATA.functionalLanguage) return;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${LONDON_VOCAB_DATA.functionalLanguage.map(cat => `
          <div class="phrase-cat-card" style="background: var(--surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm);">
            <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.2rem; margin-bottom: 2px;">${cat.category}</h3>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">${cat.ptSubtitle}</div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${cat.phrases.map(p => `
                <div style="background: var(--bg-gradient-start); border: 1px solid var(--border-color); padding: 10px 12px; border-radius: var(--radius-sm); display: flex; align-items: flex-start; gap: 10px;">
                  <button class="audio-btn-sm" style="margin-top: 2px;" onclick="window.playAudio('${p.text.replace(/'/g, "\\'")}')">🔊</button>
                  <div style="display: flex; flex-direction: column;">
                    <strong style="color: var(--text-dark); font-size: 0.95rem;">"${p.text}"</strong>
                    <span style="font-size: 0.8rem; color: var(--primary); font-family: monospace;">${p.phonetic}</span>
                    <span style="font-size: 0.82rem; color: var(--text-muted);">🇵🇹 ${p.pt}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     7. Conversation Cards Renderer
     -------------------------------------------------------------------------- */
  const cardFilterEl = document.getElementById('card-category-filter');
  const cardsContainerEl = document.getElementById('conversation-cards-container');

  function renderCardFilters() {
    if (!cardFilterEl) return;
    const categories = ['all', 'Category A', 'Category B', 'Category C', 'Category D'];
    
    cardFilterEl.innerHTML = categories.map(cat => `
      <button class="filter-btn ${state.activeCardCat === cat ? 'active' : ''}" data-cat="${cat}">
        ${cat === 'all' ? '✨ All Cards' : cat}
      </button>
    `).join('');

    cardFilterEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCardCat = btn.getAttribute('data-cat');
        renderCardFilters();
        renderConversationCards();
      });
    });
  }

  function renderConversationCards() {
    if (!cardsContainerEl || !LONDON_VOCAB_DATA.conversationCards) return;

    let cardsToRender = LONDON_VOCAB_DATA.conversationCards.filter(c => {
      return state.activeCardCat === 'all' || c.category.startsWith(state.activeCardCat);
    });

    cardsContainerEl.innerHTML = cardsToRender.map(card => {
      const selectedIndex = state.selectedCardOptions[card.id];

      return `
        <div class="dilemma-card" style="background: var(--surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 3px 10px; border-radius: 12px;">
              ${card.icon} ${card.category}
            </span>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${card.ptTitle}</span>
          </div>

          <h3 class="serif-font" style="font-size: 1.2rem; color: var(--text-dark); margin-bottom: 12px;">${card.title}</h3>
          <p style="font-size: 0.95rem; color: var(--text-dark); margin-bottom: 16px; line-height: 1.5;">"${card.question}"</p>

          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
            ${card.options.map((opt, idx) => `
              <button class="option-pick-btn ${selectedIndex === idx ? 'selected' : ''}" onclick="window.pickCardOption('${card.id}', ${idx})" style="padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid ${selectedIndex === idx ? 'var(--primary)' : 'var(--border-color)'}; background: ${selectedIndex === idx ? 'var(--primary-light)' : 'var(--surface)'}; text-align: left; font-size: 0.9rem; cursor: pointer; transition: var(--transition);">
                ${selectedIndex === idx ? '✅' : '⚪'} <strong>Option ${idx === 0 ? 'A' : 'B'}:</strong> ${opt}
              </button>
            `).join('')}
          </div>

          <div style="background: var(--bg-gradient-start); padding: 10px 12px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-dark); margin-top: auto; border: 1px dashed var(--border-color);">
            💡 <strong>Speaking Tip:</strong> ${card.prompt}
          </div>
        </div>
      `;
    }).join('');
  }

  window.pickCardOption = (cardId, optionIdx) => {
    state.selectedCardOptions[cardId] = optionIdx;
    saveState();
    renderConversationCards();
  };

  /* --------------------------------------------------------------------------
     8. THE ADD-THE-GRID GAME ENGINE (WEEK 2 HOMEWORK)
     -------------------------------------------------------------------------- */
  let activeChallengeTile = null;

  function renderGridGame() {
    const container = document.getElementById('grid-game-container');
    if (!container) return;

    if (!LONDON_VOCAB_DATA.gridGame) {
      container.innerHTML = '';
      return;
    }

    const game = LONDON_VOCAB_DATA.gridGame;
    const gridState = state.gridGameState || {};

    // Calculate score & completed rows
    let gridScore = 0;
    let placedCount = 0;

    const rowStatus = [true, true, true, true]; // Check if all 4 tiles in row are placed

    game.arcs.forEach((arc, rIdx) => {
      arc.tiles.forEach((tile, cIdx) => {
        const key = tile.id;
        if (gridState[key] && gridState[key].placed) {
          placedCount++;
          gridScore += 25; // 25 pts per tile
        } else {
          rowStatus[rIdx] = false;
        }
      });
      if (rowStatus[rIdx]) {
        gridScore += 100; // +100 bonus pts for full story arc combo
      }
    });

    const isAllCompleted = placedCount === 16;

    container.innerHTML = `
      <div class="grid-game-wrapper">
        <div class="grid-game-header">
          <div class="grid-game-title-group">
            <span style="background: var(--primary-light); color: var(--primary); font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: 12px;">
              🧩 Week 2 Main Game Homework
            </span>
            <h3 class="serif-font" style="margin-top: 6px;">${game.title}</h3>
            <p class="grid-game-subtitle">${game.subtitle}</p>
          </div>
          <div class="grid-score-card">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.8;">Grid Game Score</span>
            <span class="grid-score-val" id="grid-game-score-display">${gridScore} pts</span>
            <span style="font-size: 0.75rem; opacity: 0.9;">${placedCount}/16 Tiles Placed</span>
          </div>
        </div>

        <div style="background: rgba(200, 107, 123, 0.08); border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 6px; font-size: 0.9rem; color: var(--text-dark); margin-bottom: 20px;">
          💡 <strong>How to Play:</strong> ${game.instructions}
        </div>

        <!-- Column Headers -->
        <div class="grid-matrix-header-row">
          ${game.columnsHeader.map(col => `
            <div class="grid-col-header">
              <span>${col.label}</span>
              <span class="pt-sub">🇵🇹 ${col.pt}</span>
            </div>
          `).join('')}
        </div>

        <!-- 4x4 Grid Matrix Board -->
        <div class="grid-matrix-board">
          ${game.arcs.map((arc, rIdx) => `
            <div class="grid-matrix-row ${rowStatus[rIdx] ? 'row-completed' : ''}">
              ${rowStatus[rIdx] ? `
                <div class="row-combo-badge">
                  <span>✨</span> Story Arc Completed! (+100 Bonus Pts)
                </div>
              ` : ''}
              
              ${arc.tiles.map((tile, cIdx) => {
                const tileSaved = gridState[tile.id];
                const isPlaced = tileSaved && tileSaved.placed;

                return `
                  <div class="grid-slot ${isPlaced ? 'filled correct' : 'empty'}" 
                       onclick="${!isPlaced ? `window.openTileChallenge('${tile.id}')` : ''}">
                    ${isPlaced ? `
                      <span class="grid-slot-stage-tag">✓ ${tile.stage}</span>
                      <p class="grid-slot-text">"${tile.text.replace('______', `<strong>${tile.missingWord}</strong>`)}"</p>
                      <span class="grid-slot-pt">🇵🇹 ${tile.pt}</span>
                      <div class="grid-slot-actions">
                        <button class="audio-btn-sm" onclick="event.stopPropagation(); window.playAudio('${tile.audioText.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
                      </div>
                    ` : `
                      <div class="slot-placeholder">
                        <span style="font-size: 1.3rem;">➕</span>
                        <span>Click to Add Tile</span>
                        <span style="font-size: 0.7rem; color: var(--primary); font-weight: 700;">[Slot ${rIdx + 1}.${cIdx + 1}]</span>
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          `).join('')}
        </div>

        <!-- Tile Deck (Available Cards to Add to Grid) -->
        <div class="grid-deck-container">
          <div class="grid-deck-header">
            <span>🎴 Available Story Block Deck (${16 - placedCount} Left to Add)</span>
            <button class="btn-secondary" style="font-size: 0.8rem; padding: 4px 10px;" onclick="window.resetGridGame()">🔄 Reset Grid Game</button>
          </div>
          
          <div class="grid-deck-grid">
            ${game.arcs.flatMap(arc => arc.tiles).map(tile => {
              const isPlaced = gridState[tile.id] && gridState[tile.id].placed;
              return `
                <div class="deck-tile ${isPlaced ? 'used' : ''}" onclick="${!isPlaced ? `window.openTileChallenge('${tile.id}')` : ''}">
                  <span class="deck-tile-stage">${tile.stage} • ${tile.connector}</span>
                  <div class="deck-tile-prompt">"${tile.text}"</div>
                  <span class="deck-tile-pt">🇵🇹 ${tile.pt}</span>
                  ${isPlaced ? `<span style="font-size: 0.75rem; color: var(--success); font-weight: 700; margin-top: 4px;">✓ Added to Grid</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Victory Banner -->
        <div class="grid-victory-banner ${isAllCompleted ? 'active' : ''}">
          <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--accent-gold); margin-bottom: 8px;">
            🏆 Master Storyteller Grid Completed! 🎉
          </h3>
          <p style="font-size: 1.05rem; opacity: 0.9; max-width: 600px; margin: 0 auto 16px;">
            You successfully added all 16 story tiles across 4 complete anecdote arcs! Your total game score is <strong>500 points</strong>!
          </p>
          <button class="btn-primary" onclick="document.querySelector('[data-tab=progress]').click()">
            <span>📊</span> View Progress & Download Preply Report
          </button>
        </div>
      </div>

      <!-- Tile Challenge Interactive Modal -->
      <div class="tile-challenge-modal-backdrop" id="tile-modal-backdrop">
        <div class="tile-challenge-box" id="tile-modal-box">
          <!-- Rendered dynamically when tile clicked -->
        </div>
      </div>
    `;
  }

  window.openTileChallenge = (tileId) => {
    const game = LONDON_VOCAB_DATA.gridGame;
    if (!game) return;

    let targetTile = null;
    game.arcs.forEach(arc => {
      const found = arc.tiles.find(t => t.id === tileId);
      if (found) targetTile = found;
    });

    if (!targetTile) return;
    activeChallengeTile = targetTile;

    const modalBackdrop = document.getElementById('tile-modal-backdrop');
    const modalBox = document.getElementById('tile-modal-box');
    if (!modalBackdrop || !modalBox) return;

    modalBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="background: var(--primary-light); color: var(--primary); font-size: 0.8rem; font-weight: 700; padding: 3px 10px; border-radius: 12px;">
          🧩 Add to Grid Slot • Stage: ${targetTile.stage}
        </span>
        <button onclick="window.closeTileModal()" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">✕</button>
      </div>

      <h4 class="challenge-question-title">Complete the Story Block Connector</h4>
      <p class="challenge-sentence">"${targetTile.text}"</p>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">🇵🇹 Portuguese Helper: "${targetTile.pt}"</div>

      <div class="challenge-options-grid">
        ${targetTile.options.map(opt => `
          <button class="challenge-option-btn" onclick="window.submitTileAnswer('${targetTile.id}', '${opt.replace(/'/g, "\\'")}')">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div class="challenge-feedback-msg" id="modal-feedback-msg"></div>
    `;

    modalBackdrop.classList.add('active');
  };

  window.closeTileModal = () => {
    const modalBackdrop = document.getElementById('tile-modal-backdrop');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  };

  window.submitTileAnswer = (tileId, selectedOption) => {
    if (!activeChallengeTile || activeChallengeTile.id !== tileId) return;

    const isCorrect = selectedOption === activeChallengeTile.missingWord;
    const feedbackEl = document.getElementById('modal-feedback-msg');

    if (isCorrect) {
      if (feedbackEl) {
        feedbackEl.className = 'challenge-feedback-msg correct';
        feedbackEl.textContent = `✨ Correct! Added tile to the Grid (+25 pts)!`;
      }
      
      speakWord(activeChallengeTile.audioText);

      state.gridGameState[tileId] = {
        placed: true,
        answeredCorrectly: true
      };
      saveState();

      setTimeout(() => {
        window.closeTileModal();
        renderGridGame();
      }, 1200);

    } else {
      if (feedbackEl) {
        feedbackEl.className = 'challenge-feedback-msg wrong';
        feedbackEl.textContent = `❌ Try again! Pick the connector that fits the narrative tense.`;
      }
    }
  };

  window.resetGridGame = () => {
    if (confirm('Reset the Add-the-Grid Game board?')) {
      state.gridGameState = {};
      saveState();
      renderGridGame();
    }
  };

  /* --------------------------------------------------------------------------
     9. Homework Quizzes Engine
     -------------------------------------------------------------------------- */
  const quizContainerEl = document.getElementById('quiz-questions-container');

  function renderQuizzes() {
    if (!quizContainerEl || !LONDON_VOCAB_DATA.quizzes) return;

    quizContainerEl.innerHTML = LONDON_VOCAB_DATA.quizzes.map(q => {
      const isCompleted = !!state.completedQuizzes[q.id];
      const completedData = state.completedQuizzes[q.id] || {};

      return `
        <div class="quiz-card" style="background: var(--surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="quiz-badge" style="background: var(--primary-light); color: var(--primary); padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">
              ✏️ ${q.category}
            </span>
            ${isCompleted ? `
              <span style="font-size: 0.85rem; font-weight: 700; color: ${completedData.correct ? 'var(--success)' : 'var(--error)'};">
                ${completedData.correct ? '✓ Correct (+10 pts)' : '✗ Try Again'}
              </span>
            ` : ''}
          </div>

          <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 12px;">
            ${q.question || q.sentence}
          </h4>

          ${q.type === 'mcq' ? `
            <div class="mcq-options" style="display: flex; flex-direction: column; gap: 8px;">
              ${q.options.map((opt, idx) => `
                <button class="mcq-btn ${isCompleted && completedData.answerIndex === idx ? (completedData.correct ? 'correct' : 'incorrect') : ''}" 
                        onclick="window.submitMCQ('${q.id}', ${idx})" 
                        style="padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); text-align: left; font-size: 0.9rem; cursor: pointer;">
                  ${opt}
                </button>
              `).join('')}
            </div>
          ` : `
            <div class="fill-blank-row" style="display: flex; gap: 8px;">
              <input type="text" id="input-${q.id}" class="blank-input" placeholder="Type answer here..." value="${isCompleted ? completedData.answer : ''}" style="flex: 1; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-sm);" />
              <button class="btn-primary-sm" onclick="window.submitFillBlank('${q.id}')">Submit</button>
            </div>
          `}

          ${isCompleted ? `
            <div class="explanation-box" style="margin-top: 12px; padding: 10px; background: var(--bg-gradient-start); border-radius: var(--radius-sm); font-size: 0.88rem; color: var(--text-dark);">
              💡 <strong>Explanation:</strong> ${q.explanation || 'Correct answer: ' + q.correctAnswer}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  window.submitMCQ = (quizId, optionIndex) => {
    const quiz = LONDON_VOCAB_DATA.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    const isCorrect = optionIndex === quiz.correct;
    state.completedQuizzes[quizId] = {
      correct: isCorrect,
      answerIndex: optionIndex,
      score: isCorrect ? 10 : 0
    };
    saveState();
    renderQuizzes();
  };

  window.submitFillBlank = (quizId) => {
    const quiz = LONDON_VOCAB_DATA.quizzes.find(q => q.id === quizId);
    const inputEl = document.getElementById(`input-${quizId}`);
    if (!quiz || !inputEl) return;

    const userVal = inputEl.value.trim().toLowerCase();
    const isCorrect = userVal === quiz.correctAnswer.toLowerCase();

    state.completedQuizzes[quizId] = {
      correct: isCorrect,
      answer: inputEl.value,
      score: isCorrect ? 10 : 0
    };
    saveState();
    renderQuizzes();
  };

  /* --------------------------------------------------------------------------
     10. Progress UI & Preply Report Generator
     -------------------------------------------------------------------------- */
  function updateProgressUI() {
    const totalQuizzes = LONDON_VOCAB_DATA.quizzes ? LONDON_VOCAB_DATA.quizzes.length : 0;
    let completedCount = 0;
    let quizScore = 0;

    Object.values(state.completedQuizzes).forEach(cq => {
      if (cq.correct) {
        completedCount++;
        quizScore += cq.score || 10;
      }
    });

    // Add Grid Game score if active in week 2
    let gridScore = 0;
    if (LONDON_VOCAB_DATA.gridGame) {
      let placedCount = 0;
      const game = LONDON_VOCAB_DATA.gridGame;
      game.arcs.forEach((arc, rIdx) => {
        let rowFull = true;
        arc.tiles.forEach(tile => {
          if (state.gridGameState[tile.id] && state.gridGameState[tile.id].placed) {
            placedCount++;
            gridScore += 25;
          } else {
            rowFull = false;
          }
        });
        if (rowFull) gridScore += 100;
      });
    }

    const totalCombinedScore = quizScore + gridScore;
    const percent = totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;

    // Header updates
    const scoreValEl = document.getElementById('header-score-val');
    const progValEl = document.getElementById('header-progress-val');
    if (scoreValEl) scoreValEl.textContent = `${totalCombinedScore} pts`;
    if (progValEl) progValEl.textContent = `${percent}%`;

    // Progress Tab
    const labelEl = document.getElementById('progress-percent-label');
    const fillEl = document.getElementById('progress-bar-fill');
    if (labelEl) labelEl.textContent = `${percent}% (${completedCount}/${totalQuizzes} Quizzes Passed + ${gridScore} Grid Pts)`;
    if (fillEl) fillEl.style.width = `${percent}%`;

    // Summary Text
    const summaryTextEl = document.getElementById('summary-report-text');
    if (summaryTextEl) {
      summaryTextEl.textContent = generateReportText(completedCount, totalQuizzes, quizScore, gridScore, totalCombinedScore, percent);
    }
  }

  function generateReportText(completedCount, totalQuizzes, quizScore, gridScore, totalCombinedScore, percent) {
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const selectedCardsCount = Object.keys(state.selectedCardOptions).length;
    const studentName = LONDON_VOCAB_DATA?.studentName || "Student";
    const currentWeekTitle = LONDON_VOCAB_DATA?.lessonTitle || "English Practice";

    return `========================================
🌸 PREPLY ESL HOMEWORK REPORT (WEEK ${state.activeWeek})
Topic: ${currentWeekTitle}
Date: ${dateStr}
========================================
Student Name: ${studentName}
Target Level: Intermediate (B1/B2)
Course: Preply ESL Conversational Speaking

🏆 Total Combined Score: ${totalCombinedScore} points
 ├─ Grammar & Quiz Score: ${quizScore} pts (${completedCount} of ${totalQuizzes} Passed)
 └─ Add-the-Grid Game Score: ${gridScore} pts
🎴 Conversation Cards Prepared: ${selectedCardsCount} Selected

Active Week Skill Achievements:
 • Narrative Tenses & Story Structure: ${state.completedQuizzes['q_narr1']?.correct ? 'PASSED ✓' : 'Completed'}
 • Story Connectors & Transitions: ${state.completedQuizzes['q_phrase_story1']?.correct ? 'PASSED ✓' : 'Completed'}
 • Add-the-Grid Story Arc Game: ${gridScore > 0 ? `ACTIVE (${gridScore} Pts Earned)` : 'Pending'}

Note: Generated automatically from Preply ESL Speaking Hub!
========================================`;
  }

  // Copy report button
  const copyBtn = document.getElementById('btn-copy-report');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const summaryText = document.getElementById('summary-report-text').textContent;
      navigator.clipboard.writeText(summaryText).then(() => {
        const orig = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span>✓</span> Copied to Clipboard!`;
        setTimeout(() => { copyBtn.innerHTML = orig; }, 2500);
      }).catch(() => {
        alert('Could not copy report. Please select and copy manually.');
      });
    });
  }

  // Download file button
  const downloadBtn = document.getElementById('btn-download-report');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const summaryText = document.getElementById('summary-report-text').textContent;
      const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Preply_Week${state.activeWeek}_Homework.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      const orig = downloadBtn.innerHTML;
      downloadBtn.innerHTML = `<span>✓</span> Downloaded!`;
      setTimeout(() => { downloadBtn.innerHTML = orig; }, 2500);
    });
  }

  // Reset button
  const resetBtn = document.getElementById('btn-reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all homework progress?')) {
        state.completedQuizzes = {};
        state.selectedCardOptions = {};
        state.gridGameState = {};
        saveState();
        renderQuizzes();
        renderConversationCards();
        renderGridGame();
        alert('Progress reset successfully!');
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. 8-Week Syllabus Roadmap Renderer
     -------------------------------------------------------------------------- */
  function render8WeekSyllabus() {
    const container = document.getElementById('syllabus-roadmap-container');
    if (!container || !LONDON_VOCAB_DATA.eightWeekSyllabus) return;

    container.innerHTML = LONDON_VOCAB_DATA.eightWeekSyllabus.map(item => {
      const isCurrentActive = state.activeWeek === item.week;
      return `
        <div class="syllabus-card ${isCurrentActive ? 'active-week' : ''}" style="background: ${isCurrentActive ? 'linear-gradient(135deg, #fffafc 0%, #fff0f3 100%)' : 'var(--surface)'}; border: 2px solid ${isCurrentActive ? 'var(--primary)' : 'var(--border-color)'}; border-radius: var(--radius-md); padding: 18px; box-shadow: ${isCurrentActive ? 'var(--shadow-md)' : 'var(--shadow-sm)'}; position: relative; transition: var(--transition);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.8rem; font-weight: 700; background: ${isCurrentActive ? 'var(--primary)' : 'var(--primary-light)'}; color: ${isCurrentActive ? '#fff' : 'var(--primary)'}; padding: 3px 12px; border-radius: 12px;">
              Week ${item.week} • ${item.status}
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${item.ptTitle}</span>
          </div>

          <h3 class="serif-font" style="font-size: 1.15rem; color: var(--text-dark); margin-bottom: 8px;">${item.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-dark); margin-bottom: 6px;"><strong>🗣️ Focus:</strong> ${item.focus}</p>
          <p style="font-size: 0.85rem; color: var(--primary); margin-bottom: 14px;"><strong>📚 Grammar:</strong> ${item.grammar}</p>

          ${item.week <= 2 ? `
            <button onclick="window.switchWeek(${item.week})" class="btn-primary-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-weight: 700; cursor: pointer;">
              <span>${item.week === 2 ? '🧩' : '🌸'}</span> ${isCurrentActive ? 'Active Workspace' : `Switch to Week ${item.week}`}
            </button>
          ` : `
            <span style="font-size: 0.82rem; color: var(--text-light); font-style: italic;">Upcoming (Unlocks Week ${item.week})</span>
          `}
        </div>
      `;
    }).join('');
  }

  /* --------------------------------------------------------------------------
     Initialize App Views
     -------------------------------------------------------------------------- */
  updateHeaderAndHeroUI();
  render8WeekSyllabus();
  renderVisualCards();
  renderTeacherLessonPlan();
  renderFunctionalPhrases();
  renderCardFilters();
  renderConversationCards();
  renderQuizzes();
  renderGridGame();
  updateProgressUI();
});
