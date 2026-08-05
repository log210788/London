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
    roleplayProgress: {} // { roleplayId: currentStepIndex }
  };

  // Load saved state
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.completedQuizzes = parsed.completedQuizzes || {};
      state.roleplayProgress = parsed.roleplayProgress || {};
    }
  } catch (e) {
    console.error('Could not load local progress', e);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedQuizzes: state.completedQuizzes,
        roleplayProgress: state.roleplayProgress
      }));
    } catch (e) {
      console.error('Could not save progress', e);
    }
    updateProgressUI();
  }

  /* --------------------------------------------------------------------------
     1. British Audio Pronunciation (Web Speech API)
     -------------------------------------------------------------------------- */
  function speakWord(text) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel(); // Stop ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // Slightly relaxed pace for ESL learners
    utterance.pitch = 1.0;

    // Search for British English voice
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British'));
    if (ukVoice) {
      utterance.voice = ukVoice;
    } else {
      utterance.lang = 'en-GB';
    }

    window.speechSynthesis.speak(utterance);
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
            <div>
              <div class="card-word">${w.word}</div>
              <div class="card-phonetic">${w.phonetic}</div>
              ${w.ptTranslation ? `<div class="card-pt-translation">🇵🇹 ${w.ptTranslation}</div>` : ''}
            </div>
            <div class="card-hint-text">
              <span>💡 Tap card to view definition</span>
            </div>
          </div>
          
          <div class="flashcard-back">
            <div class="card-top">
              <span class="pos-tag">${w.categoryIcon} ${w.categoryTitle}</span>
              <button class="audio-btn" title="Listen to example" onclick="event.stopPropagation(); window.playAudio('${w.example.replace(/'/g, "\\'")}')">
                🔊
              </button>
            </div>
            <div>
              <p class="card-definition">${w.definition}</p>
              <p class="card-example">"${w.example}"</p>
            </div>
            <div class="card-tip">
              🇵🇹 <strong>Tradutção:</strong> ${w.ptTranslation}<br>
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
      speakWord(choice.text);

      setTimeout(() => {
        state.roleplayProgress[rpId] = currentStepIdx + 1;
        saveState();
        renderRoleplayStep();
      }, 1800);
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
     7. Progress UI & Teacher Report Exporter
     -------------------------------------------------------------------------- */
  function updateProgressUI() {
    let totalQuestions = 0;
    LONDON_VOCAB_DATA.categories.forEach(c => {
      totalQuestions += c.quizzes.length;
    });

    const completedKeys = Object.keys(state.completedQuizzes);
    const completedCount = completedKeys.length;
    
    let totalScore = 0;
    completedKeys.forEach(k => {
      totalScore += (state.completedQuizzes[k].score || 0);
    });

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
      summaryTextEl.textContent = generateReportText(completedCount, totalQuestions, totalScore, percent);
    }
  }

  function generateReportText(completedCount, totalQuestions, score, percent) {
    const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    return `========================================
🇬🇧 GABRIELA'S LONDON ESL HOMEWORK REPORT
Date: ${dateStr}
========================================
Student Name: Gabriela
Destination: London, UK (Jan/Feb Trip)

🏆 Total Score: ${score} points
📊 Completion Progress: ${percent}% (${completedCount} of ${totalQuestions} Quizzes Completed)

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
        saveState();
        renderQuizzes();
        renderRoleplayStep();
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
  updateProgressUI();
});
