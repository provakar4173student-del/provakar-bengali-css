/* ========================================
   PROVAKAR - Quiz Logic
   Handles all quiz modes and functionality
   ======================================== */

const Quiz = {
    currentChapter: null,
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    correctCount: 0,
    wrongCount: 0,
    skippedCount: 0,
    startTime: null,
    timerInterval: null,
    currentMode: 'study',

    // Initialize quiz
    init() {
        // Get chapter ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const chapterId = parseInt(urlParams.get('chapter'));

        if (!chapterId || !ChaptersData[chapterId]) {
            this.showError('অধ্যায়টি পাওয়া যায়নি।');
            return;
        }

        this.currentChapter = chapterId;
        this.questions = ChaptersData[chapterId].questions || [];
        
        if (this.questions.length === 0) {
            this.showNoQuestions();
            return;
        }

        this.setupQuiz();
        this.setupEventListeners();
        this.loadSettings();
    },

    // Setup quiz based on mode
    setupQuiz() {
        const chapter = ChaptersData[this.currentChapter];
        
        // Update title
        const quizTitle = document.getElementById('quiz-title');
        const quizSubtitle = document.getElementById('quiz-subtitle');
        if (quizTitle) {
            quizTitle.textContent = `অধ্যায় ${this.currentChapter}: ${chapter.title} - MCQ কুইজ`;
        }
        if (quizSubtitle) {
            quizSubtitle.textContent = `${this.questions.length}টি প্রশ্ন`;
        }

        // Update total questions
        const totalQuestions = document.getElementById('total-questions');
        const totalQNum = document.getElementById('total-q-num');
        if (totalQuestions) totalQuestions.textContent = this.questions.length;
        if (totalQNum) totalQNum.textContent = this.questions.length;

        // Initialize user answers
        this.userAnswers = new Array(this.questions.length).fill(null);
    },

    // Setup event listeners
    setupEventListeners() {
        // Mode buttons
        const modeBtns = document.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                this.switchMode(mode);
            });
        });

        // Navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevQuestion());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitQuiz());
        }

        // Result modal buttons
        const reviewBtn = document.getElementById('review-btn');
        const retryBtn = document.getElementById('retry-btn');
        const nextChapterBtn = document.getElementById('next-chapter-btn');
        
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => this.reviewAnswers());
        }
        if (retryBtn) {
            retryBtn.addEventListener('click', () => this.retryQuiz());
        }
        if (nextChapterBtn) {
            nextChapterBtn.addEventListener('click', () => this.goToNextChapter());
        }
    },

    // Load settings
    loadSettings() {
        const mode = Storage.get(Storage.keys.QUIZ_MODE) || 'study';
        this.switchMode(mode);
    },

    // Switch quiz mode
    switchMode(mode) {
        this.currentMode = mode;
        
        // Update active button
        const modeBtns = document.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Show/hide appropriate content
        const studyMode = document.getElementById('study-mode');
        const activeMode = document.getElementById('active-mode');
        const timerItem = document.getElementById('timer-item');

        if (mode === 'study') {
            studyMode.style.display = 'block';
            activeMode.style.display = 'none';
            timerItem.style.display = 'none';
            this.renderStudyMode();
        } else {
            studyMode.style.display = 'none';
            activeMode.style.display = 'block';
            if (mode === 'exam') {
                timerItem.style.display = 'flex';
                this.startTimer();
            } else {
                timerItem.style.display = 'none';
            }
            this.renderQuestion(0);
        }

        Storage.set(Storage.keys.QUIZ_MODE, mode);
    },

    // Render study mode (all questions visible)
    renderStudyMode() {
        const container = document.getElementById('study-questions');
        if (!container) return;

        let html = '';
        this.questions.forEach((q, index) => {
            const options = q.options.map((opt, optIndex) => {
                const isCorrect = optIndex === q.correct;
                return `
                    <li class="study-option ${isCorrect ? 'correct' : ''}">
                        <div class="option-label">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${opt}</div>
                        ${isCorrect ? '<i class="fas fa-check" style="color: var(--success-color);"></i>' : ''}
                    </li>
                `;
            }).join('');

            html += `
                <div class="study-question-card">
                    <div class="study-question-number">প্রশ্ন ${index + 1}</div>
                    <div class="study-question-text">${q.question}</div>
                    <ul class="study-options">${options}</ul>
                    <div class="study-explanation">
                        <h4><i class="fas fa-info-circle"></i> ব্যাখ্যা</h4>
                        <p>${q.explanation || 'ব্যাখ্যা পাওয়া যায়নি।'}</p>
                        ${q.formula ? `<p><strong>সূত্র:</strong> ${q.formula}</p>` : ''}
                    </div>
                    ${q.trick ? `
                        <div class="study-trick">
                            <strong><i class="fas fa-lightbulb"></i> ট্রিক:</strong>
                            <p>${q.trick}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        container.innerHTML = html;
    },

    // Render single question (practice/exam mode)
    renderQuestion(index) {
        if (index < 0 || index >= this.questions.length) return;
        
        this.currentIndex = index;
        const question = this.questions[index];
        
        // Update question number
        const currentQNum = document.getElementById('current-q-num');
        if (currentQNum) currentQNum.textContent = index + 1;

        // Update question text
        const questionText = document.getElementById('question-text');
        if (questionText) questionText.textContent = question.question;

        // Update options
        const optionsContainer = document.getElementById('question-options');
        if (optionsContainer) {
            const optionsHtml = question.options.map((opt, optIndex) => {
                const isSelected = this.userAnswers[index] === optIndex;
                return `
                    <div class="quiz-option ${isSelected ? 'selected' : ''}" data-index="${optIndex}">
                        <div class="option-label">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                `;
            }).join('');
            optionsContainer.innerHTML = optionsHtml;

            // Add click handlers to options
            optionsContainer.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', () => {
                    this.selectOption(parseInt(option.dataset.index));
                });
            });
        }

        // Hide feedback (will show in practice mode after selection)
        const feedback = document.getElementById('question-feedback');
        if (feedback) feedback.style.display = 'none';

        // Update navigation buttons
        this.updateNavigation();
    },

    // Select option
    selectOption(optionIndex) {
        if (this.currentMode === 'study') return;

        const question = this.questions[this.currentIndex];
        this.userAnswers[this.currentIndex] = optionIndex;

        // Update UI
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            opt.classList.remove('selected');
            if (idx === optionIndex) {
                opt.classList.add('selected');
            }
        });

        // In practice mode, show feedback immediately
        if (this.currentMode === 'practice') {
            this.showFeedback(optionIndex);
        }

        // Update counts
        this.updateCounts();
    },

    // Show feedback (practice mode)
    showFeedback(selectedIndex) {
        const question = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === question.correct;
        
        const feedback = document.getElementById('question-feedback');
        if (!feedback) return;

        feedback.style.display = 'block';
        feedback.innerHTML = `
            <div class="feedback-header ${isCorrect ? 'correct' : 'wrong'}">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                ${isCorrect ? 'সঠিক উত্তর!' : 'ভুল উত্তর!'}
            </div>
            <div class="feedback-explanation">
                <strong>সঠিক উত্তর:</strong> ${question.options[question.correct]}
                <p>${question.explanation || ''}</p>
            </div>
            ${question.trick ? `
                <div class="feedback-trick">
                    <strong><i class="fas fa-lightbulb"></i> ট্রিক:</strong>
                    <p>${question.trick}</p>
                </div>
            ` : ''}
        `;

        // Show correct/wrong in options
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                opt.classList.add('wrong');
            }
        });
    },

    // Update navigation buttons
    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        if (prevBtn) prevBtn.disabled = this.currentIndex === 0;

        if (this.currentIndex === this.questions.length - 1) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'inline-flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'inline-flex';
            if (submitBtn) submitBtn.style.display = 'none';
        }
    },

    // Previous question
    prevQuestion() {
        if (this.currentIndex > 0) {
            this.renderQuestion(this.currentIndex - 1);
        }
    },

    // Next question
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.renderQuestion(this.currentIndex + 1);
        }
    },

    // Start timer
    startTimer() {
        this.startTime = Date.now();
        
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            
            const timer = document.getElementById('timer');
            if (timer) {
                timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }, 1000);
    },

    // Stop timer
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    // Update counts
    updateCounts() {
        let correct = 0, wrong = 0, skipped = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer === null) {
                skipped++;
            } else if (answer === this.questions[index].correct) {
                correct++;
            } else {
                wrong++;
            }
        });

        const correctCount = document.getElementById('correct-count');
        const wrongCount = document.getElementById('wrong-count');
        
        if (correctCount) correctCount.textContent = correct;
        if (wrongCount) wrongCount.textContent = wrong;

        this.correctCount = correct;
        this.wrongCount = wrong;
        this.skippedCount = skipped;
    },

    // Submit quiz
    submitQuiz() {
        // Stop timer
        this.stopTimer();

        // Calculate results
        this.updateCounts();
        const total = this.questions.length;
        const percentage = Math.round((this.correctCount / total) * 100);
        
        // Show result modal
        this.showResult(percentage);
    },

    // Show result
    showResult(percentage) {
        const modal = document.getElementById('result-modal');
        if (!modal) return;

        // Update result UI
        const resultPercentage = document.getElementById('result-percentage');
        const resultFill = document.getElementById('result-fill');
        const resultCorrect = document.getElementById('result-correct');
        const resultWrong = document.getElementById('result-wrong');
        const resultTime = document.getElementById('result-time');

        if (resultPercentage) resultPercentage.textContent = `${percentage}%`;
        
        if (resultFill) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (percentage / 100) * circumference;
            resultFill.style.strokeDashoffset = offset;
        }

        if (resultCorrect) resultCorrect.textContent = this.correctCount;
        if (resultWrong) resultWrong.textContent = this.wrongCount;

        // Calculate time
        if (this.startTime) {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            if (resultTime) {
                resultTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }

        // Save result
        Storage.addQuizResult({
            chapterId: this.currentChapter,
            chapterName: `অধ্যায় ${this.currentChapter}`,
            score: percentage,
            correct: this.correctCount,
            wrong: this.wrongCount,
            skipped: this.skippedCount,
            total: this.questions.length
        });

        // Update progress
        Storage.updateProgress(this.currentChapter, {
            completed: true,
            percentage: percentage,
            lastScore: percentage
        });

        // Show modal
        modal.classList.add('active');
    },

    // Review answers
    reviewAnswers() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        // Switch to study mode to review
        this.switchMode('study');
    },

    // Retry quiz
    retryQuiz() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        // Reset answers
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.correctCount = 0;
        this.wrongCount = 0;
        this.skippedCount = 0;

        // Reset UI
        const correctCount = document.getElementById('correct-count');
        const wrongCount = document.getElementById('wrong-count');
        if (correctCount) correctCount.textContent = '0';
        if (wrongCount) wrongCount.textContent = '0';

        // Restart based on current mode
        if (this.currentMode === 'exam') {
            this.startTimer();
        }
        this.renderQuestion(0);
    },

    // Go to next chapter
    goToNextChapter() {
        const modal = document.getElementById('result-modal');
        if (modal) modal.classList.remove('active');

        const nextChapter = this.currentChapter + 1;
        if (ChaptersData[nextChapter]) {
            window.location.href = `quiz.html?chapter=${nextChapter}`;
        } else {
            window.location.href = 'chapters.html';
        }
    },

    // Show error
    showError(message) {
        const container = document.querySelector('.quiz-content-section .container');
        if (container) {
            container.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
                    <h2>${message}</h2>
                    <a href="chapters.html" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="fas fa-arrow-left"></i> অধ্যায়সমূহে ফিরে যান
                    </a>
                </div>
            `;
        }
    },

    // Show no questions message
    showNoQuestions() {
        const container = document.querySelector('.quiz-content-section .container');
        if (container) {
            container.innerHTML = `
                <div class="no-questions-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-question-circle" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h2>এই অধ্যায়ের জন্য এখনো কোনো MCQ যোগ করা হয়নি।</h2>
                    <p style="margin-top: 1rem; color: var(--text-muted);">শীঘ্রই প্রশ্ন যোগ করা হবে।</p>
                    <a href="chapters.html" class="btn btn-primary" style="margin-top: 2rem;">
                        <i class="fas fa-arrow-left"></i> অধ্যায়সমূহে ফিরে যান
                    </a>
                </div>
            `;
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-title')) {
        Quiz.init();
    }
});
