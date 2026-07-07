# 📚 PROVAKAR - কীভাবে নতুন অধ্যায় যোগ করবেন

## পদ্ধতি ১: সরাসরি কোড এডিট করে (Easiest Method)

### ধাপ ১: `js/chapters-data.js` ফাইল খুলুন

এই ফাইলে `ChaptersData` নামে একটি অবজেক্ট আছে। এখানে প্রতিটি অধ্যায়ের ডেটা আছে।

### ধাপ ২: নতুন অধ্যায় যোগ করুন

নিচের টেমপ্লেট অনুসরণ করুন:

```javascript
// অধ্যায় ৩: সন্ধি
3: {
    id: 3,
    title: 'সন্ধি',
    englishTitle: 'Sandhi',
    category: 'grammar',
    content: `
        <!-- এখানে HTML কন্টেন্ট লিখুন -->
        <h2>সংজ্ঞা</h2>
        <div class="definition-box">
            <div class="box-title">সন্ধি কাকে বলে?</div>
            <p>দুটি ধ্বনি মিলে যে নতুন ধ্বনি তৈরি হয়...</p>
        </div>
        
        <!-- আরও কন্টেন্ট -->
    `,
    questions: [
        {
            question: "আপনার প্রশ্ন",
            options: ["অপশন A", "অপশন B", "অপশন C", "অপশন D"],
            correct: 0,  // সঠিক উত্তরের ইনডেক্স (0-3)
            explanation: "ব্যাখ্যা",
            trick: "ট্রিক",
            formula: "সূত্র (যদি থাকে)"
        }
        // আরও প্রশ্ন...
    ]
}
```

### ধাপ ৩: `chapters.html` এ অধ্যায়ের কার্ড যোগ করুন

`chapters.html` ফাইলে গিয়ে নিচের কোডটি আনকমেন্ট করুন (বা কপি করুন):

```html
<!-- অধ্যায় ৩ -->
<div class="chapter-card" data-category="grammar" data-chapter="3">
    <div class="chapter-card-header">
        <div class="chapter-number">অধ্যায় ৩</div>
        <div class="chapter-icon">🔗</div>
    </div>
    <div class="chapter-card-body">
        <h3 class="chapter-title">সন্ধি</h3>
        <p class="chapter-subtitle">Sandhi</p>
        <div class="chapter-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
            <span class="progress-text">০% সম্পন্ন</span>
        </div>
    </div>
    <div class="chapter-card-footer">
        <a href="chapter.html?id=3" class="btn btn-primary btn-sm">
            <i class="fas fa-book-reader"></i> পড়ুন
        </a>
        <a href="quiz.html?chapter=3" class="btn btn-secondary btn-sm">
            <i class="fas fa-question-circle"></i> কুইজ
        </a>
    </div>
</div>
```

---

## পদ্ধতি ২: JSON ফরম্যাটে প্রশ্ন ইমপোর্ট করে

ওয়েবসাইটের সেটিংস পেজে "ডেটা ইমপোর্ট" বাটন আছে। আপনি JSON ফাইল আপলোড করে প্রশ্ন যোগ করতে পারেন।

### JSON ফরম্যাট:

```json
{
  "chapter": 3,
  "questions": [
    {
      "question": "স্বরসন্ধি কাকে বলে?",
      "options": [
        "স্বরধ্বনির মিলনে যে পরিবর্তন",
        "ব্যঞ্জনধ্বনির মিলনে যে পরিবর্তন",
        "বিসর্গের পরিবর্তন",
        "কোনোটিই নয়"
      ],
      "correct": 0,
      "explanation": "স্বরধ্বনি মিলে গিয়ে যে পরিবর্তন হয়, তাকে স্বরসন্ধি বলে।",
      "trick": "স্বর + সন্ধি = স্বরসন্ধি"
    }
  ]
}
```

এই JSON ফাইলটি সেভ করুন (যেমন: `chapter3-questions.json`), তারপর সেটিংস পেজ থেকে আপলোড করুন।

---

## কন্টেন্ট রাইটিং টিপস (Content Writing Tips)

### ১. HTML ট্যাগস ব্যবহার করুন:
```html
<h2>বড় টাইটেল</h2>
<h3>মাঝারি টাইটেল</h3>
<p>প্যারাগ্রাফ</p>
<ul>
  <li>লিস্ট আইটেম</li>
</ul>
<table class="content-table">
  <!-- টেবিল -->
</table>
```

### ২. স্পেশাল বক্স তৈরি করুন:
```html
<div class="definition-box">
  <div class="box-title">সংজ্ঞা</div>
  <p>আপনার সংজ্ঞা</p>
</div>

<div class="remember-box">
  <div class="box-title">💡 মনে রাখুন</div>
  <p>গুরুত্বপূর্ণ পয়েন্ট</p>
</div>

<div class="warning-box">
  <div class="box-title">⚠️ সাধারণ ভুল</div>
  <p>ভুলগুলোর তালিকা</p>
</div>
```

### ৩. MCQ প্রশ্ন লেখার ফরম্যাট:
```javascript
{
    question: "প্রশ্ন এখানে",
    options: ["A", "B", "C", "D"],
    correct: 0,  // 0 = A, 1 = B, 2 = C, 3 = D
    explanation: "ব্যাখ্যা",
    trick: "ট্রিক (ঐচ্ছিক)",
    formula: "সূত্র (ঐচ্ছিক)"
}
```

---

## 🎯 অধ্যায়ভিত্তিক কন্টেন্ট আউটলাইন

নিচের টপিকসগুলো কভার করবেন:

### অধ্যায় ৩: সন্ধি
- সংজ্ঞা ও উদ্দেশ্য
- স্বরসন্ধি (সব সূত্র + উদাহরণ)
- ব্যঞ্জনসন্ধি
- বিসর্গ সন্ধি
- নিপাতনে সিদ্ধ সন্ধি
- সন্ধি বিচ্ছেদ

### অধ্যায় ৪: কারক ও বিভক্তি
- ৬ কারক
- বিভক্তি তালিকা
- কারক নির্ণয়ের ট্রিক

### অধ্যায় ৫: সমাস
- ৬ প্রকার সমাস
- নিত্য ও অলুক সমাস
- সমাস নির্ণয়ের ট্রিক

(অধ্যায় ৬-১৭ এর জন্য আমাকে বলুন, আমি ডিটেইল দেব)

---

## ✅ চেকলিস্ট (Checklist)

নতুন অধ্যায় যোগ করার পর নিশ্চিত করুন:

- [ ] `chapters-data.js` এ অধ্যায়ের ডেটা যোগ করেছেন
- [ ] `chapters.html` এ অধ্যায়ের কার্ড যোগ করেছেন
- [ ] কমপক্ষে ১০টি MCQ যোগ করেছেন
- [ ] কন্টেন্টে টেবিল অফ কন্টেন্টস আছে
- [ ] শর্টকাট কৌশল সেকশন আছে
- [ ] পরীক্ষায় কী আসতে পারে সেকশন আছে
- [ ] ওয়েবসাইটে টেস্ট করে দেখেছেন

---

## 🚀 প্রয়োজনে আমাকে বলুন

আপনি যদি:
- আমাকে বাকি অধ্যায়গুলো লিখে দিতে বলতে চান → বলুন
- কোনো বাগ বা সমস্যা হচ্ছে → বলুন
- নতুন ফিচার যোগ করতে চান → বলুন

**আমি সাহায্য করতে প্রস্তুত! 🎉**

---

**PROVAKAR Team**
📧 provakarb541@gmail.com
