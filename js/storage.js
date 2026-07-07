/* ========================================
   PROVAKAR - Storage Management
   localStorage handling for all data
   ======================================== */

const Storage = {
    // Keys for localStorage
    keys: {
        THEME: 'provakar_theme',
        FONT_SIZE: 'provakar_font_size',
        COLOR_THEME: 'provakar_color_theme',
        QUIZ_MODE: 'provakar_quiz_mode',
        TIMER_ENABLED: 'provakar_timer_enabled',
        QUESTIONS_PER_QUIZ: 'provakar_questions_per_quiz',
        PROGRESS: 'provakar_progress',
        QUIZ_HISTORY: 'provakar_quiz_history',
        BOOKMARKS: 'provakar_bookmarks',
        NOTES: 'provakar_notes',
        SETTINGS: 'provakar_settings',
        CHAPTER_DATA: 'provakar_chapter_data'
    },

    // Initialize storage with defaults
    init() {
        // Theme
        if (!this.get(this.keys.THEME)) {
            this.set(this.keys.THEME, 'light');
        }

        // Font size
        if (!this.get(this.keys.FONT_SIZE)) {
            this.set(this.keys.FONT_SIZE, 'medium');
        }

        // Color theme
        if (!this.get(this.keys.COLOR_THEME)) {
            this.set(this.keys.COLOR_THEME, 'blue');
        }

        // Quiz mode
        if (!this.get(this.keys.QUIZ_MODE)) {
            this.set(this.keys.QUIZ_MODE, 'study');
        }

        // Timer
        if (this.get(this.keys.TIMER_ENABLED) === null) {
            this.set(this.keys.TIMER_ENABLED, true);
        }

        // Questions per quiz
        if (!this.get(this.keys.QUESTIONS_PER_QUIZ)) {
            this.set(this.keys.QUESTIONS_PER_QUIZ, '10');
        }

        // Progress
        if (!this.get(this.keys.PROGRESS)) {
            this.set(this.keys.PROGRESS, {});
        }

        // Quiz history
        if (!this.get(this.keys.QUIZ_HISTORY)) {
            this.set(this.keys.QUIZ_HISTORY, []);
        }

        // Bookmarks
        if (!this.get(this.keys.BOOKMARKS)) {
            this.set(this.keys.BOOKMARKS, []);
        }

        // Notes
        if (!this.get(this.keys.NOTES)) {
            this.set(this.keys.NOTES, {});
        }

        // Chapter data (questions, content)
        if (!this.get(this.keys.CHAPTER_DATA)) {
            this.set(this.keys.CHAPTER_DATA, {});
        }
    },

    // Get item from localStorage
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },

    // Set item in localStorage
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error writing to localStorage:', e);
            return false;
        }
    },

    // Remove item from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    },

    // Clear all PROVAKAR data
    clearAll() {
        Object.values(this.keys).forEach(key => {
            this.remove(key);
        });
    },

    // Export all data
    exportData() {
        const data = {};
        Object.entries(this.keys).forEach(([name, key]) => {
            data[name] = this.get(key);
        });
        return JSON.stringify(data, null, 2);
    },

    // Import data
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            Object.entries(data).forEach(([name, value]) => {
                if (this.keys[name]) {
                    this.set(this.keys[name], value);
                }
            });
            return true;
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    },

    // Progress tracking
    updateProgress(chapterNum, data) {
        const progress = this.get(this.keys.PROGRESS) || {};
        if (!progress[chapterNum]) {
            progress[chapterNum] = {};
        }
        progress[chapterNum] = { ...progress[chapterNum], ...data };
        progress[chapterNum].lastAccessed = new Date().toISOString();
        this.set(this.keys.PROGRESS, progress);
    },

    getProgress(chapterNum) {
        const progress = this.get(this.keys.PROGRESS) || {};
        return progress[chapterNum] || null;
    },

    getAllProgress() {
        return this.get(this.keys.PROGRESS) || {};
    },

    // Quiz history
    addQuizResult(result) {
        const history = this.get(this.keys.QUIZ_HISTORY) || [];
        result.timestamp = new Date().toISOString();
        history.push(result);
        // Keep only last 50 results
        if (history.length > 50) {
            history.splice(0, history.length - 50);
        }
        this.set(this.keys.QUIZ_HISTORY, history);
    },

    getQuizHistory() {
        return this.get(this.keys.QUIZ_HISTORY) || [];
    },

    // Bookmarks
    addBookmark(type, id, title) {
        const bookmarks = this.get(this.keys.BOOKMARKS) || [];
        bookmarks.push({ type, id, title, timestamp: new Date().toISOString() });
        this.set(this.keys.BOOKMARKS, bookmarks);
    },

    removeBookmark(type, id) {
        const bookmarks = this.get(this.keys.BOOKMARKS) || [];
        const filtered = bookmarks.filter(b => !(b.type === type && b.id === id));
        this.set(this.keys.BOOKMARKS, filtered);
    },

    getBookmarks() {
        return this.get(this.keys.BOOKMARKS) || [];
    },

    isBookmarked(type, id) {
        const bookmarks = this.getBookmarks();
        return bookmarks.some(b => b.type === type && b.id === id);
    },

    // Notes
    saveNote(chapterNum, note) {
        const notes = this.get(this.keys.NOTES) || {};
        if (!notes[chapterNum]) {
            notes[chapterNum] = [];
        }
        notes[chapterNum].push({ content: note, timestamp: new Date().toISOString() });
        this.set(this.keys.NOTES, notes);
    },

    getNotes(chapterNum) {
        const notes = this.get(this.keys.NOTES) || {};
        return notes[chapterNum] || [];
    },

    // Chapter data (for adding custom questions)
    addChapterQuestions(chapterNum, questions) {
        const data = this.get(this.keys.CHAPTER_DATA) || {};
        if (!data[chapterNum]) {
            data[chapterNum] = { questions: [] };
        }
        data[chapterNum].questions.push(...questions);
        this.set(this.keys.CHAPTER_DATA, data);
    },

    getChapterQuestions(chapterNum) {
        const data = this.get(this.keys.CHAPTER_DATA) || {};
        if (data[chapterNum] && data[chapterNum].questions) {
            return data[chapterNum].questions;
        }
        return [];
    }
};

// Initialize storage on load
document.addEventListener('DOMContentLoaded', () => {
    Storage.init();
});
