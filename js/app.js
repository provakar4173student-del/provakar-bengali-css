/* ========================================
   PROVAKAR - Main Application Logic
   ======================================== */

const App = {
    // Initialize the application
    init() {
        this.applyTheme();
        this.applyFontSize();
        this.applyColorTheme();
        this.setupEventListeners();
        this.updateProgressBars();
        this.updateRecentActivity();
        this.hideLoadingScreen();
    },

    // Apply saved theme
    applyTheme() {
        const theme = Storage.get(Storage.keys.THEME) || 'light';
        document.body.setAttribute('data-theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        // Update settings modal if open
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.theme === theme);
        });
    },

    // Apply saved font size
    applyFontSize() {
        const fontSize = Storage.get(Storage.keys.FONT_SIZE) || 'medium';
        document.body.setAttribute('data-font-size', fontSize);

        const fontOptions = document.querySelectorAll('.font-size-option');
        fontOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.size === fontSize);
        });
    },

    // Apply saved color theme
    applyColorTheme() {
        const colorTheme = Storage.get(Storage.keys.COLOR_THEME) || 'blue';
        document.body.setAttribute('data-color-theme', colorTheme);

        const colorOptions = document.querySelectorAll('.color-theme-option');
        colorOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.color === colorTheme);
        });
    },

    // Setup event listeners
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Settings button
        const settingsBtn = document.getElementById('settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const settingsClose = document.getElementById('settings-close');
        
        if (settingsBtn && settingsModal) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.classList.add('active');
            });
        }

        if (settingsClose && settingsModal) {
            settingsClose.addEventListener('click', () => {
                settingsModal.classList.remove('active');
            });
        }

        // Close modal on overlay click
        if (settingsModal) {
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) {
                    settingsModal.classList.remove('active');
                }
            });
        }

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });
        }

        // FAB (Floating Action Button)
        const fabBtn = document.getElementById('fab-btn');
        const fabPanel = document.getElementById('fab-panel');
        const fabPanelClose = document.getElementById('fab-panel-close');
        
        if (fabBtn && fabPanel) {
            fabBtn.addEventListener('click', () => {
                fabPanel.classList.toggle('active');
            });
        }

        if (fabPanelClose && fabPanel) {
            fabPanelClose.addEventListener('click', () => {
                fabPanel.classList.remove('active');
            });
        }

        // Close FAB panel on outside click
        document.addEventListener('click', (e) => {
            if (fabBtn && fabPanel && !fabBtn.contains(e.target) && !fabPanel.contains(e.target)) {
                fabPanel.classList.remove('active');
            }
        });

        // Settings tabs
        const settingsTabs = document.querySelectorAll('.settings-tab');
        settingsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                
                // Update active tab
                settingsTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show target panel
                const panels = document.querySelectorAll('.settings-panel');
                panels.forEach(p => p.classList.remove('active'));
                const targetPanel = document.getElementById(`${targetTab}-settings`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });

        // Theme options in settings
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                Storage.set(Storage.keys.THEME, theme);
                this.applyTheme();
            });
        });

        // Font size options
        const fontSizeOptions = document.querySelectorAll('.font-size-option');
        fontSizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const size = option.dataset.size;
                Storage.set(Storage.keys.FONT_SIZE, size);
                this.applyFontSize();
            });
        });

        // Color theme options
        const colorThemeOptions = document.querySelectorAll('.color-theme-option');
        colorThemeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const color = option.dataset.color;
                Storage.set(Storage.keys.COLOR_THEME, color);
                this.applyColorTheme();
            });
        });

        // Data management buttons
        const exportBtn = document.getElementById('export-data');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportData());
        }

        const importBtn = document.getElementById('import-data');
        const importFile = document.getElementById('import-file');
        if (importBtn && importFile) {
            importBtn.addEventListener('click', () => importFile.click());
            importFile.addEventListener('change', (e) => this.importData(e));
        }

        const resetBtn = document.getElementById('reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Page transition
        this.setupPageTransitions();
    },

    // Toggle theme
    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        Storage.set(Storage.keys.THEME, newTheme);
        this.applyTheme();
    },

    // Update progress bars on home page
    updateProgressBars() {
        const progress = Storage.getAllProgress();
        const grammarProgress = this.calculateCategoryProgress(progress, 1, 10);
        const vocabularyProgress = this.calculateCategoryProgress(progress, 11, 16);
        const literatureProgress = this.calculateCategoryProgress(progress, 17, 17);

        const grammarFill = document.getElementById('grammar-progress');
        const vocabularyFill = document.getElementById('vocabulary-progress');
        const literatureFill = document.getElementById('literature-progress');

        if (grammarFill) {
            grammarFill.style.width = `${grammarProgress}%`;
            grammarFill.parentElement.nextElementSibling.textContent = `${grammarProgress}% সম্পন্ন`;
        }

        if (vocabularyFill) {
            vocabularyFill.style.width = `${vocabularyProgress}%`;
            vocabularyFill.parentElement.nextElementSibling.textContent = `${vocabularyProgress}% সম্পন্ন`;
        }

        if (literatureFill) {
            literatureFill.style.width = `${literatureProgress}%`;
            literatureFill.parentElement.nextElementSibling.textContent = `${literatureProgress}% সম্পন্ন`;
        }
    },

    // Calculate category progress
    calculateCategoryProgress(progress, start, end) {
        let totalItems = 0;
        let completedItems = 0;

        for (let i = start; i <= end; i++) {
            totalItems++;
            if (progress[i] && progress[i].completed) {
                completedItems++;
            }
        }

        return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    },

    // Update recent activity
    updateRecentActivity() {
        const activityList = document.getElementById('recent-activity');
        if (!activityList) return;

        const history = Storage.getQuizHistory();
        
        if (history.length === 0) {
            activityList.innerHTML = `
                <div class="activity-empty">
                    <i class="fas fa-history"></i>
                    <p>আপনি এখনো কোনো কুইজ দেননি। শুরু করতে একটি অধ্যায় নির্বাচন করুন।</p>
                </div>
            `;
            return;
        }

        // Show last 5 activities
        const recentHistory = history.slice(-5).reverse();
        activityList.innerHTML = recentHistory.map(item => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas fa-${item.score >= 50 ? 'check-circle' : 'times-circle'}"></i>
                </div>
                <div class="activity-details">
                    <div class="activity-title">${item.chapterName || 'কুইজ'}</div>
                    <div class="activity-meta">
                        স্কোর: ${item.score}% | 
                        সঠিক: ${item.correct} | 
                        ভুল: ${item.wrong} |
                        ${this.formatDate(item.timestamp)}
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Format date
    formatDate(isoString) {
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

    // Export data
    exportData() {
        const data = Storage.exportData();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `provakar-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showNotification('ডেটা সফলভাবে এক্সপোর্ট করা হয়েছে!', 'success');
    },

    // Import data
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const success = Storage.importData(e.target.result);
            if (success) {
                this.showNotification('ডেটা সফলভাবে ইমপোর্ট করা হয়েছে!', 'success');
                setTimeout(() => location.reload(), 1000);
            } else {
                this.showNotification('ডেটা ইমপোর্ট করতে সমস্যা হয়েছে!', 'error');
            }
        };
        reader.readAsText(file);
        
        // Reset file input
        event.target.value = '';
    },

    // Reset progress
    resetProgress() {
            if (confirm('আপনি কি নিশ্চিত যে আপনি সমস্ত প্রগতি মুছে দিতে চান? এই অপারেশনটি পূর্বাবস্থায় ফেরানো যাবে না।')) {
            Storage.clearAll();
            Storage.init();
            this.showNotification('সমস্ত প্রগতি রিসেট করা হয়েছে!', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    },

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--danger-color)' : 'var(--info-color)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 9999;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Setup page transitions
    setupPageTransitions() {
        document.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Only apply to internal links
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                    e.preventDefault();
                    document.body.classList.add('page-transition-out');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            });
        });
    },

    // Hide loading screen
    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => loadingScreen.remove(), 500);
            }
        }, 800);
    }
};

// Initialize app on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
