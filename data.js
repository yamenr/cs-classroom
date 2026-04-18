/* ========================================
   CS Classroom - Content Data Store
   All site content is managed here.
   Admin panel saves changes to localStorage.
   ======================================== */

const DEFAULT_DATA = {
  // ─── Admin Password (change this!) ───
  adminPassword: "admin123",

  // ─── C# Subject ───
  csharp: {
    title: "C# — سي شارب",
    description: "تعلم أساسيات البرمجة بلغة C# من المتغيرات والشروط وصولاً إلى البرمجة كائنية التوجه",
    lessons: [
      {
        id: "cs1",
        title: "مقدمة في C# وبيئة التطوير",
        description: "التعرف على لغة C# وتنصيب Visual Studio وكتابة أول برنامج Hello World",
        tags: ["مقدمة", "Visual Studio", "Hello World"]
      },
      {
        id: "cs2",
        title: "المتغيرات وأنواع البيانات",
        description: "التعرف على أنواع البيانات الأساسية: int, double, string, bool وكيفية تعريف المتغيرات",
        tags: ["متغيرات", "أنواع بيانات", "تحويل أنواع"]
      },
      {
        id: "cs3",
        title: "الجمل الشرطية - if / else / switch",
        description: "اتخاذ القرارات في البرنامج باستخدام الجمل الشرطية والعوامل المنطقية",
        tags: ["if", "else", "switch", "عوامل منطقية"]
      },
      {
        id: "cs4",
        title: "الحلقات التكرارية - for / while / do-while",
        description: "تكرار تنفيذ الأوامر باستخدام أنواع الحلقات المختلفة",
        tags: ["for", "while", "do-while", "break", "continue"]
      },
      {
        id: "cs5",
        title: "المصفوفات - Arrays",
        description: "تخزين مجموعات من البيانات والتعامل معها - مصفوفات أحادية وثنائية الأبعاد",
        tags: ["مصفوفات", "1D", "2D", "foreach"]
      },
      {
        id: "cs6",
        title: "الدوال - Methods",
        description: "تقسيم البرنامج إلى دوال قابلة لإعادة الاستخدام - البارامترات والقيم المرجعة",
        tags: ["methods", "parameters", "return", "overloading"]
      },
      {
        id: "cs7",
        title: "البرمجة كائنية التوجه - OOP",
        description: "الأصناف والكائنات، التغليف، الوراثة، تعدد الأشكال، والتجريد",
        tags: ["classes", "objects", "inheritance", "polymorphism"]
      },
      {
        id: "cs8",
        title: "التعامل مع النصوص - Strings",
        description: "عمليات النصوص المتقدمة: البحث، الاستبدال، التقسيم، والتنسيق",
        tags: ["string", "substring", "split", "format"]
      }
    ],
    videos: [
      {
        id: "csv1",
        title: "مقدمة في C# للمبتدئين",
        description: "شرح شامل لأساسيات لغة C# مع أمثلة عملية",
        youtubeId: "dQw4w9WgXcQ",
        duration: "45:00"
      },
      {
        id: "csv2",
        title: "المتغيرات وأنواع البيانات في C#",
        description: "شرح مفصل لجميع أنواع البيانات وكيفية استخدامها",
        youtubeId: "dQw4w9WgXcQ",
        duration: "32:00"
      },
      {
        id: "csv3",
        title: "الجمل الشرطية والحلقات",
        description: "if, else, switch, for, while مع أمثلة تطبيقية",
        youtubeId: "dQw4w9WgXcQ",
        duration: "50:00"
      },
      {
        id: "csv4",
        title: "البرمجة كائنية التوجه OOP",
        description: "شرح مبسط للـ OOP مع أمثلة عملية بلغة C#",
        youtubeId: "dQw4w9WgXcQ",
        duration: "1:05:00"
      }
    ],
    exercises: [
      {
        id: "cse1",
        type: "code",
        title: "Hello World - أول برنامج",
        difficulty: "easy",
        description: "اكتب برنامج يطبع 'مرحباً بالعالم' على الشاشة",
        starterCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // اكتب الكود هنا\n        \n    }\n}',
        solutionCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("مرحباً بالعالم");\n    }\n}'
      },
      {
        id: "cse2",
        type: "code",
        title: "حاسبة بسيطة",
        difficulty: "easy",
        description: "اكتب برنامج يحسب مجموع رقمين ويطبع النتيجة",
        starterCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 15;\n        int b = 27;\n        // احسب المجموع واطبعه\n        \n    }\n}',
        solutionCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int a = 15;\n        int b = 27;\n        int sum = a + b;\n        Console.WriteLine("المجموع = " + sum);\n    }\n}'
      },
      {
        id: "cse3",
        type: "code",
        title: "فحص زوجي/فردي",
        difficulty: "easy",
        description: "اكتب برنامج يفحص إذا كان العدد زوجي أو فردي",
        starterCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int number = 42;\n        // افحص إذا كان العدد زوجي أو فردي\n        \n    }\n}',
        solutionCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int number = 42;\n        if (number % 2 == 0)\n            Console.WriteLine("العدد زوجي");\n        else\n            Console.WriteLine("العدد فردي");\n    }\n}'
      },
      {
        id: "cse4",
        type: "code",
        title: "مجموع الأعداد من 1 إلى N",
        difficulty: "medium",
        description: "اكتب برنامج يحسب مجموع الأعداد من 1 إلى 100 باستخدام حلقة for",
        starterCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 100;\n        int sum = 0;\n        // استخدم حلقة for لحساب المجموع\n        \n        Console.WriteLine("المجموع = " + sum);\n    }\n}',
        solutionCode: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        int n = 100;\n        int sum = 0;\n        for (int i = 1; i <= n; i++)\n        {\n            sum += i;\n        }\n        Console.WriteLine("المجموع = " + sum);\n    }\n}'
      },
      {
        id: "cse5",
        type: "quiz",
        title: "اختبار: أساسيات C#",
        difficulty: "easy",
        questions: [
          {
            question: "ما هو الناتج من: Console.WriteLine(10 / 3); ؟",
            options: ["3.33", "3", "3.0", "خطأ"],
            correct: 1
          },
          {
            question: "أي من التالي يعرّف متغير نصي بشكل صحيح؟",
            options: ["int name = \"أحمد\";", "string name = \"أحمد\";", "bool name = \"أحمد\";", "char name = \"أحمد\";"],
            correct: 1
          },
          {
            question: "ما الفرق بين == و = في C#؟",
            options: ["لا فرق بينهما", "== للمقارنة و = للتعيين", "= للمقارنة و == للتعيين", "كلاهما للمقارنة"],
            correct: 1
          },
          {
            question: "كم مرة تتكرر الحلقة: for(int i=0; i<5; i++) ؟",
            options: ["4 مرات", "5 مرات", "6 مرات", "لا نهائي"],
            correct: 1
          }
        ]
      }
    ],
    exams: [
      // ── شالون 899381 (الشامل - حتى 2023) ──
      {
        id: "csex-381-23s",
        year: "2023",
        semester: "صيف",
        title: "899381 — بجروت صيف 2023",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2023/6/ARB/899381.pdf",
        solutionLink: "https://arikb30.wordpress.com/wp-content/uploads/2023/10/2023-381.pdf"
      },
      {
        id: "csex-381-22s",
        year: "2022",
        semester: "صيف",
        title: "899381 — بجروت صيف 2022",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2022/6/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-22w",
        year: "2022",
        semester: "شتاء",
        title: "899381 — بجروت شتاء 2022",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2022/5/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-21s",
        year: "2021",
        semester: "صيف",
        title: "899381 — بجروت صيف 2021",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2021/6/ARB/899381.pdf",
        solutionLink: "https://kadman11.files.wordpress.com/2023/12/pitaron_899381_2021b.pdf"
      },
      {
        id: "csex-381-21w",
        year: "2021",
        semester: "شتاء",
        title: "899381 — بجروت شتاء 2021",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2021/5/ARB/899381.pdf",
        solutionLink: "https://kadman11.files.wordpress.com/2023/12/pitaron_899381_2021b.pdf"
      },
      {
        id: "csex-381-20s",
        year: "2020",
        semester: "صيف",
        title: "899381 — بجروت صيف 2020",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2020/6/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-19s",
        year: "2019",
        semester: "صيف",
        title: "899381 — بجروت صيف 2019",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2019/6/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-18s",
        year: "2018",
        semester: "صيف",
        title: "899381 — بجروت صيف 2018",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2018/6/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-17s",
        year: "2017",
        semester: "صيف",
        title: "899381 — بجروت صيف 2017",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2017/6/ARB/899381.pdf",
        solutionLink: "https://mabatl.co.il/bagruyot/899381%20c-sharp/solutions"
      },
      {
        id: "csex-381-videos",
        year: "فيديو",
        semester: "جميع السنوات",
        title: "899381 — حلول بالفيديو (يوتيوب)",
        examLink: "https://www.youtube.com/playlist?list=PLNLf5_3sUeLyV_iDPDekuJ2OkMv9TvLph",
        solutionLink: "https://www.youtube.com/playlist?list=PLNLf5_3sUeLyV_iDPDekuJ2OkMv9TvLph"
      },

      // ── شالون 899371 (أساسيات - من 2024) ──
      {
        id: "csex-371-25s",
        year: "2025",
        semester: "صيف",
        title: "899371 (أساسيات) — بجروت صيف 2025",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2025/6/ARB/899371.pdf",
        solutionLink: "https://sites.google.com/view/computer-science-nissan/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9C%D7%A4%D7%99-%D7%A9%D7%A0%D7%94"
      },
      {
        id: "csex-371-25w",
        year: "2025",
        semester: "شتاء",
        title: "899371 (أساسيات) — بجروت شتاء 2025",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2025/5/ARB/899371.pdf",
        solutionLink: "https://sites.google.com/view/computer-science-nissan/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9C%D7%A4%D7%99-%D7%A9%D7%A0%D7%94"
      },
      {
        id: "csex-371-24s",
        year: "2024",
        semester: "صيف",
        title: "899371 (أساسيات) — بجروت صيف 2024",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2024/6/ARB/899371.pdf",
        solutionLink: "https://sites.google.com/view/computer-science-nissan/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9C%D7%A4%D7%99-%D7%A9%D7%A0%D7%94"
      },
      {
        id: "csex-371-24w",
        year: "2024",
        semester: "شتاء",
        title: "899371 (أساسيات) — بجروت شتاء 2024",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2024/5/ARB/899371.pdf",
        solutionLink: "https://sites.google.com/view/computer-science-nissan/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9C%D7%A4%D7%99-%D7%A9%D7%A0%D7%94"
      },

      // ── شالون 899271 (بنى معطيات - من 2024) ──
      {
        id: "csex-271-25s",
        year: "2025",
        semester: "صيف",
        title: "899271 (بنى معطيات) — بجروت صيف 2025",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2025/6/ARB/899271.pdf",
        solutionLink: "https://kadman11.wordpress.com/%D7%9E%D7%93%D7%A2%D7%99-%D7%94%D7%9E%D7%97%D7%A9%D7%91-%D7%A9%D7%90%D7%9C%D7%95%D7%9F-899371-2/"
      },
      {
        id: "csex-271-25w",
        year: "2025",
        semester: "شتاء",
        title: "899271 (بنى معطيات) — بجروت شتاء 2025",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2025/5/ARB/899271.pdf",
        solutionLink: "https://sites.google.com/view/computer-science-nissan/%D7%A4%D7%AA%D7%A8%D7%95%D7%9F-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9C%D7%A4%D7%99-%D7%A9%D7%A0%D7%94"
      },
      {
        id: "csex-271-24s",
        year: "2024",
        semester: "صيف",
        title: "899271 (بنى معطيات) — بجروت صيف 2024",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2024/6/ARB/899271.pdf",
        solutionLink: "https://www.youtube.com/playlist?list=PLNLf5_3sUeLyV_iDPDekuJ2OkMv9TvLph"
      },
      {
        id: "csex-271-24w",
        year: "2024",
        semester: "شتاء",
        title: "899271 (بنى معطيات) — بجروت شتاء 2024",
        examLink: "https://meyda.education.gov.il/sheeloney_bagrut/2024/5/ARB/899271.pdf",
        solutionLink: "https://arikb30.wordpress.com/%D7%A4%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA-%D7%91%D7%92%D7%A8%D7%95%D7%AA-%D7%9E%D7%93%D7%A2%D7%99-%D7%94%D7%9E%D7%97%D7%A9%D7%91/"
      }
    ]
  },

  // ─── Android Subject ───
  android: {
    title: "تطوير تطبيقات أندرويد",
    description: "تعلم بناء تطبيقات أندرويد من الصفر باستخدام Android Studio",
    lessons: [
      {
        id: "an1",
        title: "مقدمة في تطوير أندرويد",
        description: "التعرف على نظام أندرويد وتنصيب Android Studio وإنشاء أول مشروع",
        tags: ["مقدمة", "Android Studio", "SDK"]
      },
      {
        id: "an2",
        title: "واجهات المستخدم - XML Layouts",
        description: "تصميم واجهات المستخدم باستخدام XML - LinearLayout, RelativeLayout, ConstraintLayout",
        tags: ["XML", "Layouts", "Views", "UI"]
      },
      {
        id: "an3",
        title: "الأنشطة ودورة الحياة - Activities",
        description: "فهم الأنشطة ودورة حياتها والتنقل بين الشاشات باستخدام Intent",
        tags: ["Activity", "Lifecycle", "Intent"]
      },
      {
        id: "an4",
        title: "القوائم - RecyclerView",
        description: "عرض قوائم البيانات باستخدام RecyclerView مع Adapter مخصص",
        tags: ["RecyclerView", "Adapter", "ViewHolder"]
      },
      {
        id: "an5",
        title: "تخزين البيانات - SharedPreferences & SQLite",
        description: "حفظ البيانات محلياً باستخدام SharedPreferences وقواعد بيانات SQLite",
        tags: ["SharedPreferences", "SQLite", "Room"]
      },
      {
        id: "an6",
        title: "الاتصال بالشبكة - APIs",
        description: "جلب البيانات من الإنترنت باستخدام Retrofit والتعامل مع JSON",
        tags: ["API", "Retrofit", "JSON", "HTTP"]
      }
    ],
    videos: [
      {
        id: "anv1",
        title: "بداية مع Android Studio",
        description: "تنصيب وإعداد بيئة التطوير وإنشاء أول تطبيق",
        youtubeId: "dQw4w9WgXcQ",
        duration: "38:00"
      },
      {
        id: "anv2",
        title: "تصميم واجهات المستخدم",
        description: "شرح عملي لتصميم شاشات التطبيق باستخدام XML",
        youtubeId: "dQw4w9WgXcQ",
        duration: "42:00"
      },
      {
        id: "anv3",
        title: "التنقل بين الشاشات",
        description: "Activities و Intents وتمرير البيانات بين الشاشات",
        youtubeId: "dQw4w9WgXcQ",
        duration: "35:00"
      }
    ],
    exercises: [
      {
        id: "ane1",
        type: "code",
        title: "تطبيق Hello Android",
        difficulty: "easy",
        description: "أنشئ تطبيق بسيط يعرض رسالة ترحيبية مع زر يغير النص عند الضغط عليه",
        starterCode: '// MainActivity.java\npublic class MainActivity extends AppCompatActivity {\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        \n        // اكتب الكود هنا\n        \n    }\n}',
        solutionCode: '// MainActivity.java\npublic class MainActivity extends AppCompatActivity {\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        \n        TextView textView = findViewById(R.id.textView);\n        Button button = findViewById(R.id.button);\n        \n        button.setOnClickListener(v -> {\n            textView.setText("مرحباً بك في أندرويد!");\n        });\n    }\n}'
      },
      {
        id: "ane2",
        type: "quiz",
        title: "اختبار: أساسيات أندرويد",
        difficulty: "easy",
        questions: [
          {
            question: "ما هو الملف المسؤول عن تصميم واجهة المستخدم في أندرويد؟",
            options: ["MainActivity.java", "AndroidManifest.xml", "activity_main.xml", "build.gradle"],
            correct: 2
          },
          {
            question: "ما هو الـ Intent في أندرويد؟",
            options: ["نوع بيانات", "رسالة للتنقل بين الأنشطة", "مكتبة خارجية", "أداة تصميم"],
            correct: 1
          },
          {
            question: "أي من التالي ليس من دورة حياة Activity؟",
            options: ["onCreate", "onStart", "onRun", "onDestroy"],
            correct: 2
          }
        ]
      }
    ],
    exams: [
      {
        id: "anex1",
        year: "2025",
        semester: "صيف",
        title: "امتحان بجروت أندرويد - صيف 2025",
        examLink: "#",
        solutionLink: "#"
      },
      {
        id: "anex2",
        year: "2024",
        semester: "صيف",
        title: "امتحان بجروت أندرويد - صيف 2024",
        examLink: "#",
        solutionLink: "#"
      },
      {
        id: "anex3",
        year: "2024",
        semester: "شتاء",
        title: "امتحان بجروت أندرويد - شتاء 2024",
        examLink: "#",
        solutionLink: "#"
      }
    ]
  },

  // ─── Automata Subject ───
  automata: {
    title: "نظرية الأوتوماتا",
    description: "فهم أساسيات نظرية الحوسبة — الأوتوماتا المنتهية، التعابير النمطية، وآلات تورنغ",
    lessons: [
      {
        id: "au1",
        title: "مقدمة في نظرية الأوتوماتا",
        description: "ما هي نظرية الأوتوماتا؟ المفاهيم الأساسية: الأبجدية، الكلمات، اللغات",
        tags: ["مقدمة", "أبجدية", "لغات"]
      },
      {
        id: "au2",
        title: "الأوتوماتا المنتهية الحتمية - DFA",
        description: "تعريف DFA، رسم مخططات الحالات، وتحديد اللغة المقبولة",
        tags: ["DFA", "مخطط حالات", "قبول"]
      },
      {
        id: "au3",
        title: "الأوتوماتا المنتهية غير الحتمية - NFA",
        description: "الفرق بين DFA و NFA، وتحويل NFA إلى DFA",
        tags: ["NFA", "تحويل", "ε-transitions"]
      },
      {
        id: "au4",
        title: "التعابير النمطية - Regular Expressions",
        description: "بناء تعابير نمطية وتحويلها إلى أوتوماتا والعكس",
        tags: ["Regex", "تحويل", "عمليات"]
      },
      {
        id: "au5",
        title: "قواعد اللغات الحرة السياق - CFG",
        description: "تعريف CFG، اشتقاق كلمات، أشجار الاشتقاق",
        tags: ["CFG", "اشتقاق", "أشجار"]
      },
      {
        id: "au6",
        title: "أوتوماتا الدفع لأسفل - PDA",
        description: "تعريف PDA والعلاقة مع CFG",
        tags: ["PDA", "مكدس", "CFG"]
      },
      {
        id: "au7",
        title: "آلة تورنغ - Turing Machine",
        description: "تعريف آلة تورنغ، أمثلة عملية، والقابلية للحساب",
        tags: ["Turing Machine", "حوسبة", "قابلية الحل"]
      }
    ],
    videos: [
      {
        id: "auv1",
        title: "مقدمة في نظرية الأوتوماتا",
        description: "شرح المفاهيم الأساسية بطريقة مبسطة",
        youtubeId: "dQw4w9WgXcQ",
        duration: "30:00"
      },
      {
        id: "auv2",
        title: "DFA - شرح مفصل مع أمثلة",
        description: "كيفية بناء DFA وتحديد اللغة المقبولة",
        youtubeId: "dQw4w9WgXcQ",
        duration: "45:00"
      },
      {
        id: "auv3",
        title: "تحويل NFA إلى DFA",
        description: "خطوات التحويل مع أمثلة عملية متعددة",
        youtubeId: "dQw4w9WgXcQ",
        duration: "40:00"
      },
      {
        id: "auv4",
        title: "آلة تورنغ - شرح مبسط",
        description: "فهم آلة تورنغ وأهميتها في نظرية الحوسبة",
        youtubeId: "dQw4w9WgXcQ",
        duration: "55:00"
      }
    ],
    exercises: [
      {
        id: "aue1",
        type: "quiz",
        title: "اختبار: DFA و NFA",
        difficulty: "medium",
        questions: [
          {
            question: "ما الفرق الأساسي بين DFA و NFA؟",
            options: [
              "DFA أسرع من NFA",
              "في NFA يمكن أن يكون هناك أكثر من انتقال لنفس الرمز من نفس الحالة",
              "NFA لا يقبل لغات نمطية",
              "DFA يحتوي على مكدس"
            ],
            correct: 1
          },
          {
            question: "هل كل لغة يقبلها NFA يمكن أن يقبلها DFA؟",
            options: ["نعم دائماً", "لا أبداً", "فقط اللغات المنتهية", "فقط إذا لم يكن هناك ε-transitions"],
            correct: 0
          },
          {
            question: "ما هو ε-transition؟",
            options: [
              "انتقال يستهلك رمز خاص",
              "انتقال بدون استهلاك أي رمز من المدخلات",
              "انتقال إلى حالة القبول",
              "انتقال يعيد للحالة الأولية"
            ],
            correct: 1
          },
          {
            question: "ما هو عدد الحالات القصوى في DFA المحوّل من NFA يحتوي على n حالة؟",
            options: ["n", "2n", "n²", "2^n"],
            correct: 3
          }
        ]
      },
      {
        id: "aue2",
        type: "quiz",
        title: "اختبار: تعابير نمطية و CFG",
        difficulty: "hard",
        questions: [
          {
            question: "أي من اللغات التالية ليست نمطية (Regular)؟",
            options: [
              "{ aⁿbⁿ | n ≥ 0 }",
              "{ w | w تحتوي على عدد زوجي من a }",
              "{ w | طول w يقبل القسمة على 3 }",
              "{ a, b }*"
            ],
            correct: 0
          },
          {
            question: "ما هي العملية التي لا تحافظ على نمطية اللغة؟",
            options: ["الاتحاد", "التقاطع", "المتمم", "كلها تحافظ على النمطية"],
            correct: 3
          },
          {
            question: "ما هو Pumping Lemma يستخدم لـ؟",
            options: [
              "إثبات أن لغة نمطية",
              "إثبات أن لغة ليست نمطية",
              "تحويل NFA إلى DFA",
              "بناء CFG"
            ],
            correct: 1
          }
        ]
      }
    ],
    exams: [
      {
        id: "auex1",
        year: "2025",
        semester: "صيف",
        title: "امتحان بجروت أوتوماتا - صيف 2025",
        examLink: "#",
        solutionLink: "#"
      },
      {
        id: "auex2",
        year: "2024",
        semester: "صيف",
        title: "امتحان بجروت أوتوماتا - صيف 2024",
        examLink: "#",
        solutionLink: "#"
      },
      {
        id: "auex3",
        year: "2024",
        semester: "شتاء",
        title: "امتحان بجروت أوتوماتا - شتاء 2024",
        examLink: "#",
        solutionLink: "#"
      },
      {
        id: "auex4",
        year: "2023",
        semester: "صيف",
        title: "امتحان بجروت أوتوماتا - صيف 2023",
        examLink: "#",
        solutionLink: "#"
      }
    ]
  }
};

// ─── Data Access Functions ───

function getSiteData() {
  const stored = localStorage.getItem('classroomData');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch(e) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveSiteData(data) {
  localStorage.setItem('classroomData', JSON.stringify(data));
}

function resetToDefaults() {
  localStorage.removeItem('classroomData');
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function getSubjectData(subject) {
  const data = getSiteData();
  return data[subject] || null;
}

function exportData() {
  const data = getSiteData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'classroom-data-backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        saveSiteData(data);
        resolve(data);
      } catch(err) {
        reject('ملف غير صالح');
      }
    };
    reader.readAsText(file);
  });
}

// ─── Generate Unique IDs ───
function generateId() {
  return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
}
