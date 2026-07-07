/* ========================================
   PROVAKAR - Dashboard Logic
   Handles progress display and statistics
   ======================================== */

const Dashboard = {
    // Initialize dashboard
    init() {
        this.loadStats();
        this.loadChapterProgress();
        this.loadQuizHistory();
        this.setupEventListeners();
    },

    // Load statistics
    loadStats() {
        const progress = Storage.getAllProgress();
        const quizHistory = Storage.getQuizHistory();

        // Count started chapters
        const started = Object.keys(progress).length;
        const completed = Object.values(progress).filter(p => p.completed).length;

        // Update stats
        const chaptersStarted = document.getElementById('chapters-started');
        const chaptersCompleted = document.getElementById('chapters-completed');
        const quizzesTaken = document.getElementById('quizzes-taken');
        const avgScore = document.getElementById('avg-score');

        if (chaptersStarted) chaptersStarted.textContent = started;
        if (chaptersCompleted) chaptersCompleted.textContent = completed;
        if (quizzesTaken) quizzesTaken.textContent = quizHistory.length;

        // Calculate average score
        if (avgScore && quizHistory.length > 0) {
            const totalScore = quizHistory.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
            const average = Math.round(totalScore / quizHistory.length);
            avgScore.textContent = `${average}%`;
        }
    },

    // Load chapter progress bars
    loadChapterProgress() {
        const container = document.getElementById('chapter-progress-bars');
        if (!container) return;

        const progress = Storage.getAllProgress();
        let html = '';

        // Show all 17 chapters
        for (let i = 1; i <= 17; i++) {
            const chapterProgress = progress[i];
            const percent = chapterProgress ? (chapterProgress.percentage || 0) : 0;
            const chapterData = ChaptersData[i];

            if (chapterData) {
                html += `
                    <div class="chapter-progress-item">
                        <div class="chapter-progress-name">অধ্যায় ${i}</div>
                        <div class="chapter-progress-bar">
                            <div class="chapter-progress-fill" style="width: ${percent}%;"></div>
                        </div>
                        <div class="chapter-progress-percent">${percent}%</div>
                    </div>
                `;
            }
        }

        if (html === '') {
            html = `
                <div class="empty-state">
                    <i class="fas fa-chart-line"></i>
                    <p>আপনি এখনো কোনো অধ্যায় শুরু করেননি।</p>
                </div>
            `;
        }

        container.innerHTML = html;
    },

    // Load quiz history
    loadQuizHistory() {
        const container = document.getElementById('quiz-history');
        if (!container) return;

        const history = Storage.getQuizHistory();

        if (history.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-history"></i>
                    <p>আপনি এখনো কোনো কুইজ দেননি।</p>
                </div>
            `;
            return;
        }

        // Show last 10 quizzes
        const recentHistory = history.slice(-10).reverse();
        let html = '';

        recentHistory.forEach(quiz => {
            const isSuccess = quiz.score >= 50;
            html += `
                <div class="quiz-history-item">
                    <div class="quiz-history-icon ${isSuccess ? 'success' : 'fail'}">
                        <i class="fas fa-${isSuccess ? 'check' : 'times'}"></i>
                    </div>
                    <div class="quiz-history-info">
                        <div class="quiz-history-title">${quiz.chapterName || 'কুইজ'}</div>
                        <div class="quiz-history-meta">
                            সঠিক: ${quiz.correct}/${quiz.total} | 
                            ${this.formatDate(quiz.timestamp)}
                        </div>
                    </div>
                    <div class="quiz-history-score">${quiz.score}%</div>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    // Format date
    formatDate(isoString) {
        if (!isoString) return '';
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) {
            return `${diffMins} মিনিট আগে`;
        } else if (diffHours < 24) {
            return `${diffHours} ঘন্টা আগে`;
        } else if (diffDays < 7) {
            return `${diffDays} দিন আগে`;
        } else {
            return date.toLocaleDateString('bn-BD');
        }
    },

    // Setup event listeners
    setupEventListeners() {
        const resetBtn = document.getElementById('reset-all-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত প্রগতি মুছে দিতে চান?')) {
                    Storage.clearAll();
                    Storage.init();
                    App.showNotification('সমস্ত প্রগতি রিসেট করা হয়েছে!', 'success');
                    setTimeout(() => location.reload(), 1000);
                }
            });
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('chapters-started')) {
        Dashboard.init();
    }
});
