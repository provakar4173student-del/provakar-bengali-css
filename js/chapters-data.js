/* ========================================
   PROVAKAR - Chapters Data
   Complete content for Chapter 1 and 2
   ======================================== */

const ChaptersData = {
    // Chapter 1: ধ্বনি ও বর্ণ
    1: {
        id: 1,
        title: 'ধ্বনি ও বর্ণ',
        englishTitle: 'Sound and Letters',
        category: 'grammar',
        content: `
            <!-- সংজ্ঞা ও ব্যাখ্যা -->
            <h2><i class="fas fa-info-circle"></i> সংজ্ঞা ও ব্যাখ্যা</h2>
            
            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> ধ্বনি কী?</div>
                <p>ধ্বনি হলো মুখ থেকে উচ্চারিত শব্দাংশ যা কানে শোনা যায় কিন্তু লেখা যায় না। এটি একটি <strong>শ্রুতিগোচর</strong> (audible) বিষয়। ধ্বনি কেবল শোনা যায়, দেখা বা লেখা যায় না।</p>
                <p><em>উদাহরণ: "অ", "ক", "ম" — এগুলো উচ্চারণ করলে যে শব্দ তৈরি হয়, তাকে ধ্বনি বলে।</em></p>
            </div>

            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> বর্ণ কী?</div>
                <p>বর্ণ হলো ধ্বনির <strong>লিখিত রূপ</strong>। ধ্বনিকে লিখিত আকারে প্রকাশ করার জন্য যে চিহ্ন ব্যবহার করা হয়, তাকে বর্ণ বলে। বর্ণ চোখে দেখা যায় এবং লেখা যায়, কিন্তু শোনা যায় না।</p>
                <p><em>উদাহরণ: অ, ক, ম — এগুলো বর্ণ।</em></p>
            </div>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন</div>
                <p><strong>ধ্বনি = শোনা যায়, লেখা যায় না</strong></p>
                <p><strong>বর্ণ = লেখা যায়, শোনা যায় না</strong></p>
            </div>

            <h3>ধ্বনি ও বর্ণের পার্থক্য</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>বিষয়</th>
                        <th>ধ্বনি</th>
                        <th>বর্ণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সংজ্ঞা</strong></td>
                        <td>উচ্চারিত শব্দাংশ</td>
                        <td>ধ্বনির লিখিত রূপ</td>
                    </tr>
                    <tr>
                        <td><strong>অনুভূতি</strong></td>
                        <td>শোনা যায়</td>
                        <td>দেখা যায়</td>
                    </tr>
                    <tr>
                        <td><strong>প্রকৃতি</strong></td>
                        <td>কানে শ্রুতিগোচর</td>
                        <td>চোখে দৃশ্যমান</td>
                    </tr>
                    <tr>
                        <td><strong>উদাহরণ</strong></td>
                        <td>"অ" উচ্চারণ</td>
                        <td>অ (বর্ণ)</td>
                    </tr>
                </tbody>
            </table>

            <!-- স্বরধ্বনি -->
            <h2><i class="fas fa-music"></i> স্বরধ্বনি (Vowel Sounds)</h2>
            <p>স্বরধ্বনি হলো এমন ধ্বনি যা উচ্চারণ করতে কোনো বাধা পেতে হয় না। মুখের ভেতরে বাতাস নির্বিঘ্নে বেরিয়ে যায়।</p>

            <h3>স্বরধ্বনির প্রকারভেদ</h3>
            
            <div class="definition-box">
                <div class="box-title">১. হ্রস্ব স্বর (Short Vowels)</div>
                <p>যে স্বরধ্বনি অল্প সময়ের জন্য উচ্চারিত হয়, তাকে হ্রস্ব স্বর বলে।</p>
                <p><strong>হ্রস্ব স্বর:</strong> অ, ই, উ, ঋ</p>
                <p><strong>উদাহরণ:</strong> অক্ষরের 'অ', ইঁদুরের 'ই', উপহারের 'উ'</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. দীর্ঘ স্বর (Long Vowels)</div>
                <p>যে স্বরধ্বনি বেশিক্ষণ সময় ধরে উচ্চারিত হয়, তাকে দীর্ঘ স্বর বলে।</p>
                <p><strong>দীর্ঘ স্বর:</strong> আ, ঈ, ঊ, এ, ঐ, ও, ঔ</p>
                <p><strong>উদাহরণ:</strong> আমের 'আ', ঈশ্বরের 'ঈ', ওষুধের 'ও'</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র ১: হ্রস্ব ও দীর্ঘ চেনার উপায়</div>
                <p><strong>ট্রিক:</strong> হ্রস্ব স্বরের উচ্চারণে এক মাত্রা লাগে (যেমন: অ = এক মাত্রা)। দীর্ঘ স্বরের উচ্চারণে দুই মাত্রা লাগে (যেমন: আ = এক মাত্রা + এক মাত্রা)।</p>
            </div>

            <h3>মৌলিক স্বর ও যৌগিক স্বর</h3>
            <table class="content-table">
                <thead>
                    <tr>
                        <th>মৌলিক স্বর (৫টি)</th>
                        <th>যৌগিক স্বর (২টি)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>অ, আ, ই, উ, ঋ</td>
                        <td>এ (অ + ই), ঐ (অ + ই + অ)</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>ও (অ + উ), ঔ (অ + উ + অ)</td>
                    </tr>
                </tbody>
            </table>

            <!-- ব্যঞ্জনধ্বনি -->
            <h2><i class="fas fa-volume-up"></i> ব্যঞ্জনধ্বনি (Consonant Sounds)</h2>
            <p>ব্যঞ্জনধ্বনি হলো এমন ধ্বনি যা উচ্চারণ করতে মুখের কোনো না কোনো স্থানে বাধা পায়।</p>

            <h3>ব্যঞ্জনধ্বনির প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. স্পর্শ ব্যঞ্জন (২৫টি)</div>
                <p>যে ব্যঞ্জনধ্বনি উচ্চারণ করতে জিহ্বা মুখের কোনো স্থানে স্পর্শ করে, তাকে স্পর্শ ব্যঞ্জন বলে।</p>
                <p><strong>৫টি বর্গ:</strong></p>
                <ul>
                    <li><strong>ক-বর্গ:</strong> ক, খ, গ, ঘ, ঙ (কণ্ঠ্য)</li>
                    <li><strong>চ-বর্গ:</strong> চ, ছ, জ, ঝ, ঞ (তালব্য)</li>
                    <li><strong>ট-বর্গ:</strong> ট, ঠ, ড, ঢ, ণ (মূর্ধন্য)</li>
                    <li><strong>ত-বর্গ:</strong> ত, থ, দ, ধ, ন (দন্ত্য)</li>
                    <li><strong>প-বর্গ:</strong> প, ফ, ব, ভ, ম (ওষ্ঠ্য)</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">২. অন্তঃস্থ ব্যঞ্জন (৪টি)</div>
                <p>যে ব্যঞ্জনধ্বনি স্পর্শ ও উষ্মধ্বনির মাঝামাঝি অবস্থান করে, তাকে অন্তঃস্থ ব্যঞ্জন বলে।</p>
                <p><strong>অন্তঃস্থ:</strong> য, র, ল, ব</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. উষ্ম ব্যঞ্জন (৪টি)</div>
                <p>যে ব্যঞ্জনধ্বনি উচ্চারণ করতে বাতাস ঘর্ষণ বা শব্দ তৈরি করে, তাকে উষ্ম ব্যঞ্জন বলে।</p>
                <p><strong>উষ্ম:</strong> শ, ষ, স, হ</p>
            </div>

            <!-- উচ্চারণের স্থান -->
            <h2><i class="fas fa-map-marker-alt"></i> উচ্চারণের স্থান অনুযায়ী শ্রেণিবিভাগ</h2>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>উচ্চারণের স্থান</th>
                        <th>ধ্বনি</th>
                        <th>বর্ণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>কণ্ঠ্য</strong></td>
                        <td>কণ্ঠদেশে উচ্চারিত</td>
                        <td>ক, খ, গ, ঘ, ঙ, অ, আ</td>
                    </tr>
                    <tr>
                        <td><strong>তালব্য</strong></td>
                        <td>তালুতে জিহ্বা স্পর্শ করে</td>
                        <td>চ, ছ, জ, ঝ, ঞ, ই, ঈ</td>
                    </tr>
                    <tr>
                        <td><strong>মূর্ধন্য</strong></td>
                        <td>মূর্ধাতে জিহ্বা স্পর্শ করে</td>
                        <td>ট, ঠ, ড, ঢ, ণ, ঋ</td>
                    </tr>
                    <tr>
                        <td><strong>দন্ত্য</strong></td>
                        <td>দাঁতে জিহ্বা স্পর্শ করে</td>
                        <td>ত, থ, দ, ধ, ন, ল</td>
                    </tr>
                    <tr>
                        <td><strong>ওষ্ঠ্য</strong></td>
                        <td>ঠোঁটে উচ্চারিত</td>
                        <td>প, ফ, ব, ভ, ম, উ, ঊ</td>
                    </tr>
                </tbody>
            </table>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন: উচ্চারণ স্থানের সহজ টেকনিক</div>
                <p><strong>ক</strong>ণ্ঠ্য - <strong>ক</strong>রা</p>
                <p><strong>তা</strong>লব্য - <strong>চ</strong>া</p>
                <p><strong>ট</strong>িপে <strong>ট</strong>িপে - মূ<strong>র</strong>ধন্য</p>
                <p><strong>ত</strong>োদের <strong>ত</strong>াল - <strong>ত</strong>ালব্য নয়, <strong>দ</strong>ন্ত্য</p>
                <p><strong>প</strong>াখি - ও<strong>ষ</strong>্ঠ্য</p>
            </div>

            <!-- অল্পপ্রাণ ও মহাপ্রাণ -->
            <h2><i class="fas fa-chart-bar"></i> অল্পপ্রাণ ও মহাপ্রাণ ধ্বনি</h2>
            
            <div class="definition-box">
                <div class="box-title">অল্পপ্রাণ ধ্বনি</div>
                <p>যে ব্যঞ্জনধ্বনি অল্প বাতাস দিয়ে উচ্চারিত হয়, তাকে অল্পপ্রাণ বলে।</p>
                <p><strong>অল্পপ্রাণ:</strong> ক, গ, ঙ, চ, জ, ঞ, ট, ড, ণ, ত, দ, ন, প, ব, ম, য, র, ল, শ, ষ, স, হ (মোট ২৫টি)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">মহাপ্রাণ ধ্বনি</div>
                <p>যে ব্যঞ্জনধ্বনি বেশি বাতাস দিয়ে জোরে উচ্চারিত হয়, তাকে মহাপ্রাণ বলে।</p>
                <p><strong>মহাপ্রাণ:</strong> খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ (মোট ১০টি)</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র ২: মহাপ্রাণ মনে রাখার টেকনিক</div>
                <p><strong>"খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ"</strong> — এই ১০টি মহাপ্রাণ বর্ণ।</p>
                <p><strong>ট্রিক:</strong> প্রতিটি বর্গের ২য় ও ৪র্থ বর্ণটি মহাপ্রাণ (ক<strong>খ</strong> <strong>গ</strong>ঘ)। তবে প-বর্গের ক্ষেত্রে ২য় ও ৪র্থ নয়, আছে ২য় ও ৫ম (প<strong>ফ</strong> ব<strong>ভ</strong>)।</p>
            </div>

            <!-- অঘোষ ও ঘোষ -->
            <h2><i class="fas fa-assistive-listening-systems"></i> অঘোষ ও ঘোষ ধ্বনি</h2>
            
            <table class="content-table">
                <thead>
                    <tr>
                        <th>বিষয়</th>
                        <th>অঘোষ</th>
                        <th>ঘোষ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সংজ্ঞা</strong></td>
                        <td>স্বরতন্ত্রী কাঁপে না</td>
                        <td>স্বরতন্ত্রী কাঁপে</td>
                    </tr>
                    <tr>
                        <td><strong>উচ্চারণ</strong></td>
                        <td>কর্কশ বা শব্দতীক্ষ্ণ</td>
                        <td>ম্রদু বা গম্ভীর</td>
                    </tr>
                    <tr>
                        <td><strong>উদাহরণ</strong></td>
                        <td>ক, খ, চ, ছ, ট, ঠ, ত, থ, প, ফ</td>
                        <td>গ, ঘ, জ, ঝ, ড, ঢ, দ, ধ, ব, ভ</td>
                    </tr>
                </tbody>
            </table>

            <div class="warning-box">
                <div class="box-title"><i class="fas fa-exclamation-triangle"></i> সাধারণ ভুল</div>
                <p>অনেকে মনে করেন মহাপ্রাণ = ঘোষ। কিন্তু এটি <strong>ভুল</strong>। মহাপ্রাণ ও ঘোষ দুটি ভিন্ন বিষয়।</p>
                <ul>
                    <li>মহাপ্রাণ = বাতাসের পরিমাণ বেশি (খ, ঘ...)</li>
                    <li>ঘোষ = স্বরতন্ত্রী কাঁপে (গ, ঘ...)</li>
                </ul>
            </div>

            <!-- ধ্বনি পরিবর্তনের নিয়ম -->
            <h2><i class="fas fa-exchange-alt"></i> ধ্বনি পরিবর্তনের নিয়ম</h2>
            <p>বাংলা ভাষায় ধ্বনি পরিবর্তনের কিছু নিয়ম আছে। এগুলো পরীক্ষায় খুব গুরুত্বপূর্ণ।</p>

            <div class="definition-box">
                <div class="box-title">১. স্বরাগম (Epenthesis)</div>
                <p>দুটি ব্যঞ্জনধ্বনির মাঝখানে একটি স্বরধ্বনির যোগ হওয়াকে স্বরাগম বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>গ্রাম → গরাম</li>
                    <li>বিদ্যা → বিদিয়া</li>
                    <li>চন্দ্র → চাঁদ</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">২. স্বরভক্তি</div>
                <p>বিদেশী শব্দে স্বরধ্বনি যোগ করে উচ্চারণ সহজ করাকে স্বরভক্তি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>স্কুল → ইস্কুল</li>
                    <li>স্টেশন → ইস্টেশন</li>
                    <li>প্লেট → পিলেট</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. অভিশ্রুতি</div>
                <p>এক ধ্বনির স্থানে অন্য ধ্বনির উচ্চারণ হওয়াকে অভিশ্রুতি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>ক্ষ → খ (ক্ষীর → খীর)</li>
                    <li>জ্ঞ → গ্‌ (জ্ঞান → গান)</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. অপিনিহিতি</div>
                <p>স্বরধ্বনির লোপ বা বিলোপ ঘটাকে অপিনিহিতি বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>পদ্মা + অ + আসিল → পদ্মাসিল</li>
                    <li>হরি + অ + অ + আসিল → হরিশিল</li>
                </ul>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. সম্প্রকর্ষ</div>
                <p>দূরবর্তী ধ্বনির নিকটবর্তী হওয়াকে সম্প্রকর্ষ বলে।</p>
                <p><strong>উদাহরণ:</strong> বিদ্যালয় → বিদ্যালয় (যদিও 'য়' লেখা হয়, উচ্চারণে 'ও' বা 'অ' শোনা যায়)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৬. বিপ্রকর্ষ</div>
                <p>নিকটবর্তী ধ্বনির দূরবর্তী হওয়াকে বিপ্রকর্ষ বলে।</p>
                <p><strong>উদাহরণ:</strong> পবিত্র → পবিতর (মাঝখানে 'ত্র' এর স্থানে 'তর' উচ্চারণ)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৭. ধ্বনি লোপ</div>
                <p>কোনো ধ্বনি বাদ যাওয়াকে ধ্বনি লোপ বলে।</p>
                <p><strong>উদাহরণ:</strong></p>
                <ul>
                    <li>রাম + অ + অ + আসিল → রামাসিল ('অ' দুটি লোপ পেয়েছে)</li>
                    <li>হরি + অ + আসিল → হরিশিল</li>
                </ul>
            </div>

            <!-- Flowchart / Diagram -->
            <h2><i class="fas fa-project-diagram"></i> ধ্বনির সম্পূর্ণ শ্রেণিবিভাগ (Tree Diagram)</h2>
            
            <div class="diagram-container">
                <div class="diagram-title">বাংলা ধ্বনির শ্রেণিবিভাগ</div>
                <pre style="text-align: left; font-family: 'Noto Sans Bengali', sans-serif; line-height: 2;">
📌 ধ্বনি
│
├─ 🔤 স্বরধ্বনি (১১টি)
│   ├─ হ্রস্ব স্বর (৪টি): অ, ই, উ, ঋ
│   ├─ দীর্ঘ স্বর (৭টি): আ, ঈ, ঊ, এ, ঐ, ও, ঔ
│   ├─ মৌলিক স্বর (৫টি)
│   └─ যৌগিক স্বর (২টি): এ, ও
│
└─ 🔠 ব্যঞ্জনধ্বনি (৩৩টি)
    ├─ স্পর্শ ব্যঞ্জন (২৫টি)
    │   ├─ ক-বর্গ: ক, খ, গ, ঘ, ঙ
    │   ├─ চ-বর্গ: চ, ছ, জ, ঝ, ঞ
    │   ├─ ট-বর্গ: ট, ঠ, ড, ঢ, ণ
    │   ├─ ত-বর্গ: ত, থ, দ, ধ, ন
    │   └─ প-বর্গ: প, ফ, ব, ভ, ম
    ├─ অন্তঃস্থ ব্যঞ্জন (৪টি): য, র, ল, ব
    └─ উষ্ম ব্যঞ্জন (৪টি): শ, ষ, স, হ
                </pre>
            </div>

            <!-- শর্টকাট কৌশল -->
            <div class="shortcut-section">
                <h3><i class="fas fa-bolt"></i> শর্টকাট কৌশল (Shortcut Methods)</h3>
                
                <div class="shortcut-item">
                    <h4>১. ধ্বনি ও বর্ণ মনে রাখার টেকনিক</h4>
                    <p><strong>ধ্বনি:</strong> ধ্বনিত → ধ্বনি শোনা যায় (শব্দের সাথে "নি" যুক্ত করে পড়ুন → ধ্বনিত = শোনা)</p>
                    <p><strong>বর্ণ:</strong> বর্ণ → বর্ণনা = লেখা (বর্ণ দিয়ে বর্ণনা করা যায়)</p>
                </div>

                <div class="shortcut-item">
                    <h4>২. হ্রস্ব ও দীর্ঘ স্বর চেনার ট্রিক</h4>
                    <p>হ্রস্ব স্বরের নামের শেষে "অ" বা "উ" আছে → হ্রস্ব (অ, ই, উ, ঋ)</p>
                    <p>দীর্ঘ স্বরের নামের শেষে "আ" বা "ঈ" আছে → দীর্ঘ (আ, ঈ, ঊ, এ, ঐ, ও, ঔ)</p>
                </div>

                <div class="shortcut-item">
                    <h4>৩. মহাপ্রাণ বর্ণ মনে রাখার টেকনিক</h4>
                    <p><strong>"খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ"</strong></p>
                    <p>মনে রাখার কৌশল: প্রতিটি বর্গের ২য় ও ৪র্থ বর্ণ → মহাপ্রাণ।</p>
                </div>

                <div class="shortcut-item">
                    <h4>৪. উচ্চারণের স্থান মনে রাখার টেকনিক</h4>
                    <p><strong>ক</strong>ণ্ঠ → <strong>ক</strong>থা বলা</p>
                    <p><strong>তা</strong>লু → <strong>চ</strong>া</p>
                    <p><strong>ট</strong>ুপি → মূ<strong>র</strong>ধা</p>
                    <p><strong>দা</strong>ঁত → <strong>ত</strong>াল</p>
                    <p><strong>প</strong>াখি → ও<strong>ষ</strong>্ঠ</p>
                </div>

                <div class="shortcut-item">
                    <h4>৫. ধ্বনি পরিবর্তনের নিয়ম মনে রাখার টেকনিক</h4>
                    <p><strong>স্বরাগম:</strong> স্বর + আগম = স্বর আসছে → গ্রাম → গরাম</p>
                    <p><strong>স্বরভক্তি:</strong> স্বর ভাগ হচ্ছে → বিদ্যা → বিদিয়া</p>
                    <p><strong>অভিশ্রুতি:</strong> ভ্রান্ত শ্রুতি → ভুল শুনছি → ক্ষ → খ</p>
                </div>
            </div>

            <!-- পরীক্ষায় কী আসতে পারে -->
            <div class="exam-focus-section">
                <h3><i class="fas fa-bullseye"></i> পরীক্ষায় কী কী আসতে পারে (Exam Focus)</h3>
                
                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ গুরুত্বপূর্ণ টপিকসমূহ:</strong>
                        <ul>
                            <li>ধ্বনি ও বর্ণের সংজ্ঞা ও পার্থক্য (প্রায়শই MCQ আসে)</li>
                            <li>মহাপ্রাণ ও অল্পপ্রাণ বর্ণের তালিকা</li>
                            <li>উচ্চারণের স্থান অনুযায়ী বর্ণের শ্রেণিবিভাগ</li>
                            <li>অঘোষ ও ঘোষ ধ্বনির পার্থক্য</li>
                            <li>ধ্বনি পরিবর্তনের ৭টি নিয়ম (স্বরাগম, স্বরভক্তি ইত্যাদি)</li>
                            <li>ব্যঞ্জনধ্বনির ৫টি বর্গ ও তাদের উচ্চারণ স্থান</li>
                        </ul>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্রায়শই জিজ্ঞাসিত প্রশ্ন (Most Repeated Questions):</strong>
                        <ol>
                            <li>ধ্বনি ও বর্ণের মধ্যে প্রধান পার্থক্য কী?</li>
                            <li>মহাপ্রাণ বর্ণ কয়টি ও কী কী?</li>
                            <li>উচ্চারণের স্থান অনুযায়ী 'ক' কোন ধ্বনি?</li>
                            <li>স্বরাগম কাকে বলে? উদাহরণ দাও।</li>
                            <li>হ্রস্ব স্বর ও দীর্ঘ স্বরের পার্থক্য লেখো।</li>
                        </ol>
                    </div>
                </div>
            </div>
        `,
        questions: [
            {
                question: "ধ্বনি ও বর্ণের মধ্যে প্রধান পার্থক্য কী?",
                options: [
                    "ধ্বনি লেখা যায়, বর্ণ শোনা যায়",
                    "ধ্বনি শোনা যায়, বর্ণ লেখা যায়",
                    "দুটি একই",
                    "কোনোটিই নয়"
                ],
                correct: 1,
                explanation: "ধ্বনি হলো মুখ থেকে উচ্চারিত শব্দাংশ যা শোনা যায় কিন্তু লেখা যায় না। আর বর্ণ হলো ধ্বনির লিখিত রূপ, যা লেখা যায় কিন্তু শোনা যায় না।",
                trick: "ট্রিক: ধ্বনি = ধ্বনিত = শোনা | বর্ণ = বর্ণনা = লেখা"
            },
            {
                question: "নিচের কোনটি হ্রস্ব স্বর?",
                options: [
                    "আ",
                    "ঈ",
                    "অ",
                    "ঐ"
                ],
                correct: 2,
                explanation: "হ্রস্ব স্বর ৪টি: অ, ই, উ, ঋ। এগুলো অল্প সময়ের জন্য উচ্চারিত হয়। আ, ঈ, ঐ হলো দীর্ঘ স্বর।",
                trick: "ট্রিক: হ্রস্ব স্বরের নামের শেষে 'অ' বা 'উ' আছে।"
            },
            {
                question: "মহাপ্রাণ বর্ণ কয়টি?",
                options: [
                    "৮টি",
                    "৯টি",
                    "১০টি",
                    "১১টি"
                ],
                correct: 2,
                explanation: "মহাপ্রাণ বর্ণ ১০টি: খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ।",
                trick: "ট্রিক: খ, ঘ, ছ, ঝ, ঠ, ঢ, থ, ধ, ফ, ভ — মনে রাখুন।"
            },
            {
                question: "'ক' ধ্বনির উচ্চারণের স্থান কোথায়?",
                options: [
                    "তালব্য",
                    "কণ্ঠ্য",
                    "মূর্ধন্য",
                    "দন্ত্য"
                ],
                correct: 1,
                explanation: "'ক' ধ্বনির উচ্চারণের স্থান কণ্ঠ্য। ক-বর্গের সব বর্ণই কণ্ঠ্য।",
                trick: "ট্রিক: 'ক'ণ্ঠ্য → 'ক' দিয়ে মনে রাখুন।"
            },
            {
                question: "নিচের কোনটি ঘোষ ধ্বনি?",
                options: [
                    "ক",
                    "খ",
                    "গ",
                    "চ"
                ],
                correct: 2,
                explanation: "গ, ঘ, জ, ঝ, ড, ঢ, দ, ধ, ব, ভ — এগুলো ঘোষ ধ্বনি। 'গ' একটি ঘোষ ধ্বনি।",
                trick: "ট্রিক: প্রতিটি বর্গের ৩য় ও ৫ম বর্ণ = ঘোষ।"
            },
            {
                question: "স্বরাগম কাকে বলে?",
                options: [
                    "ধ্বনি লোপ পেলে",
                    "দুটি ব্যঞ্জনের মাঝে স্বরযোগ হলে",
                    "এক ধ্বনির স্থানে অন্য ধ্বনি হলে",
                    "স্বরধ্বনি লোপ পেলে"
                ],
                correct: 1,
                explanation: "দুটি ব্যঞ্জনধ্বনির মাঝখানে একটি স্বরধ্বনির যোগ হওয়াকে স্বরাগম বলে। যেমন: গ্রাম → গরাম।",
                trick: "ট্রিক: স্বর + আগম = স্বর আসছে → স্বরাগম।"
            },
            {
                question: "বাংলা স্বরধ্বনি কয়টি?",
                options: [
                    "৯টি",
                    "১০টি",
                    "১১টি",
                    "১২টি"
                ],
                correct: 2,
                explanation: "বাংলা স্বরধ্বনি ১১টি: ৪টি হ্রস্ব (অ, ই, উ, ঋ) ও ৭টি দীর্ঘ (আ, ঈ, ঊ, এ, ঐ, ও, ঔ)।",
                trick: "ট্রিক: ৪ + ৭ = ১১টি স্বরধ্বনি।"
            },
            {
                question: "নিচের কোনটি অন্তঃস্থ ব্যঞ্জন?",
                options: [
                    "ক",
                    "চ",
                    "য",
                    "শ"
                ],
                correct: 2,
                explanation: "অন্তঃস্থ ব্যঞ্জন ৪টি: য, র, ল, ব। 'য' একটি অন্তঃস্থ ব্যঞ্জন।",
                trick: "ট্রিক: য, র, ল, ব — মনে রাখুন।"
            },
            {
                question: "প-বর্গের বর্ণগুলো কোন উচ্চারণ স্থানের?",
                options: [
                    "কণ্ঠ্য",
                    "তালব্য",
                    "ওষ্ঠ্য",
                    "দন্ত্য"
                ],
                correct: 2,
                explanation: "প-বর্গের বর্ণগুলো (প, ফ, ব, ভ, ম) ওষ্ঠ্য উচ্চারণ স্থানের। ওষ্ঠ = ঠোঁট।",
                trick: "ট্রিক: পাখি → ওষ্ঠ্য (ঠোঁট দিয়ে 'প' উচ্চারণ করা হয়)।"
            },
            {
                question: "অপিনিহিতি কাকে বলে?",
                options: [
                    "ধ্বনি যোগ হওয়াকে",
                    "ধ্বনি লোপ পাওয়াকে",
                    "ধ্বনির পরিবর্তন হওয়াকে",
                    "ধ্বনির স্থানান্তরকে"
                ],
                correct: 1,
                explanation: "স্বরধ্বনির লোপ বা বিলোপ ঘটাকে অপিনিহিতি বলে। যেমন: হরি + অ + আসিল → হরিশিল।",
                trick: "ট্রিক: অপিনিহিতি = অপ + নিহিতি = নিহিতি লোপ = ধ্বনি লোপ।"
            }
        ]
    },

    // Chapter 2: শব্দ ও পদের শ্রেণিবিভাগ
    2: {
        id: 2,
        title: 'শব্দ ও পদের শ্রেণিবিভাগ',
        englishTitle: 'Parts of Speech',
        category: 'grammar',
        content: `
            <!-- সংজ্ঞা ও ব্যাখ্যা -->
            <h2><i class="fas fa-info-circle"></i> সংজ্ঞা ও ব্যাখ্যা</h2>
            
            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> শব্দ কী?</div>
                <p>শব্দ হলো ভাষার ক্ষুদ্রতম একক যার সাহায্যে আমরা আমাদের মনের ভাব প্রকাশ করি। শব্দের অর্থ নির্দিষ্ট ও সুনির্দিষ্ট।</p>
                <p><em>উদাহরণ: বাংলা, ভাষা, আমি, তুমি, সে, পড়ি — এগুলো সব শব্দ।</em></p>
            </div>

            <div class="definition-box">
                <div class="box-title"><i class="fas fa-quote-left"></i> পদ কী?</div>
                <p>বাক্য গঠনে যে সব শব্দ ব্যবহার করা হয়, তাদের <strong>বিভক্তিযুক্ত</strong> বা <strong>কারকযুক্ত</strong> অবস্থায় পদ বলে। অর্থাৎ, বাক্যে ব্যবহৃত শব্দকে পদ বলে।</p>
                <p><strong>সহজ কথায়:</strong> শব্দ + বিভক্তি = পদ</p>
                <p><em>উদাহরণ: "রাম বই পড়ে" — এখানে 'রাম', 'বই', 'পড়ে' হলো পদ।</em></p>
            </div>

            <div class="remember-box">
                <div class="box-title"><i class="fas fa-lightbulb"></i> মনে রাখুন</div>
                <p><strong>সকল পদই শব্দ, কিন্তু সকল শব্দ পদ নয়।</strong></p>
                <p>শব্দ স্বাধীনভাবে থাকতে পারে, কিন্তু পদ বাক্যের মধ্যে থাকতে হয়।</p>
            </div>

            <div class="warning-box">
                <div class="box-title"><i class="fas fa-exclamation-triangle"></i> সাধারণ ভুল</div>
                <p>অনেকে মনে করেন শব্দ ও পদ একই। কিন্তু এটি <strong>ভুল</strong>।</p>
                <ul>
                    <li>শব্দ: ভাষার একক (যেমন: ছাত্র)</li>
                    <li>পদ: বাক্যে ব্যবহৃত শব্দ (যেমন: ছাত্রটি বই পড়ছে — এখানে 'ছাত্রটি' একটি পদ)</li>
                </ul>
            </div>

            <!-- ৫ প্রকার পদ -->
            <h2><i class="fas fa-layer-group"></i> ৫ প্রকার পদ</h2>
            <p>বাংলা ব্যাকরণে পদ ৫ প্রকার:</p>
            <ol>
                <li><strong>বিশেষ্য</strong> (Noun)</li>
                <li><strong>বিশেষণ</strong> (Adjective)</li>
                <li><strong>সর্বনাম</strong> (Pronoun)</li>
                <li><strong>ক্রিয়া</strong> (Verb)</li>
                <li><strong>অব্যয়</strong> (Indeclinable)</li>
            </ol>

            <!-- বিশেষ্য -->
            <h2><i class="fas fa-user"></i> ১. বিশেষ্য (Noun)</h2>
            
            <div class="definition-box">
                <div class="box-title">বিশেষ্য কাকে বলে?</div>
                <p>যে পদে কোনো ব্যক্তি, বস্তু, স্থান, জাতি বা গুণের নাম বোঝায়, তাকে <strong>বিশেষ্য</strong> বলে।</p>
                <p><em>উদাহরণ: রাম, সীতা, বই, কলম, কলকাতা, ভারত, সাহস, সততা।</em></p>
            </div>

            <h3>বিশেষ্যের প্রকারভেদ (৬ প্রকার)</h3>

            <div class="definition-box">
                <div class="box-title">১. সংজ্ঞাবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো নির্দিষ্ট ব্যক্তি বা বস্তুর নাম বোঝায়, তাকে সংজ্ঞাবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> রবীন্দ্রনাথ ঠাকুর, প্রধানমন্ত্রী, গঙ্গা নদী, হিমালয় পর্বত।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. জাতিবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে একই জাতির বা শ্রেণির নাম বোঝায়, তাকে জাতিবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> ছাত্র, শিক্ষক, গাছ, নদী, পাহাড়, মানুষ।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. বস্তুবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো বস্তুর নাম বোঝায়, তাকে বস্তুবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> কলম, বই, টেবিল, চেয়ার, জল, বাতাস।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. সমষ্টিবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো একটি সমষ্টি বা দল বোঝায়, তাকে সমষ্টিবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> দল, সৈন্যদল, বাহিনী, পরিবার, জুরি (জোড়া)।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. ভাববাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো গুণ, অবস্থা বা ভাব বোঝায়, তাকে ভাববাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> সৌন্দর্য, বুদ্ধি, সাহস, সততা, লজ্জা, ক্ষুধা।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৬. গুণবাচক বিশেষ্য</div>
                <p>যে বিশেষ্য দিয়ে কোনো ব্যক্তি বা বস্তুর গুণ বোঝায়, তাকে গুণবাচক বিশেষ্য বলে।</p>
                <p><strong>উদাহরণ:</strong> বড়, ছোট, ভালো, মন্দ, কালো, সাদা।</p>
                <p><em>দ্রষ্টব্য: অনেক ব্যাকরণে গুণবাচক বিশেষ্যকে বিশেষণের অন্তর্ভুক্ত করা হয়।</em></p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র: বিশেষ্য চেনার উপায়</div>
                <p>যে শব্দের আগে <strong>'টি', 'গুলি', 'এর'</strong> যোগ করা যায়, তা <strong>বিশেষ্য</strong>।</p>
                <p><em>উদাহরণ: ছাত্র → ছাত্রটি, ছাত্রগুলি, ছাত্রের।</em></p>
            </div>

            <!-- বিশেষণ -->
            <h2><i class="fas fa-ad"></i> ২. বিশেষণ (Adjective)</h2>

            <div class="definition-box">
                <div class="box-title">বিশেষণ কাকে বলে?</div>
                <p>যে পদ দিয়ে কোনো বিশেষ্য বা সর্বনামের গুণ, দোষ, সংখ্যা বা পরিমাণ প্রকাশ করা হয়, তাকে <strong>বিশেষণ</strong> বলে।</p>
                <p><em>উদাহরণ: বড় ছেলে, পাঁচ কলম, সুন্দর ফুল। এখানে 'বড়', 'পাঁচ', 'সুন্দর' হলো বিশেষণ।</em></p>
            </div>

            <h3>বিশেষণের প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. নাম বিশেষণ</div>
                <p>যে বিশেষণ কোনো বিশেষ্য বা সর্বনামের গুণ বা দোষ প্রকাশ করে, তাকে নাম বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> সুন্দর, বড়, ছোট, ভালো, মন্দ, কালো।</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. ক্রিয়া বিশেষণ</div>
                <p>যে পদ দিয়ে ক্রিয়ার মান বা বিশেষত্ব প্রকাশ করা হয়, তাকে ক্রিয়া বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> সে ধীরে ধীরে হাঁটে। (ধীরে ধীরে = ক্রিয়া বিশেষণ)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. বিশেষণের বিশেষণ</div>
                <p>যে বিশেষণ অন্য বিশেষণের মান বা বিশেষত্ব প্রকাশ করে, তাকে বিশেষণের বিশেষণ বলে।</p>
                <p><strong>উদাহরণ:</strong> খুব সুন্দর, অত্যন্ত বড়। (খুব, অত্যন্ত = বিশেষণের বিশেষণ)</p>
            </div>

            <div class="formula-box">
                <div class="box-title"><i class="fas fa-flask"></i> সূত্র: বিশেষণ চেনার উপায়</div>
                <p>যে শব্দের পরে <strong>বিশেষ্য</strong> থাকে, তা <strong>বিশেষণ</strong>।</p>
                <p><em>উদাহরণ: সুন্দর (বিশেষণ) + ফুল (বিশেষ্য)</em></p>
            </div>

            <!-- সর্বনাম -->
            <h2><i class="fas fa-user-friends"></i> ৩. সর্বনাম (Pronoun)</h2>

            <div class="definition-box">
                <div class="box-title">সর্বনাম কাকে বলে?</div>
                <p>বিশেষ্যের পরিবর্তে ব্যবহৃত পদকে <strong>সর্বনাম</strong> বলে। অর্থাৎ, সব কিছুর নামই হলো সর্বনাম।</p>
                <p><em>উদাহরণ: আমি, তুমি, সে, এ, তা, কে, কারা।</em></p>
            </div>

            <h3>সর্বনামের প্রকারভেদ</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>প্রকার</th>
                        <th>সংজ্ঞা</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>ব্যক্তিবাচক</strong></td>
                        <td>নির্দিষ্ট ব্যক্তিকে বোঝায়</td>
                        <td>আমি, তুমি, সে, আমরা</td>
                    </tr>
                    <tr>
                        <td><strong>নির্দেশক</strong></td>
                        <td>নির্দিষ্ট বস্তুকে নির্দেশ করে</td>
                        <td>এ, ও, ইহা, উহা</td>
                    </tr>
                    <tr>
                        <td><strong>প্রশ্নবাচক</strong></td>
                        <td>প্রশ্ন করতে ব্যবহৃত</td>
                        <td>কে, কারা, কাকে</td>
                    </tr>
                    <tr>
                        <td><strong>অনির্দেশক</strong></td>
                        <td>অনিশ্চিত বা সাধারণ বোঝায়</td>
                        <td>কেউ, কিছু, কোনো</td>
                    </tr>
                    <tr>
                        <td><strong>সাপেক্ষ</strong></td>
                        <td>আশ্রয় বা সাপেক্ষতা বোঝায়</td>
                        <td>যে, তাহা, যারা</td>
                    </tr>
                    <tr>
                        <td><strong>আত্মবাচক</strong></td>
                        <td>নিজেকে বোঝায়</td>
                        <td>নিজে, নিজেরা</td>
                    </tr>
                </tbody>
            </table>

            <!-- ক্রিয়া -->
            <h2><i class="fas fa-running"></i> ৪. ক্রিয়া (Verb)</h2>

            <div class="definition-box">
                <div class="box-title">ক্রিয়া কাকে বলে?</div>
                <p>যে পদ দিয়ে কোনো কাজ বা ভাব প্রকাশ করা হয়, তাকে <strong>ক্রিয়া</strong> বলে।</p>
                <p><em>উদাহরণ: পড়ি, লিখি, যাই, হাসি, কাঁদি।</em></p>
            </div>

            <h3>ক্রিয়ার প্রকারভেদ</h3>

            <div class="definition-box">
                <div class="box-title">১. সকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়া ক্রিয়ার সাথে কর্ম থাকে, তাকে সকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> রাম বই <u>পড়ে</u>। (বই = কর্ম)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">২. অকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়ার সাথে কর্ম থাকে না, তাকে অকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে <u>হাসে</u>। (কর্ম নেই)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৩. দ্বিকর্মক ক্রিয়া</div>
                <p>যে ক্রিয়ার সাথে দুটি কর্ম থাকে (মুখ্য ও গৌণ), তাকে দ্বিকর্মক ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> শিক্ষক ছাত্রকে <u>বইটি দিলেন</u>। (ছাত্রকে = মুখ্য কর্ম, বইটি = গৌণ কর্ম)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৪. সমাপিকা ক্রিয়া</div>
                <p>বাক্যের শেষে যে ক্রিয়া থাকে এবং বাক্যকে সমাপ্ত করে, তাকে সমাপিকা ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে বই পড়ে<strong>।</strong> (পড়ে = সমাপিকা ক্রিয়া)</p>
            </div>

            <div class="definition-box">
                <div class="box-title">৫. অসমাপিকা ক্রিয়া</div>
                <p>বাক্যের শেষে না থেকে যে ক্রিয়া বাক্যকে অসমাপ্ত রাখে, তাকে অসমাপিকা ক্রিয়া বলে।</p>
                <p><strong>উদাহরণ:</strong> সে বই <u>পড়ে</u> ঘুমায়। (পড়ে = অসমাপিকা ক্রিয়া)</p>
            </div>

            <!-- অব্যয় -->
            <h2><i class="fas fa-anchor"></i> ৫. অব্যয় (Indeclinable)</h2>

            <div class="definition-box">
                <div class="box-title">অব্যয় কাকে বলে?</div>
                <p>যে পদের রূপ বা রূপভেদ হয় না, তাকে <strong>অব্যয়</strong> বলে। অর্থাৎ, যে শব্দের বিভক্তি নেই, তাকে অব্যয় বলে।</p>
                <p><em>উদাহরণ: এবং, অথবা, কিন্তু, যদি, তবে, হ্যাঁ, না।</em></p>
            </div>

            <h3>অব্যয়ের প্রকারভেদ</h3>

            <table class="content-table">
                <thead>
                    <tr>
                        <th>প্রকার</th>
                        <th>সংজ্ঞা</th>
                        <th>উদাহরণ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>সমুচ্চয়ী</strong></td>
                        <td>যোগ করতে ব্যবহৃত</td>
                        <td>এবং, ও, আর</td>
                    </tr>
                    <tr>
                        <td><strong>অনন্বয়ী</strong></td>
                        <td>বিয়োগ বা বিকল্প করতে ব্যবহৃত</td>
                        <td>অথবা, নয়তো</td>
                    </tr>
                    <tr>
                        <td><strong>অনুকার</strong></td>
                        <td>অনুমোদন বা স্বীকৃতি বোঝায়</td>
                        <td>হ্যাঁ, না, ঠিক আছে</td>
                    </tr>
                    <tr>
                        <td><strong>পদান্বয়ী</strong></td>
                        <td>পদের সাথে যুক্ত থাকে</td>
                        <td>কিন্তু, তবু, তাই</td>
                    </tr>
                </tbody>
            </table>

            <!-- পদ পরিবর্তন -->
            <h2><i class="fas fa-exchange-alt"></i> পদ পরিবর্তন (Conversion between Parts of Speech)</h2>
            
            <div class="definition-box">
                <div class="box-title">বিশেষ্য → বিশেষণ</div>
                <p>অনেক বিশেষ্য শব্দের শেষে '-ইক', '-কার', '-ময়', '-সার' যোগ করে বিশেষণ তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষ্য</th>
                            <th>বিশেষণ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>শিশু</td><td>শিশুক</td></tr>
                        <tr><td>মাটি</td><td>মাটিক</td></tr>
                        <tr><td>জল</td><td>জলকর</td></tr>
                        <tr><td>ফুল</td><td>ফুলক</td></tr>
                        <tr><td>বালু</td><td>বালুক</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="definition-box">
                <div class="box-title">বিশেষণ → বিশেষ্য</div>
                <p>অনেক বিশেষণ শব্দের শেষে '-তা', '-ত্ব', '-য' যোগ করে বিশেষ্য তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষণ</th>
                            <th>বিশেষ্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>সুন্দর</td><td>সৌন্দর্য</td></tr>
                        <tr><td>বুদ্ধিমান</td><td>বুদ্ধিমত্তা</td></tr>
                        <tr><td>সাহসী</td><td>সাহস</td></tr>
                        <tr><td>লজ্জিত</td><td>লজ্জা</td></tr>
                        <tr><td>ভালো</td><td>ভলোই</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="definition-box">
                <div class="box-title">বিশেষণ → ক্রিয়াবিশেষণ</div>
                <p>বিশেষণের শেষে '-ভাবে' যোগ করে ক্রিয়াবিশেষণ তৈরি করা হয়।</p>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>বিশেষণ</th>
                            <th>ক্রিয়াবিশেষণ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>সুন্দর</td><td>সুন্দরভাবে</td></tr>
                        <tr><td>ধীর</td><td>ধীরে</td></tr>
                        <tr><td>দ্রুত</td><td>দ্রুতগতিতে</td></tr>
                        <tr><td>সঠিক</td><td>সঠিকভাবে</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- শর্টকাট কৌশল -->
            <div class="shortcut-section">
                <h3><i class="fas fa-bolt"></i> শর্টকাট কৌশল (Shortcut Methods)</h3>
                
                <div class="shortcut-item">
                    <h4>১. ৫ প্রকার পদ মনে রাখার টেকনিক</h4>
                    <p><strong>"বিশেষ সর্ব ক্রিয়া অব"</strong></p>
                    <p>বিশেষ = বিশেষ্য</p>
                    <p>সর্ব = সর্বনাম</p>
                    <p>ক্রিয়া = ক্রিয়া</p>
                    <p>অব = অব্যয়</p>
                    <p><em>(বিশেষণ বাদ পড়ে গেলে মনে রাখুন: বিশেষ্যের পরে বিশেষণ)</em></p>
                </div>

                <div class="shortcut-item">
                    <h4>২. বিশেষ্যের ৬ প্রকার মনে রাখার টেকনিক</h4>
                    <p><strong>"সংজ্ঞা জাতি বস্তু সমষ্টি ভাব গুণ"</strong></p>
                    <p>সংজ্ঞা = সংজ্ঞাবাচক</p>
                    <p>জাতি = জাতিবাচক</p>
                    <p>বস্তু = বস্তুবাচক</p>
                    <p>সমষ্টি = সমষ্টিবাচক</p>
                    <p>ভাব = ভাববাচক</p>
                    <p>গুণ = গুণবাচক</p>
                </div>

                <div class="shortcut-item">
                    <h4>৩. সর্বনামের ৬ প্রকার মনে রাখার টেকনিক</h4>
                    <p><strong>"ব্যক্তি নির্দেশ প্রশ্ন অনির্দেশ সাপেক্ষ আত্ম"</strong></p>
                    <p>ব্যক্তি = ব্যক্তিবাচক</p>
                    <p>নির্দেশ = নির্দেশক</p>
                    <p>প্রশ্ন = প্রশ্নবাচক</p>
                    <p>অনির্দেশ = অনির্দেশক</p>
                    <p>সাপেক্ষ = সাপেক্ষ</p>
                    <p>আত্ম = আত্মবাচক</p>
                </div>

                <div class="shortcut-item">
                    <h4>৪. ক্রিয়ার প্রকার চেনার ট্রিক</h4>
                    <p><strong>সকর্মক:</strong> যে ক্রিয়ার পরে 'কে' বা 'কে/কিছু' থাকে।</p>
                    <p><strong>অকর্মক:</strong> যে ক্রিয়ার পরে 'কে' যোগ করা যায় না।</p>
                    <p><em>উদাহরণ: সে বই পড়ে। (পড়ে → সকর্মক কারণ 'বই' কর্ম)</em></p>
                    <p><em>উদাহরণ: সে হাসে। (হাসে → অকর্মক কারণ 'কাকে হাসে?' করা যায় না)</em></p>
                </div>

                <div class="shortcut-item">
                    <h4>৫. সমাপিকা ও অসমাপিকা ক্রিয়া চেনার ট্রিক</h4>
                    <p><strong>সমাপিকা:</strong> বাক্যের শেষে থাকে এবং হাততালি দিলে বাক্য শেষ বোঝা যায়।</p>
                    <p><strong>অসমাপিকা:</strong> বাক্যের মাঝখানে থাকে, হাততালি দিলে বাক্য অসমাপ্ত মনে হয়।</p>
                    <p><em>উদাহরণ: সে বই পড়ে<strong>✋</strong> (সমাপিকা)</em></p>
                    <p><em>উদাহরণ: সে বই পড়ে... <strong>(আরও কিছু বাকি)</strong> (অসমাপিকা)</em></p>
                </div>
            </div>

            <!-- পরীক্ষায় কী আসতে পারে -->
            <div class="exam-focus-section">
                <h3><i class="fas fa-bullseye"></i> পরীক্ষায় কী কী আসতে পারে (Exam Focus)</h3>
                
                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ গুরুত্বপূর্ণ টপিকসমূহ:</strong>
                        <ul>
                            <li>শব্দ ও পদের সংজ্ঞা ও পার্থক্য</li>
                            <li>৫ প্রকার পদের নাম ও সংজ্ঞা</li>
                            <li>বিশেষ্যের ৬ প্রকার ও উদাহরণ</li>
                            <li>বিশেষণের প্রকারভেদ</li>
                            <li>সর্বনামের ৬ প্রকার</li>
                            <li>ক্রিয়ার প্রকারভেদ (সকর্মক, অকর্মক, দ্বিকর্মক)</li>
                            <li>অব্যয়ের প্রকারভেদ</li>
                            <li>পদ পরিবর্তনের তালিকা (বিশেষ্য → বিশেষণ, ইত্যাদি)</li>
                        </ul>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্রায়শই জিজ্ঞাসিত প্রশ্ন (Most Repeated Questions):</strong>
                        <ol>
                            <li>শব্দ ও পদের মধ্যে পার্থক্য কী?</li>
                            <li>বিশেষ্য কাকে বলে? এর প্রকারভেদ লেখো।</li>
                            <li>সর্বনামের প্রকারভেদ লেখো।</li>
                            <li>সকর্মক ও অকর্মক ক্রিয়ার পার্থক্য দাও।</li>
                            <li>অব্যয় কাকে বলে? উদাহরণ দাও।</li>
                            <li>নিচের শব্দটি কোন পদ — (MCQ আসে)</li>
                        </ol>
                    </div>
                </div>

                <div class="exam-topic">
                    <i class="fas fa-star"></i>
                    <div>
                        <strong>⭐ প্র্যাকটিসের জন্য গুরুত্বপূর্ণ:</strong>
                        <p>যেকোনো শব্দ দেওয়া থাকবে এবং জিজ্ঞাসা করা হবে — "নিচের কোনটি বিশেষ্য?" বা "নিচের কোনটি বিশেষণ?" ইত্যাদি।</p>
                        <p><strong>ট্রিক:</strong> শব্দের অর্থ দেখুন — যদি নাম বোঝায় → বিশেষ্য; যদি গুণ বোঝায় → বিশেষণ; যদি কাজ বোঝায় → ক্রিয়া।</p>
                    </div>
                </div>
            </div>
        `,
        questions: [
            {
                question: "শব্দ ও পদের মধ্যে প্রধান পার্থক্য কী?",
                options: [
                    "শব্দ স্বাধীন, পদ বাক্যের অংশ",
                    "দুটি একই",
                    "পদ স্বাধীন, শব্দ বাক্যের অংশ",
                    "কোনোটিই নয়"
                ],
                correct: 0,
                explanation: "শব্দ ভাষার ক্ষুদ্রতম একক, এটি স্বাধীনভাবে থাকতে পারে। কিন্তু পদ হলো বাক্যে ব্যবহৃত শব্দ (বিভক্তিযুক্ত শব্দ)। তাই সকল পদই শব্দ কিন্তু সকল শব্দ পদ নয়।",
                trick: "ট্রিক: শব্দ = স্বাধীন | পদ = বাক্যের মধ্যে।"
            },
            {
                question: "নিচের কোনটি বিশেষ্য?",
                options: [
                    "সুন্দর",
                    "দৌড়ায়",
                    "ছাত্র",
                    "এবং"
                ],
                correct: 2,
                explanation: "ছাত্র একটি জাতিবাচক বিশেষ্য। 'ছাত্রটি', 'ছাত্রগুলি' — এভাবে বিশেষ্য চেনা যায়। 'সুন্দর' বিশেষণ, 'দৌড়ায়' ক্রিয়া, 'এবং' অব্যয়।",
                trick: "ট্রিক: 'টি', 'গুলি', 'এর' যোগ করা যায় → বিশেষ্য।"
            },
            {
                question: "বিশেষ্যের প্রকারভেদ কয়টি?",
                options: [
                    "৪টি",
                    "৫টি",
                    "৬টি",
                    "৭টি"
                ],
                correct: 2,
                explanation: "বিশেষ্য ৬ প্রকার: ১. সংজ্ঞাবাচক, ২. জাতিবাচক, ৩. বস্তুবাচক, ৪. সমষ্টিবাচক, ৫. ভাববাচক, ৬. গুণবাচক।",
                trick: "ট্রিক: সংজ্ঞা জাতি বস্তু সমষ্টি ভাব গুণ = ৬টি।"
            },
            {
                question: "নিচের কোনটি ভাববাচক বিশেষ্য?",
                options: [
                    "ছাত্র",
                    "বই",
                    "সাহস",
                    "দল"
                ],
                correct: 2,
                explanation: "সাহস একটি ভাববাচক বিশেষ্য কারণ এটি একটি গুণ বা ভাব বোঝায়। ছাত্র = জাতিবাচক, বই = বস্তুবাচক, দল = সমষ্টিবাচক।",
                trick: "ট্রিক: যা অনুভূতি বা গুণ বোঝায় = ভাববাচক বিশেষ্য।"
            },
            {
                question: "বিশেষণ কাকে বলে?",
                options: [
                    "নামকে বোঝায়",
                    "কাজকে বোঝায়",
                    "বিশেষ্যের গুণ বা দোষ বোঝায়",
                    "সব কিছুকে বোঝায়"
                ],
                correct: 2,
                explanation: "বিশেষণ হলো এমন পদ যা বিশেষ্য বা সর্বনামের গুণ, দোষ, সংখ্যা বা পরিমাণ প্রকাশ করে। যেমন: বড় ছেলে — এখানে 'বড়' হলো বিশেষণ।",
                trick: "ট্রিক: বিশেষ্যের আগে থাকে = বিশেষণ।"
            },
            {
                question: "নিচের কোনটি সর্বনাম?",
                options: [
                    "বালক",
                    "পড়া",
                    "সে",
                    "বড়"
                ],
                correct: 2,
                explanation: "'সে' একটি ব্যক্তিবাচক সর্বনাম। সর্বনাম বিশেষ্যের পরিবর্তে ব্যবহৃত হয়। 'বালক' বিশেষ্য, 'পড়া' ক্রিয়া, 'বড়' বিশেষণ।",
                trick: "ট্রিক: আমি, তুমি, সে, এ, ও — এগুলো সর্বনাম।"
            },
            {
                question: "সকর্মক ক্রিয়ার বৈশিষ্ট্য কী?",
                options: [
                    "কর্ম থাকে না",
                    "কর্ম থাকে",
                    "দুটি কর্ম থাকে",
                    "কর্ম থাকতেও পারে, নাও থাকতে পারে"
                ],
                correct: 1,
                explanation: "সকর্মক ক্রিয়ার সাথে কর্ম থাকে। যেমন: রাম বই পড়ে। (পড়ে = সকর্মক ক্রিয়া, বই = কর্ম)।",
                trick: "ট্রিক: সকর্মক = স + কর্ম = কর্মসহ ক্রিয়া।"
            },
            {
                question: "নিচের কোনটি অব্যয়?",
                options: [
                    "রাম",
                    "পড়া",
                    "এবং",
                    "সুন্দর"
                ],
                correct: 2,
                explanation: "'এবং' একটি সমুচ্চয়ী অব্যয়। অব্যয়ের রূপ পরিবর্তন হয় না এবং বিভক্তি থাকে না। 'রাম' বিশেষ্য, 'পড়া' ক্রিয়া, 'সুন্দর' বিশেষণ।",
                trick: "ট্রিক: এবং, অথবা, কিন্তু, যদি — এগুলো অব্যয়।"
            },
            {
                question: "সমাপিকা ক্রিয়া কাকে বলে?",
                options: [
                    "বাক্যের মাঝখানে থাকে",
                    "বাক্যের শেষে থেকে বাক্য শেষ করে",
                    "কর্ম থাকে",
                    "কর্ম থাকে না"
                ],
                correct: 1,
                explanation: "সমাপিকা ক্রিয়া বাক্যের শেষে থাকে এবং বাক্যকে সমাপ্ত করে। যেমন: সে বই পড়ে। (এখানে 'পড়ে' সমাপিকা ক্রিয়া)",
                trick: "ট্রিক: সমাপিকা = সমাপ্ত করে।"
            },
            {
                question: "'সুন্দর' শব্দটি কোন পদ?",
                options: [
                    "বিশেষ্য",
                    "বিশেষণ",
                    "ক্রিয়া",
                    "সর্বনাম"
                ],
                correct: 1,
                explanation: "'সুন্দর' একটি বিশেষণ কারণ এটি 'ফুল' (বিশেষ্য) এর গুণ বোঝায়। সুন্দর ফুল — এখানে 'সুন্দর' বিশেষণ।",
                trick: "ট্রিক: বিশেষ্যের আগে থাকলে = বিশেষণ।"
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChaptersData;
}
