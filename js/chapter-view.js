/* ========================================
   PROVAKAR - Chapter View Logic
   Handles displaying chapter content and quiz
   ======================================== */

const ChapterView = {
    currentChapter: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    quizMode: 'study', // 'study', 'practice', 'exam'
    quizStarted: false,

    // Initialize chapter view
    init() {
        // Get chapter ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const chapterId = parseInt(urlParams.get('id'));

        if (!chapterId || !ChaptersData[chapterId]) {
            this.showError('অধ্যায়টি পাওয়া যায়নি।');
            return;
        }

        this.currentChapter = chapterId;
        this.loadChapter(chapterId);
        this.setupEventListeners();
        this.updateProgress();
    },

    // Load chapter content
    loadChapter(chapterId) {
        const chapter = ChaptersData[chapterId];
        
        // Update page title
        document.title = `${chapter.title} - PROVAKAR`;
        
        // Update breadcrumb
        const breadcrumbChapter = document.getElementById('breadcrumb-chapter');
        if (breadcrumbChapter) {
            breadcrumbChapter.textContent = `অধ্যায় ${chapter.id}`;
        }

        // Update chapter title
        const chapterTitle = document.getElementById('chapter-title');
        if (chapterTitle) {
            chapterTitle.textContent = `অধ্যায় ${chapter.id}: ${chapter.title}`;
        }

        // Update English title
        const chapterEnglish = document.getElementById('chapter-english');
        if (chapterEnglish) {
            chapterEnglish.textContent = chapter.englishTitle;
        }

        // Update quiz link
        const startQuizBtn = document.getElementById('start-quiz-btn');
        if (startQuizBtn) {
            startQuizBtn.href = `quiz.html?chapter=${chapter.id}`;
        }

        // Load content
        const contentArea = document.getElementById('chapter-content');
        if (contentArea && chapter.content) {
            contentArea.innerHTML = chapter.content;
            this.generateTOC();
            this.setupScrollSpy();
        }

        // Update bookmark button
        this.updateBookmarkButton();
    },

    // Generate Table of Contents
    generateTOC() {
        const tocNav = document.getElementById('toc-nav');
        if (!tocNav) return;

        const headings = document.querySelectorAll('#chapter-content h2, #chapter-content h3');
        let tocHTML = '';

        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;
            
            const icon = heading.querySelector('i');
            const iconClass = icon ? icon.className : 'fas fa-circle';
            
            // Remove emoji and trim
            let text = heading.textContent;
            // Remove common emoji patterns
            text = text.replace(/^[\s]*[🔤🔠📌📝📚📖✍️🔗📋📌🎯💡⚠️📊📈📉📊📋📌📄📑🔍🔎]*[\s]*/g, '');
            text = text.trim();
            
            tocHTML += `
                <div class="toc-item" data-target="${id}">
                    <i class="${iconClass}"></i> ${text}
                </div>
            `;
        });

        tocNav.innerHTML = tocHTML;

        // Add click handlers to TOC items
        tocNav.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.dataset.target;
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    // Setup scroll spy for TOC
    setupScrollSpy() {
        const headings = document.querySelectorAll('#chapter-content h2, #chapter-content h3');
        const tocItems = document.querySelectorAll('.toc-item');

        if (headings.length === 0) return;

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.scrollY + 100;

            headings.forEach(heading => {
                if (heading.offsetTop <= scrollPos) {
                    current = heading.id;
                }
            });

            tocItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.target === current) {
                    item.classList.add('active');
                }
            });
        });
    },

    // Setup event listeners
    setupEventListeners() {
        // Bookmark button
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => this.toggleBookmark());
        }

        // Print button
        const printBtn = document.getElementById('print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => window.print());
        }

        // TOC toggle (mobile)
        const tocToggle = document.getElementById('toc-toggle');
        const tocNav = document.getElementById('toc-nav');
        if (tocToggle && tocNav) {
            tocToggle.addEventListener('click', () => {
                tocNav.style.display = tocNav.style.display === 'none' ? 'block' : 'none';
                const icon = tocToggle.querySelector('i');
                if (tocNav.style.display === 'none') {
                    icon.className = 'fas fa-chevron-down';
                } else {
                    icon.className = 'fas fa-chevron-up';
                }
            });
        }
    },

    // Toggle bookmark
    toggleBookmark() {
        const chapterId = this.currentChapter;
        const chapter = ChaptersData[chapterId];
        
        if (Storage.isBookmarked('chapter', chapterId)) {
            Storage.removeBookmark('chapter', chapterId);
            App.showNotification('বুকমার্ক সরানো হয়েছে।', 'success');
        } else {
            Storage.addBookmark('chapter', chapterId, `অধ্যায় ${chapterId}: ${chapter.title}`);
            App.showNotification('বুকমার্ক যোগ করা হয়েছে।', 'success');
        }

        this.updateBookmarkButton();
    },

    // Update bookmark button
    updateBookmarkButton() {
        const bookmarkBtn = document.getElementById('bookmark-btn');
        if (!bookmarkBtn) return;

        const chapterId = this.currentChapter;
        const isBookmarked = Storage.isBookmarked('chapter', chapterId);
        
        const icon = bookmarkBtn.querySelector('i');
        if (isBookmarked) {
            icon.className = 'fas fa-bookmark';
            bookmarkBtn.title = 'বুকমার্ক সরান';
        } else {
            icon.className = 'far fa-bookmark';
            bookmarkBtn.title = 'বুকমার্ক করুন';
        }
    },

    // Update progress
    updateProgress() {
        const chapterId = this.currentChapter;
        const progress = Storage.getProgress(chapterId);
        
        if (progress) {
            const percent = progress.percentage || 0;
            const progressFill = document.getElementById('chapter-progress-fill');
            const progressPercent = document.getElementById('progress-percent');
            
            if (progressFill) {
                progressFill.style.width = `${percent}%`;
            }
            if (progressPercent) {
                progressPercent.textContent = `${percent}%`;
            }
        }
    },

    // Show error
    showError(message) {
        const contentArea = document.getElementById('chapter-content');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--danger-color); margin-bottom: 1rem;"></i>
                    <h2>${message}</h2>
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
    // Check if we're on chapter page
    if (document.getElementById('chapter-content')) {
        ChapterView.init();
    }
});
