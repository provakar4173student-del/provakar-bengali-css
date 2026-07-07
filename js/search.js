/* ========================================
   PROVAKAR - Search Functionality
   ======================================== */

const Search = {
    // Search data - chapters and topics
    searchData: [
        // Chapter 1
        { title: 'অধ্যায় ১: ধ্বনি ও বর্ণ', type: 'chapter', id: 1, keywords: ['ধ্বনি', 'বর্ণ', 'স্বরধ্বনি', 'ব্যঞ্জনধ্বনি', 'উচ্চারণ', 'স্থান', 'অল্পপ্রাণ', 'মহাপ্রাণ', 'ঘোষ', 'অঘোষ', 'ধ্বনি পরিবর্তন'] },
        { title: 'ধ্বনি কী?', type: 'topic', chapter: 1, keywords: ['ধ্বনি', 'সংজ্ঞা'] },
        { title: 'বর্ণ কী?', type: 'topic', chapter: 1, keywords: ['বর্ণ', 'সংজ্ঞা'] },
        { title: 'ধ্বনি ও বর্ণের পার্থক্য', type: 'topic', chapter: 1, keywords: ['পার্থক্য', 'ধ্বনি', 'বর্ণ'] },
        { title: 'স্বরধ্বনি', type: 'topic', chapter: 1, keywords: ['স্বরধ্বনি', 'হ্রস্ব', 'দীর্ঘ', 'মৌলিক', 'যৌগিক'] },
        { title: 'ব্যঞ্জনধ্বনি', type: 'topic', chapter: 1, keywords: ['ব্যঞ্জনধ্বনি', 'স্পর্শ', 'অন্তঃস্থ', 'উষ্ম'] },
        { title: 'উচ্চারণের স্থান', type: 'topic', chapter: 1, keywords: ['উচ্চারণ', 'কণ্ঠ্য', 'তালব্য', 'মূর্ধন্য', 'দন্ত্য', 'ওষ্ঠ্য'] },
        
        // Chapter 2
        { title: 'অধ্যায় ২: শব্দ ও পদের শ্রেণিবিভাগ', type: 'chapter', id: 2, keywords: ['শব্দ', 'পদ', 'বিশেষ্য', 'বিশেষণ', 'সর্বনাম', 'ক্রিয়া', 'অব্যয়', 'বিভক্তি'] },
        { title: 'পদ কী?', type: 'topic', chapter: 2, keywords: ['পদ', 'সংজ্ঞা', 'বিভক্তি'] },
        { title: 'বিশেষ্য', type: 'topic', chapter: 2, keywords: ['বিশেষ্য', 'প্রকার', 'সংজ্ঞাবাচক', 'জাতিবাচক'] },
        { title: 'বিশেষণ', type: 'topic', chapter: 2, keywords: ['বিশেষণ', 'নাম', 'ক্রিয়া', 'বিশেষণের বিশেষণ'] },
        { title: 'সর্বনাম', type: 'topic', chapter: 2, keywords: ['সর্বনাম', 'ব্যক্তিবাচক', 'নির্দেশক', 'প্রশ্নবাচক'] },
        { title: 'ক্রিয়া', type: 'topic', chapter: 2, keywords: ['ক্রিয়া', 'সকর্মক', 'অকর্মক', 'দ্বিকর্মক'] },
        { title: 'অব্যয়', type: 'topic', chapter: 2, keywords: ['অব্যয়', 'সমুচ্চয়ী', 'অনন্বয়ী', 'অনুকার'] },
        
        // Chapter 3
        { title: 'অধ্যায় ৩: সন্ধি', type: 'chapter', id: 3, keywords: ['সন্ধি', 'স্বরসন্ধি', 'ব্যঞ্জনসন্ধি', 'বিসর্গ সন্ধি'] },
        
        // Chapter 4
        { title: 'অধ্যায় ৪: কারক ও বিভক্তি', type: 'chapter', id: 4, keywords: ['কারক', 'বিভক্তি', 'কর্তা', 'কর্ম', 'করণ', 'সম্প্রদান', 'অপাদান', 'অধিকরণ'] },
        
        // Chapter 5
        { title: 'অধ্যায় ৫: সমাস', type: 'chapter', id: 5, keywords: ['সমাস', 'বহুব্রীহি', 'কর্মধারয়', 'দ্বন্দ্ব', 'দ্বিগু', 'তৎপুরুষ', 'অব্যয়ীভাব'] },
        
        // Chapter 6
        { title: 'অধ্যায় ৬: বাক্য পরিবর্তন', type: 'chapter', id: 6, keywords: ['বাক্য', 'সরল', 'জটিল', 'যৌগিক', 'রূপান্তর'] },
        
        // Chapter 7
        { title: 'অধ্যায় ৭: বাচ্য পরিবর্তন', type: 'chapter', id: 7, keywords: ['বাচ্য', 'কর্তৃবাচ্য', 'কর্মবাচ্য', 'ভাববাচ্য'] },
        
        // Chapter 8
        { title: 'অধ্যায় ৮: কাল ও পুরুষ', type: 'chapter', id: 8, keywords: ['কাল', 'পুরুষ', 'বর্তমান', 'অতীত', 'ভবিষ্যৎ'] },
        
        // Chapter 9
        { title: 'অধ্যায় ৯: লিঙ্গ ও বচন', type: 'chapter', id: 9, keywords: ['লিঙ্গ', 'বচন', 'পুংলিঙ্গ', 'স্ত্রীলিঙ্গ', 'একবচন', 'বহুবচন'] },
        
        // Chapter 10
        { title: 'অধ্যায় ১০: বানান ও বাক্য শুদ্ধিকরণ', type: 'chapter', id: 10, keywords: ['বানান', 'শুদ্ধ', 'অশুদ্ধ', 'ণ-ত্ব', 'ষ-ত্ব'] },
        
        // Chapter 11
        { title: 'অধ্যায় ১১: বাংলা শব্দভাণ্ডার', type: 'chapter', id: 11, keywords: ['শব্দভাণ্ডার', 'তত্সম', 'তদ্ভব', 'দেশী', 'বিদেশী'] },
        
        // Chapter 12
        { title: 'অধ্যায় ১২: সমার্থ শব্দ', type: 'chapter', id: 12, keywords: ['সমার্থ', 'প্রতিশব্দ', 'synonym'] },
        
        // Chapter 13
        { title: 'অধ্যায় ১৩: বিপরীতার্থক শব্দ', type: 'chapter', id: 13, keywords: ['বিপরীতার্থক', 'বিপরীত', 'antonym'] },
        
        // Chapter 14
        { title: 'অধ্যায় ১৪: এক কথায় প্রকাশ', type: 'chapter', id: 14, keywords: ['এক কথায়', 'সংকোচন'] },
        
        // Chapter 15
        { title: 'অধ্যায় ১৫: সমোচ্চারিত ভিন্নার্থবোধক শব্দ', type: 'chapter', id: 15, keywords: ['সমোচ্চারিত', 'ভিন্নার্থবোধক', 'homonym'] },
        
        // Chapter 16
        { title: 'অধ্যায় ১৬: বাগধারা ও প্রবাদ-প্রবচন', type: 'chapter', id: 16, keywords: ['বাগধারা', 'প্রবাদ', 'প্রবচন', 'idiom', 'proverb'] },
        
        // Chapter 17
        { title: 'অধ্যায় ১৭: সাহিত্যিকদের পরিচিতি ও বোধপরীক্ষণ', type: 'chapter', id: 17, keywords: ['সাহিত্যিক', 'ছদ্মনাম', 'বোধপরীক্ষণ', 'passage'] }
    ],

    // Initialize search
    init() {
        const searchInput = document.getElementById('global-search');
        const searchResults = document.getElementById('search-results');

        if (searchInput && searchResults) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    searchResults.classList.add('active');
                }
            });

            // Close search results on outside click
            document.addEventListener('click', (e) => {
                if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                    searchResults.classList.remove('active');
                }
            });
        }
    },

    // Handle search input
    handleSearch(query) {
        const searchResults = document.getElementById('search-results');
        
        if (!query.trim()) {
            searchResults.classList.remove('active');
            return;
        }

        const results = this.search(query);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">কোনো ফলাফল পাওয়া যায়নি</div>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="Search.navigateTo('${result.type}', ${result.chapter || result.id})">
                    <div class="result-type">
                        <i class="fas fa-${result.type === 'chapter' ? 'book' : 'file-alt'}"></i>
                        ${result.type === 'chapter' ? 'অধ্যায়' : 'টপিক'}
                    </div>
                    <div class="result-title">${result.title}</div>
                </div>
            `).join('');
        }

        searchResults.classList.add('active');
    },

    // Search function
    search(query) {
        const lowerQuery = query.toLowerCase();
        const results = [];
        const seen = new Set();

        this.searchData.forEach(item => {
            // Check title match
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            
            // Check keywords match
            const keywordMatch = item.keywords.some(keyword => 
                keyword.toLowerCase().includes(lowerQuery)
            );

            if ((titleMatch || keywordMatch) && !seen.has(item.title)) {
                results.push(item);
                seen.add(item.title);
            }
        });

        return results.slice(0, 10); // Limit to 10 results
    },

    // Navigate to search result
    navigateTo(type, id) {
        if (type === 'chapter') {
            window.location.href = `chapter.html?id=${id}`;
        } else {
            window.location.href = `chapter.html?id=${id}`;
        }
        
        // Close search results
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
            searchResults.classList.remove('active');
        }
        
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.value = '';
        }
    }
};

// Initialize search on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    Search.init();
});
