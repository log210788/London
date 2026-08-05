/* ==========================================================================
   Gabriela's London ESL Homework Hub - Interactive App Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // State initialization with localStorage recovery
  const STORAGE_KEY = 'gabriela_london_esl_progress';
  
  let state = {
    completedQuizzes: {}, // { quizId: { correct: boolean, answer: string, score: number } }
    activeFlashcardCat: 'all',
    activeQuizCat: 'all',
    activeRoleplayId: 'rp_cafe',
    roleplayProgress: {}, // { roleplayId: currentStepIndex }
    gridScore: 0
  };

  // Load saved state
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.completedQuizzes = parsed.completedQuizzes || {};
      state.roleplayProgress = parsed.roleplayProgress || {};
      state.gridScore = parsed.gridScore || 0;
    }
  } catch (e) {
    console.error('Could not load local progress', e);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedQuizzes: state.completedQuizzes,
        roleplayProgress: state.roleplayProgress,
        gridScore: state.gridScore || 0
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
    window.speechSynthesis.cancel(); // Stop ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // Slightly relaxed pace for ESL learners
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

    // Search for British English voice
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British'));
    if (ukVoice) {
      utterance.voice = ukVoice;
    } else {
      utterance.lang = 'en-GB';
    }

    window.speechSynthesis.speak(utterance);

    // Fallback safety timeout if browser fails to trigger onend
    if (typeof onEndCallback === 'function') {
      const estimatedDurationMs = Math.max(2500, text.length * 110);
      setTimeout(safeEnd, estimatedDurationMs + 1000);
    }
  }


  // Pre-load voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  /* --------------------------------------------------------------------------
     2. Navigation Tabs
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
     3. Flashcards Engine
     -------------------------------------------------------------------------- */
  const flashcardFilterEl = document.getElementById('flashcard-category-filter');
  const flashcardsContainerEl = document.getElementById('flashcards-container');

  function renderFlashcardFilters() {
    let html = `
      <button class="filter-btn ${state.activeFlashcardCat === 'all' ? 'active' : ''}" data-cat="all">
        ✨ All Topics
      </button>
    `;

    LONDON_VOCAB_DATA.categories.forEach(cat => {
      html += `
        <button class="filter-btn ${state.activeFlashcardCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
          ${cat.icon} ${cat.title}
        </button>
      `;
    });

    flashcardFilterEl.innerHTML = html;

    flashcardFilterEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeFlashcardCat = btn.getAttribute('data-cat');
        renderFlashcardFilters();
        renderFlashcards();
      });
    });
  }

  function renderFlashcards() {
    let wordsToRender = [];

    LONDON_VOCAB_DATA.categories.forEach(cat => {
      if (state.activeFlashcardCat === 'all' || state.activeFlashcardCat === cat.id) {
        cat.words.forEach(w => {
          wordsToRender.push({ ...w, categoryTitle: cat.title, categoryIcon: cat.icon });
        });
      }
    });

    if (wordsToRender.length === 0) {
      flashcardsContainerEl.innerHTML = `<p class="section-desc">No words found in this topic.</p>`;
      return;
    }

    flashcardsContainerEl.innerHTML = wordsToRender.map(w => `
      <div class="flashcard" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <div class="card-top">
              <span class="pos-tag">${w.pos}</span>
              <button class="audio-btn" title="Listen to British pronunciation" onclick="event.stopPropagation(); window.playAudio('${w.word.replace(/'/g, "\\'")}')">
                🔊
              </button>
            </div>
            <div class="card-body">
              <div class="card-word">${w.word}</div>
              <div class="card-phonetic">${w.phonetic}</div>
              ${w.ptTranslation ? `<div class="card-pt-translation">🇵🇹 ${w.ptTranslation}</div>` : ''}
            </div>
            <div class="card-hint-text">
              <span>💡 Tap card to view details</span>
            </div>
          </div>
          
          <div class="flashcard-back">
            <div class="card-top">
              <span class="pos-tag">${w.categoryIcon} ${w.categoryTitle}</span>
              <button class="audio-btn" title="Listen to example" onclick="event.stopPropagation(); window.playAudio('${w.example.replace(/'/g, "\\'")}')">
                🔊
              </button>
            </div>
            <div class="card-body">
              <p class="card-definition">${w.definition}</p>
              <p class="card-example">"${w.example}"</p>
            </div>
            <div class="card-tip">
              🇵🇹 <strong>Tradução:</strong> ${w.ptTranslation}<br>
              💡 <strong>Tip:</strong> ${w.tip}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }


  window.playAudio = (text) => {
    speakWord(text);
  };

  /* --------------------------------------------------------------------------
     4. Homework Quizzes Engine
     -------------------------------------------------------------------------- */
  const quizFilterEl = document.getElementById('quiz-category-filter');
  const quizContainerEl = document.getElementById('quiz-questions-container');

  function renderQuizFilters() {
    let html = `
      <button class="filter-btn ${state.activeQuizCat === 'all' ? 'active' : ''}" data-cat="all">
        ✨ All Quizzes
      </button>
    `;

    LONDON_VOCAB_DATA.categories.forEach(cat => {
      html += `
        <button class="filter-btn ${state.activeQuizCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
          ${cat.icon} ${cat.title}
        </button>
      `;
    });

    quizFilterEl.innerHTML = html;

    quizFilterEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeQuizCat = btn.getAttribute('data-cat');
        renderQuizFilters();
        renderQuizzes();
      });
    });
  }

  function renderQuizzes() {
    let quizList = [];

    LONDON_VOCAB_DATA.categories.forEach(cat => {
      if (state.activeQuizCat === 'all' || state.activeQuizCat === cat.id) {
        cat.quizzes.forEach(q => {
          quizList.push({ ...q, catTitle: cat.title, catIcon: cat.icon });
        });
      }
    });

    if (quizList.length === 0) {
      quizContainerEl.innerHTML = `<p class="section-desc">No quizzes in this category.</p>`;
      return;
    }

    quizContainerEl.innerHTML = quizList.map((q, idx) => {
      const isCompleted = state.completedQuizzes[q.id];
      
      if (q.type === 'mcq') {
        return `
          <div class="quiz-card" id="quiz-card-${q.id}">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">
              ${q.catIcon} ${q.catTitle} • Question ${idx + 1}
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
              ${q.options.map((opt, optIdx) => {
                let statusClass = '';
                if (isCompleted) {
                  if (optIdx === q.correct) statusClass = 'selected-correct';
                  else if (isCompleted.userAnswerIndex === optIdx) statusClass = 'selected-incorrect';
                }
                return `
                  <button class="option-btn ${statusClass}" 
                          ${isCompleted ? 'disabled' : ''} 
                          onclick="window.handleMCQSubmit('${q.id}', ${optIdx}, ${q.correct})">
                    <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                    ${isCompleted && optIdx === q.correct ? '<span>✓ Correct</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
            
            <div class="feedback-msg ${isCompleted ? (isCompleted.correct ? 'show-success' : 'show-error') : ''}" id="feedback-${q.id}">
              ${isCompleted ? (isCompleted.correct ? `🎉 Excellent, Gabriela! ${q.explanation}` : `Not quite! The correct answer is: "${q.options[q.correct]}".`) : ''}
            </div>
          </div>
        `;
      } else if (q.type === 'fill_blank') {
        const userSavedText = isCompleted ? isCompleted.userText : '';
        return `
          <div class="quiz-card" id="quiz-card-${q.id}">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">
              ${q.catIcon} ${q.catTitle} • Question ${idx + 1} (Fill in the Blank)
            </div>
            <div class="quiz-question">${q.sentence.replace('_____', '<span style="color: var(--primary); text-decoration: underline;">_______</span>')}</div>
            <div class="fill-blank-box">
              <input type="text" id="blank-input-${q.id}" class="blank-input" placeholder="Type answer here..." value="${userSavedText}" ${isCompleted ? 'disabled' : ''}>
              <button class="btn-primary" ${isCompleted ? 'disabled' : ''} onclick="window.handleFillBlankSubmit('${q.id}', '${q.correctAnswer}')">
                Check Answer ✨
              </button>
            </div>
            
            <div class="feedback-msg ${isCompleted ? (isCompleted.correct ? 'show-success' : 'show-error') : ''}" id="feedback-${q.id}">
              ${isCompleted ? (isCompleted.correct ? `🎉 Perfect spelling, Gabriela!` : `Not quite! The correct word is: "${q.correctAnswer}".`) : `💡 Hint: ${q.hint}`}
            </div>
          </div>
        `;
      }
      return '';
    }).join('');
  }

  window.handleMCQSubmit = (quizId, optIdx, correctIdx) => {
    const isCorrect = (optIdx === correctIdx);
    state.completedQuizzes[quizId] = {
      correct: isCorrect,
      userAnswerIndex: optIdx,
      score: isCorrect ? 10 : 0
    };
    saveState();
    renderQuizzes();
    if (isCorrect) speakWord('Great job, Gabriela!');
  };

  window.handleFillBlankSubmit = (quizId, correctAnswer) => {
    const inputEl = document.getElementById(`blank-input-${quizId}`);
    if (!inputEl) return;
    const userVal = inputEl.value.trim();
    if (!userVal) return;

    const isCorrect = userVal.toLowerCase() === correctAnswer.toLowerCase();
    state.completedQuizzes[quizId] = {
      correct: isCorrect,
      userText: userVal,
      score: isCorrect ? 10 : 0
    };
    saveState();
    renderQuizzes();
    if (isCorrect) speakWord('Spot on!');
  };

  /* --------------------------------------------------------------------------
     5. Roleplay Simulator Engine
     -------------------------------------------------------------------------- */
  const roleplaySelectorEl = document.getElementById('roleplay-selector');
  const roleplayContainerEl = document.getElementById('active-roleplay-container');

  function renderRoleplaySelectors() {
    let html = '';
    LONDON_VOCAB_DATA.roleplays.forEach(rp => {
      html += `
        <button class="filter-btn ${state.activeRoleplayId === rp.id ? 'active' : ''}" data-rpid="${rp.id}">
          ${rp.title}
        </button>
      `;
    });
    roleplaySelectorEl.innerHTML = html;

    roleplaySelectorEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeRoleplayId = btn.getAttribute('data-rpid');
        renderRoleplaySelectors();
        renderRoleplayStep();
      });
    });
  }

  function renderRoleplayStep() {
    const rp = LONDON_VOCAB_DATA.roleplays.find(r => r.id === state.activeRoleplayId);
    if (!rp) return;

    const currentStepIdx = state.roleplayProgress[rp.id] || 0;

    if (currentStepIdx >= rp.steps.length) {
      // Completed roleplay
      roleplayContainerEl.innerHTML = `
        <div class="roleplay-card" style="text-align: center;">
          <h3 class="serif-font" style="font-size: 1.8rem; color: var(--primary); margin-bottom: 12px;">
            🎉 Roleplay Complete!
          </h3>
          <p class="section-desc" style="margin-bottom: 20px;">
            Wonderful job, Gabriela! You completed "${rp.title}". You are ready for London!
          </p>
          <button class="btn-primary" onclick="window.restartRoleplay('${rp.id}')">
            🔄 Practice Again
          </button>
        </div>
      `;
      return;
    }

    const step = rp.steps[currentStepIdx];

    roleplayContainerEl.innerHTML = `
      <div class="roleplay-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3 class="serif-font" style="font-size: 1.3rem; color: var(--primary);">${rp.title}</h3>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">Step ${currentStepIdx + 1} of ${rp.steps.length}</span>
        </div>

        <!-- Speaker Line -->
        <div class="dialogue-box">
          <div class="dialogue-speaker">
            <span>🗣️ ${step.speaker}</span>
            <button class="audio-btn" style="float: right; margin-top: -6px;" onclick="window.playAudio('${step.line.replace(/'/g, "\\'")}')">🔊</button>
          </div>
          <div class="dialogue-text">"${step.line}"</div>
        </div>

        <p style="font-weight: 600; font-size: 0.95rem; margin-bottom: 12px;">
          ✨ How should Gabriela respond?
        </p>

        <div class="quiz-options">
          ${step.options.map((opt, optIdx) => `
            <button class="option-btn" onclick="window.handleRoleplayChoice('${rp.id}', ${optIdx})">
              <span>💬 "${opt.text}"</span>
            </button>
          `).join('')}
        </div>

        <div id="roleplay-feedback" class="feedback-msg" style="margin-top: 16px;"></div>
      </div>
    `;

    // Speak the speaker line automatically
    speakWord(step.line);
  }

  window.handleRoleplayChoice = (rpId, choiceIdx) => {
    const rp = LONDON_VOCAB_DATA.roleplays.find(r => r.id === rpId);
    const currentStepIdx = state.roleplayProgress[rpId] || 0;
    const step = rp.steps[currentStepIdx];
    const choice = step.options[choiceIdx];

    const feedbackEl = document.getElementById('roleplay-feedback');
    if (choice.correct) {
      feedbackEl.className = 'feedback-msg show-success';
      feedbackEl.innerHTML = `🎉 ${choice.feedback}`;
      
      // Speak full response and wait for audio to finish before advancing
      speakWord(choice.text, () => {
        setTimeout(() => {
          state.roleplayProgress[rpId] = currentStepIdx + 1;
          saveState();
          renderRoleplayStep();
        }, 600);
      });
    } else {
      feedbackEl.className = 'feedback-msg show-error';
      feedbackEl.innerHTML = `💡 ${choice.feedback}`;
    }
  };


  window.restartRoleplay = (rpId) => {
    state.roleplayProgress[rpId] = 0;
    saveState();
    renderRoleplayStep();
  };

  /* --------------------------------------------------------------------------
     6. Winter Tips
     -------------------------------------------------------------------------- */
  function renderWinterTips() {
    const container = document.getElementById('winter-tips-container');
    container.innerHTML = LONDON_VOCAB_DATA.winterTips.map(tip => `
      <div class="tip-card">
        <div class="tip-icon">${tip.icon}</div>
        <h3 class="tip-title serif-font">${tip.title}</h3>
        ${tip.ptSubtitle ? `<div style="font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 6px;">🇵🇹 ${tip.ptSubtitle}</div>` : ''}
        <p class="tip-text">${tip.text}</p>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     5x5 Vocab Grid Game Engine (5-Stage Challenge)
     -------------------------------------------------------------------------- */
  let gridState = {
    currentStage: 1,       // 1 to 5
    maxStages: 5,
    stageScores: [0, 0, 0, 0, 0], // Correct counts per stage
    stageCompleted: [false, false, false, false, false],
    currentGrid: [],       // 25 items: { word, ptTranslation, pos, categoryIcon, coord }
    targetIndices: [],     // Array of 5 target indices
    selectedIndices: [],   // Array of user-selected indices
    isChecked: false,      // Whether current stage was checked
    totalGridScore: state.gridScore || 0,
    isPlayingAudioSequence: false
  };

  function getAllVocabWords() {
    let all = [];
    LONDON_VOCAB_DATA.categories.forEach(cat => {
      cat.words.forEach(w => {
        all.push({
          word: w.word,
          ptTranslation: w.ptTranslation,
          pos: w.pos,
          example: w.example,
          categoryIcon: cat.icon
        });
      });
    });
    return all;
  }

  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initGridGame(isNewSession = false) {
    if (isNewSession) {
      gridState.currentStage = 1;
      gridState.stageScores = [0, 0, 0, 0, 0];
      gridState.stageCompleted = [false, false, false, false, false];
    }

    startStage(gridState.currentStage);
  }

  function startStage(stageNum) {
    gridState.currentStage = stageNum;
    gridState.isChecked = false;
    gridState.selectedIndices = [];

    const pool = getAllVocabWords();
    const shuffledPool = shuffleArray(pool);

    let gridWords = [];
    while (gridWords.length < 25) {
      gridWords = gridWords.concat(shuffledPool);
    }
    gridWords = gridWords.slice(0, 25);

    const rowLetters = ['A', 'B', 'C', 'D', 'E'];
    const colNums = [1, 2, 3, 4, 5];

    gridState.currentGrid = gridWords.map((item, idx) => {
      const r = Math.floor(idx / 5);
      const c = idx % 5;
      return {
        ...item,
        coord: `${rowLetters[r]}${colNums[c]}`
      };
    });

    const indices = Array.from({ length: 25 }, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    gridState.targetIndices = shuffledIndices.slice(0, 5);

    renderGridGameUI();
  }

  function renderGridGameUI() {
    // 1. Stage Dots & Info Bar
    const stageTitleEl = document.getElementById('stage-title-label');
    if (stageTitleEl) stageTitleEl.textContent = `Stage ${gridState.currentStage} of ${gridState.maxStages}`;

    const currentStageNumEl = document.getElementById('current-stage-num');
    if (currentStageNumEl) currentStageNumEl.textContent = gridState.currentStage;

    const totalSessionScore = gridState.stageScores.reduce((a, b) => a + b, 0);
    const totalPointsVal = document.getElementById('grid-total-points-val');
    if (totalPointsVal) totalPointsVal.textContent = `${gridState.totalGridScore} pts`;

    const stageScoreLabel = document.getElementById('stage-score-label');
    if (stageScoreLabel) {
      stageScoreLabel.textContent = `Stage Score: ${gridState.stageScores[gridState.currentStage - 1]} / 5 | Total Session: ${totalSessionScore} / 25`;
    }

    const dotsContainer = document.getElementById('stage-dots-container');
    if (dotsContainer) {
      let dotsHtml = '';
      for (let s = 1; s <= 5; s++) {
        let dotClass = 'stage-dot';
        let icon = `S${s}`;
        if (s < gridState.currentStage || (s === gridState.currentStage && gridState.isChecked)) {
          dotClass += ' completed';
          icon = `✓ S${s}`;
        } else if (s === gridState.currentStage) {
          dotClass += ' current';
          icon = `▶ S${s}`;
        }
        dotsHtml += `<div class="${dotClass}">${icon}</div>`;
      }
      dotsContainer.innerHTML = dotsHtml;
    }

    // 2. Target Chips
    const chipsContainer = document.getElementById('target-chips-container');
    if (chipsContainer) {
      chipsContainer.innerHTML = gridState.targetIndices.map((targetIdx, i) => {
        return `
          <button class="target-chip" data-target-idx="${targetIdx}" data-num="${i + 1}">
            <span class="target-num-badge">${i + 1}</span>
            <span>Listen #${i + 1}</span>
            <span class="chip-speaker-icon">🔊</span>
          </button>
        `;
      }).join('');

      chipsContainer.querySelectorAll('.target-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetIdx = parseInt(btn.getAttribute('data-target-idx'), 10);
          playSingleTarget(btn, targetIdx);
        });
      });
    }

    // 3. Status Badge & Buttons
    const countBadge = document.getElementById('grid-selection-count');
    if (countBadge) {
      const count = gridState.selectedIndices.length;
      countBadge.textContent = `Selected: ${count} / 5 cells`;
      if (count > 0) {
        countBadge.classList.add('active-count');
      } else {
        countBadge.classList.remove('active-count');
      }
    }

    const checkBtn = document.getElementById('btn-check-grid');
    const nextStageBtn = document.getElementById('btn-next-stage');

    if (checkBtn) {
      checkBtn.disabled = (gridState.selectedIndices.length !== 5 || gridState.isChecked);
      checkBtn.style.display = gridState.isChecked ? 'none' : 'inline-flex';
    }

    if (nextStageBtn) {
      if (gridState.isChecked) {
        nextStageBtn.style.display = 'inline-flex';
        if (gridState.currentStage < 5) {
          nextStageBtn.innerHTML = `<span>➡️</span> Next Stage (${gridState.currentStage + 1}/5)`;
        } else {
          nextStageBtn.innerHTML = `<span>🎉</span> View Final Results`;
        }
      } else {
        nextStageBtn.style.display = 'none';
      }
    }

    // 4. Per-Stage Result Card
    const resultCard = document.getElementById('grid-result-card');
    if (resultCard && !gridState.isChecked) {
      resultCard.style.display = 'none';
      resultCard.className = 'grid-result-card';
    }

    // 5. Final Results Banner
    const finalCard = document.getElementById('grid-final-results-card');
    if (finalCard && (gridState.currentStage !== 5 || !gridState.isChecked)) {
      finalCard.style.display = 'none';
    }

    // 6. Render Board
    const boardEl = document.getElementById('grid-5x5-board');
    if (!boardEl) return;

    let html = '';
    html += `<div class="grid-axis-label"></div>`;
    for (let c = 1; c <= 5; c++) {
      html += `<div class="grid-axis-label">${c}</div>`;
    }

    const rowLetters = ['A', 'B', 'C', 'D', 'E'];
    for (let r = 0; r < 5; r++) {
      html += `<div class="grid-axis-label">${rowLetters[r]}</div>`;

      for (let c = 0; c < 5; c++) {
        const idx = r * 5 + c;
        const cell = gridState.currentGrid[idx];
        const isSelected = gridState.selectedIndices.includes(idx);
        const isTarget = gridState.targetIndices.includes(idx);

        let cellClass = 'grid-cell';
        let statusIcon = '';

        if (gridState.isChecked) {
          if (isSelected && isTarget) {
            cellClass += ' correct';
            statusIcon = '<span class="cell-status-icon">✅</span>';
          } else if (isSelected && !isTarget) {
            cellClass += ' incorrect';
            statusIcon = '<span class="cell-status-icon">❌</span>';
          } else if (!isSelected && isTarget) {
            cellClass += ' missed';
            statusIcon = '<span class="cell-status-icon">💡</span>';
          }
        } else if (isSelected) {
          cellClass += ' selected';
          statusIcon = '<span class="cell-status-icon">✔️</span>';
        }

        html += `
          <div class="${cellClass}" data-cell-idx="${idx}">
            <span class="cell-coord-badge">${cell.coord}</span>
            <div class="cell-word-text">${cell.word}</div>
            <div class="cell-hint-text">${cell.categoryIcon}</div>
            ${statusIcon}
          </div>
        `;
      }
    }

    boardEl.innerHTML = html;

    boardEl.querySelectorAll('.grid-cell').forEach(cellEl => {
      cellEl.addEventListener('click', () => {
        const cellIdx = parseInt(cellEl.getAttribute('data-cell-idx'), 10);
        handleCellClick(cellIdx);
      });
    });
  }

  function handleCellClick(idx) {
    const item = gridState.currentGrid[idx];
    if (!item) return;

    if (gridState.isChecked) {
      speakWord(item.word);
    } else {
      const selectedPos = gridState.selectedIndices.indexOf(idx);
      if (selectedPos >= 0) {
        gridState.selectedIndices.splice(selectedPos, 1);
      } else {
        if (gridState.selectedIndices.length < 5) {
          gridState.selectedIndices.push(idx);
          speakWord(item.word);
        } else {
          speakWord("You have already selected 5 items!");
        }
      }
      renderGridGameUI();
    }
  }

  function playSingleTarget(chipBtn, targetIdx) {
    const item = gridState.currentGrid[targetIdx];
    if (!item) return;

    if (chipBtn) chipBtn.classList.add('playing');
    speakWord(item.word, () => {
      if (chipBtn) chipBtn.classList.remove('playing');
    });
  }

  function playAllTargets() {
    if (gridState.isPlayingAudioSequence) return;
    gridState.isPlayingAudioSequence = true;

    const playBtn = document.getElementById('btn-play-all-targets');
    if (playBtn) {
      playBtn.disabled = true;
      playBtn.innerHTML = `<span>🔊</span> Playing 5 Words...`;
    }

    let currentStep = 0;

    function playNext() {
      if (currentStep >= gridState.targetIndices.length) {
        gridState.isPlayingAudioSequence = false;
        if (playBtn) {
          playBtn.disabled = false;
          playBtn.innerHTML = `<span>▶️</span> Replay All 5 Words`;
        }
        return;
      }

      const targetIdx = gridState.targetIndices[currentStep];
      const item = gridState.currentGrid[targetIdx];
      
      const chips = document.querySelectorAll('.target-chip');
      if (chips[currentStep]) chips[currentStep].classList.add('playing');

      speakWord(`Number ${currentStep + 1}: ${item.word}`, () => {
        if (chips[currentStep]) chips[currentStep].classList.remove('playing');
        currentStep++;
        setTimeout(playNext, 600);
      });
    }

    playNext();
  }

  function checkGridAnswers() {
    if (gridState.selectedIndices.length !== 5 || gridState.isChecked) return;

    gridState.isChecked = true;
    let correctCount = 0;

    gridState.selectedIndices.forEach(idx => {
      if (gridState.targetIndices.includes(idx)) {
        correctCount++;
      }
    });

    gridState.stageScores[gridState.currentStage - 1] = correctCount;
    gridState.stageCompleted[gridState.currentStage - 1] = true;

    const earnedPoints = correctCount * 20;
    gridState.totalGridScore = (gridState.totalGridScore || 0) + earnedPoints;
    state.gridScore = gridState.totalGridScore;
    saveState();

    renderGridGameUI();

    const resultCard = document.getElementById('grid-result-card');
    if (resultCard) {
      resultCard.style.display = 'block';
      let title = '';
      let msg = '';

      if (correctCount === 5) {
        resultCard.className = 'grid-result-card result-success';
        title = `🎉 PERFECT Stage ${gridState.currentStage}! (5/5 Correct)`;
        msg = `Fantastic listening, Gabriela! You earned <strong>+100 points</strong>. Click <strong>"Next Stage"</strong> to continue!`;
        speakWord(`Stage ${gridState.currentStage} complete! Perfect five out of five!`);
      } else if (correctCount >= 3) {
        resultCard.className = 'grid-result-card result-partial';
        title = `👏 Stage ${gridState.currentStage} Complete! (${correctCount}/5 Correct)`;
        msg = `You earned <strong>+${earnedPoints} points</strong>! Look at the gold cards 💡 for missed targets. Click <strong>"Next Stage"</strong> when ready!`;
        speakWord(`Stage ${gridState.currentStage} complete! You got ${correctCount} out of 5!`);
      } else {
        resultCard.className = 'grid-result-card result-try';
        title = `💪 Stage ${gridState.currentStage} Complete (${correctCount}/5 Correct)`;
        msg = `You earned <strong>+${earnedPoints} points</strong>. Click on any card to practice its audio, then proceed to Next Stage!`;
        speakWord(`Stage ${gridState.currentStage} done! Keep going!`);
      }

      resultCard.innerHTML = `
        <h3 style="margin-bottom: 6px; font-size: 1.15rem;">${title}</h3>
        <p style="font-size: 0.95rem;">${msg}</p>
      `;
    }

    if (gridState.currentStage === 5) {
      showFinalResultsCard();
    }
  }

  function nextStage() {
    if (gridState.currentStage < 5) {
      startStage(gridState.currentStage + 1);
    } else {
      showFinalResultsCard();
    }
  }

  function showFinalResultsCard() {
    const finalCard = document.getElementById('grid-final-results-card');
    if (!finalCard) return;

    const totalCorrect = gridState.stageScores.reduce((a, b) => a + b, 0);
    const totalMax = 25;
    const sessionPoints = totalCorrect * 20;

    let stars = '⭐⭐⭐⭐⭐';
    if (totalCorrect < 15) stars = '⭐⭐⭐';
    else if (totalCorrect < 20) stars = '⭐⭐⭐⭐';

    finalCard.style.display = 'block';
    finalCard.innerHTML = `
      <div class="final-stars-row">${stars}</div>
      <h2 class="final-title">🏆 5-Stage Vocab Grid Challenge Completed!</h2>
      <p class="final-desc">Wonderful work, Gabriela! You completed all 5 stages of the London Vocab Grid Game.</p>
      
      <div class="final-score-pill">
        Overall Score: ${totalCorrect} / ${totalMax} Correct (${sessionPoints} pts)
      </div>

      <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">
        Stage Breakdown: ${gridState.stageScores.map((s, i) => `Stage ${i + 1}: ${s}/5`).join(' • ')}
      </div>

      <button class="btn-primary" id="btn-restart-game-final" style="padding: 12px 28px;">
        <span>🎮</span> Start New 5-Stage Challenge
      </button>
    `;

    speakWord(`Congratulations Gabriela! You completed all five stages of the Vocab Grid Challenge! Your total score is ${totalCorrect} out of 25!`);

    const restartFinalBtn = document.getElementById('btn-restart-game-final');
    if (restartFinalBtn) {
      restartFinalBtn.addEventListener('click', () => {
        initGridGame(true);
      });
    }
  }

  // Event Listeners for Grid Controls
  const btnPlayAll = document.getElementById('btn-play-all-targets');
  if (btnPlayAll) {
    btnPlayAll.addEventListener('click', playAllTargets);
  }

  const btnCheckGrid = document.getElementById('btn-check-grid');
  if (btnCheckGrid) {
    btnCheckGrid.addEventListener('click', checkGridAnswers);
  }

  const btnNextStage = document.getElementById('btn-next-stage');
  if (btnNextStage) {
    btnNextStage.addEventListener('click', nextStage);
  }

  const btnRestart5Stages = document.getElementById('btn-restart-5stages');
  if (btnRestart5Stages) {
    btnRestart5Stages.addEventListener('click', () => {
      initGridGame(true);
    });
  }


  /* --------------------------------------------------------------------------
     7. Progress UI & Teacher Report Exporter
     -------------------------------------------------------------------------- */
  function updateProgressUI() {
    let totalQuestions = 0;
    LONDON_VOCAB_DATA.categories.forEach(c => {
      totalQuestions += c.quizzes.length;
    });

    const completedKeys = Object.keys(state.completedQuizzes);
    const completedCount = completedKeys.length;
    
    let quizScore = 0;
    completedKeys.forEach(k => {
      quizScore += (state.completedQuizzes[k].score || 0);
    });

    const gridScore = state.gridScore || 0;
    const totalScore = quizScore + gridScore;

    const percent = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

    // Update Header
    document.getElementById('header-score-val').textContent = `${totalScore} pts`;
    document.getElementById('header-progress-val').textContent = `${percent}%`;

    // Update Progress Tab
    document.getElementById('progress-percent-label').textContent = `${percent}% (${completedCount}/${totalQuestions} completed)`;
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;

    // Summary Text
    const summaryTextEl = document.getElementById('summary-report-text');
    if (summaryTextEl) {
      summaryTextEl.textContent = generateReportText(completedCount, totalQuestions, quizScore, gridScore, totalScore, percent);
    }
  }

  function generateReportText(completedCount, totalQuestions, quizScore, gridScore, totalScore, percent) {
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return `========================================
🇬🇧 GABRIELA'S LONDON ESL HOMEWORK REPORT
Date: ${dateStr}
========================================
Student Name: Gabriela
Destination: London, UK (Jan/Feb Trip)

🏆 Total Score: ${totalScore} points
   • Quiz Score: ${quizScore} pts
   • 5x5 Vocab Grid Game Score: ${gridScore} pts
📊 Quiz Completion Progress: ${percent}% (${completedCount} of ${totalQuestions} Quizzes Completed)

Topic Breakdown:
${LONDON_VOCAB_DATA.categories.map(cat => {
  const catQuizzes = cat.quizzes;
  const doneInCat = catQuizzes.filter(q => state.completedQuizzes[q.id]);
  return ` • ${cat.title}: ${doneInCat.length}/${catQuizzes.length} finished`;
}).join('\n')}

Note: Completed via London Travel Homework Hub!
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
      }).catch(err => {
        alert('Could not copy report. Please select and copy manually.');
      });
    });
  }

  // Download file button (for Preply upload)
  const downloadBtn = document.getElementById('btn-download-report');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const summaryText = document.getElementById('summary-report-text').textContent;
      const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Gabriela_London_ESL_Homework.txt`;
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
      if (confirm('Are you sure you want to reset all homework progress for Gabriela?')) {
        state.completedQuizzes = {};
        state.roleplayProgress = {};
        state.gridScore = 0;
        gridState.totalGridScore = 0;
        saveState();
        renderQuizzes();
        renderRoleplayStep();
        initGridGame();
        alert('Progress reset successfully!');
      }
    });
  }

  /* --------------------------------------------------------------------------
     Initialize App Component Views
     -------------------------------------------------------------------------- */
  renderFlashcardFilters();
  renderFlashcards();
  renderQuizFilters();
  renderQuizzes();
  renderRoleplaySelectors();
  renderRoleplayStep();
  renderWinterTips();
  initGridGame();
  updateProgressUI();
});
