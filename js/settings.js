/* ========================================
   PROVAKAR - Settings Management
   ======================================== */

const Settings = {
    // Initialize settings
    init() {
        this.loadSettings();
        this.setupEventListeners();
    },

    // Load saved settings
    loadSettings() {
        // Quiz mode
        const quizMode = Storage.get(Storage.keys.QUIZ_MODE) || 'study';
        const quizModeSelect = document.getElementById('default-quiz-mode');
        if (quizModeSelect) {
            quizModeSelect.value = quizMode;
        }

        // Timer
        const timerEnabled = Storage.get(Storage.keys.TIMER_ENABLED);
        const timerToggle = document.getElementById('timer-toggle');
        if (timerToggle) {
            timerToggle.checked = timerEnabled !== false;
        }

        // Questions per quiz
        const questionsPerQuiz = Storage.get(Storage.keys.QUESTIONS_PER_QUIZ) || '10';
        const questionsSelect = document.getElementById('questions-per-quiz');
        if (questionsSelect) {
            questionsSelect.value = questionsPerQuiz;
        }
    },

    // Setup event listeners
    setupEventListeners() {
        // Quiz mode
        const quizModeSelect = document.getElementById('default-quiz-mode');
        if (quizModeSelect) {
            quizModeSelect.addEventListener('change', (e) => {
                Storage.set(Storage.keys.QUIZ_MODE, e.target.value);
                App.showNotification('কুইজ মোড আপডেট করা হয়েছে!', 'success');
            });
        }

        // Timer toggle
        const timerToggle = document.getElementById('timer-toggle');
        if (timerToggle) {
            timerToggle.addEventListener('change', (e) => {
                Storage.set(Storage.keys.TIMER_ENABLED, e.target.checked);
                App.showNotification('টাইমার সেটিং আপডেট করা হয়েছে!', 'success');
            });
        }

        // Questions per quiz
        const questionsSelect = document.getElementById('questions-per-quiz');
        if (questionsSelect) {
            questionsSelect.addEventListener('change', (e) => {
                Storage.set(Storage.keys.QUESTIONS_PER_QUIZ, e.target.value);
                App.showNotification('প্রশ্নের সংখ্যা আপডেট করা হয়েছে!', 'success');
            });
        }
    },

    // Get setting value
    get(settingName) {
        return Storage.get(Storage.keys[settingName]);
    },

    // Set setting value
    set(settingName, value) {
        return Storage.set(Storage.keys[settingName], value);
    }
};

// Initialize settings on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    Settings.init();
});
