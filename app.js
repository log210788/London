/* ==========================================================================
   Gabriela's "Would You Rather...?" Preply Hub - Interactive App Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'gabriela_would_you_rather_progress';
  
  let state = {
    completedQuizzes: {}, // { quizId: { correct: boolean, answer: string, score: number } }
    selectedCardOptions: {}, // { cardId: optionIndex }
    activeCardCat: 'all'
  };

  // Load saved state
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.completedQuizzes = parsed.completedQuizzes || {};
      state.selectedCardOptions = parsed.selectedCardOptions || {};
    }
  } catch (e) {
    console.error('Could not load local progress', e);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedQuizzes: state.completedQuizzes,
        selectedCardOptions: state.selectedCardOptions
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
     3. Visual Dilemma Cards Renderer
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
              <li><strong>1. The Choice:</strong> ${card.discussionFlow.step1}</li>
              <li><strong>2. The Justification:</strong> ${card.discussionFlow.step2}</li>
              <li><strong>3. Counter-Argument:</strong> ${card.discussionFlow.step3}</li>
            </ol>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     4. Teacher Lesson Plan Renderer
     -------------------------------------------------------------------------- */
  function renderTeacherLessonPlan() {
    const container = document.getElementById('teacher-plan-container');
    if (!container || !LONDON_VOCAB_DATA.teacherLessonPlan) return;

    const plan = LONDON_VOCAB_DATA.teacherLessonPlan;

    container.innerHTML = `
      <div class="teacher-plan-header">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <span style="background: var(--primary-light); color: var(--primary); padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 0.85rem;">
            🎓 Tutor Teaching Guide
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
        ${plan.timeline.map((step, idx) => `
          <div class="timeline-step-card">
            <div class="step-time-badge">${step.time}</div>
            <div class="step-card-content">
              <h4 class="step-stage-title">${step.stage}</h4>
              <p style="margin-bottom: 6px; font-size: 0.92rem; color: var(--primary); font-weight: 600;">Goal: ${step.goal}</p>
              <p style="margin-bottom: 10px; font-size: 0.95rem; color: var(--text-dark); whitespace: pre-line;">${step.activity}</p>
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
     5. Functional Language Renderer
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
     6. Conversation Cards Renderer
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
            💡 <strong>Justification Tip:</strong> ${card.prompt}
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
     7. Homework Quizzes Engine
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
     8. Progress UI & Report Generator
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

    const percent = totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;

    // Header
    const scoreValEl = document.getElementById('header-score-val');
    const progValEl = document.getElementById('header-progress-val');
    if (scoreValEl) scoreValEl.textContent = `${quizScore} pts`;
    if (progValEl) progValEl.textContent = `${percent}%`;

    // Progress Tab
    const labelEl = document.getElementById('progress-percent-label');
    const fillEl = document.getElementById('progress-bar-fill');
    if (labelEl) labelEl.textContent = `${percent}% (${completedCount}/${totalQuizzes} completed)`;
    if (fillEl) fillEl.style.width = `${percent}%`;

    // Summary Text
    const summaryTextEl = document.getElementById('summary-report-text');
    if (summaryTextEl) {
      summaryTextEl.textContent = generateReportText(completedCount, totalQuizzes, quizScore, percent);
    }
  }

  function generateReportText(completedCount, totalQuizzes, quizScore, percent) {
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const selectedCardsCount = Object.keys(state.selectedCardOptions).length;

    return `========================================
🌸 GABRIELA'S "WOULD YOU RATHER...?" HOMEWORK REPORT
Date: ${dateStr}
========================================
Student Name: Gabriela
Target Level: Intermediate (B1/B2)
Course: Preply ESL Conversational Speaking

🏆 Total Quiz Score: ${quizScore} points
📊 Homework Completion: ${percent}% (${completedCount} of ${totalQuizzes} Quizzes Passed)
🎴 Conversation Cards Prepared: ${selectedCardsCount} of 10 Cards Selected

Second Conditional & Functional Language Mastery:
 • Second Conditional Practice: ${state.completedQuizzes['q_cond1']?.correct ? 'PASSED ✓' : 'Pending'}
 • Functional Hesitation Phrases: ${state.completedQuizzes['q_phrase1']?.correct ? 'PASSED ✓' : 'Pending'}
 • Weighing Options & Drawbacks: ${state.completedQuizzes['q_phrase2']?.correct ? 'PASSED ✓' : 'Pending'}

Note: Completed via Gabriela's Preply Speaking Hub!
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

  // Download file button
  const downloadBtn = document.getElementById('btn-download-report');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const summaryText = document.getElementById('summary-report-text').textContent;
      const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Gabriela_WouldYouRather_Homework.txt`;
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
        state.selectedCardOptions = {};
        saveState();
        renderQuizzes();
        renderConversationCards();
        alert('Progress reset successfully!');
      }
    });
  }

  /* --------------------------------------------------------------------------
     Initialize App Component Views
     -------------------------------------------------------------------------- */
  renderVisualCards();
  renderTeacherLessonPlan();
  renderFunctionalPhrases();
  renderCardFilters();
  renderConversationCards();
  renderQuizzes();
  updateProgressUI();
});
