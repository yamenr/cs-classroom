/* ========================================
   CS Classroom - Shared JavaScript
   ======================================== */

// --- Mobile Menu Toggle ---
function toggleMenu() {
  document.querySelector('.navbar-links').classList.toggle('open');
}

// --- Tab Switching ---
function switchTab(tabId, btn) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  // Deactivate all tab buttons
  document.querySelectorAll('.section-tabs button').forEach(b => b.classList.remove('active'));
  // Show selected tab
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

// --- Quiz System ---
function selectOption(optionEl, questionEl, correctIndex) {
  // If already answered, ignore
  if (questionEl.dataset.answered === 'true') return;

  const options = questionEl.querySelectorAll('.quiz-option');
  const feedback = questionEl.querySelector('.quiz-feedback');
  const selectedIndex = Array.from(options).indexOf(optionEl);

  questionEl.dataset.answered = 'true';

  if (selectedIndex === correctIndex) {
    optionEl.classList.add('correct');
    feedback.textContent = '✓ إجابة صحيحة! أحسنت';
    feedback.className = 'quiz-feedback show correct';
  } else {
    optionEl.classList.add('wrong');
    options[correctIndex].classList.add('correct');
    feedback.textContent = '✗ إجابة خاطئة. الإجابة الصحيحة موضحة باللون الأخضر';
    feedback.className = 'quiz-feedback show wrong';
  }
}

function checkQuiz(quizId) {
  const quiz = document.getElementById(quizId);
  const questions = quiz.querySelectorAll('.quiz-question');
  let correct = 0;
  let total = questions.length;
  let allAnswered = true;

  questions.forEach(q => {
    if (q.dataset.answered !== 'true') {
      allAnswered = false;
    } else {
      const options = q.querySelectorAll('.quiz-option');
      options.forEach(opt => {
        if (opt.classList.contains('correct') && !opt.classList.contains('wrong')) {
          // Check if this was the user's selection (not just the correct answer revealed)
          if (opt === q.querySelector('.quiz-option.correct:not(.wrong)') && !q.querySelector('.quiz-option.wrong')) {
            correct++;
          }
        }
      });
    }
  });

  if (!allAnswered) {
    alert('الرجاء الإجابة على جميع الأسئلة أولاً');
    return;
  }

  const scoreEl = quiz.querySelector('.quiz-score');
  const scoreNum = scoreEl.querySelector('.score-number');
  scoreNum.textContent = correct + ' / ' + total;
  scoreEl.classList.add('show');
}

function resetQuiz(quizId) {
  const quiz = document.getElementById(quizId);
  const questions = quiz.querySelectorAll('.quiz-question');

  questions.forEach(q => {
    q.dataset.answered = 'false';
    q.querySelectorAll('.quiz-option').forEach(opt => {
      opt.classList.remove('correct', 'wrong');
    });
    const feedback = q.querySelector('.quiz-feedback');
    feedback.className = 'quiz-feedback';
    feedback.textContent = '';
  });

  const scoreEl = quiz.querySelector('.quiz-score');
  scoreEl.classList.remove('show');
}

// --- Code Editor (Simulated) ---
function runCode(editorId, outputId) {
  const editor = document.getElementById(editorId);
  const output = document.getElementById(outputId);
  const code = editor.value;

  output.textContent = '⏳ جاري التنفيذ...\n';

  setTimeout(() => {
    // Simple simulation - look for Console.WriteLine or print patterns
    let result = '';
    const lines = code.split('\n');

    // C# Console.WriteLine simulation
    const writeLineRegex = /Console\.WriteLine\s*\(\s*("([^"]*)"|\$"([^"]*)"|(.*?))\s*\)/g;
    let match;
    let hasOutput = false;

    for (const line of lines) {
      writeLineRegex.lastIndex = 0;
      while ((match = writeLineRegex.exec(line)) !== null) {
        hasOutput = true;
        result += (match[2] || match[3] || match[4] || '') + '\n';
      }
    }

    // Python print simulation
    const printRegex = /print\s*\(\s*["']([^"']*)["']\s*\)/g;
    for (const line of lines) {
      printRegex.lastIndex = 0;
      while ((match = printRegex.exec(line)) !== null) {
        hasOutput = true;
        result += match[1] + '\n';
      }
    }

    // Java/Kotlin System.out.println
    const sysOutRegex = /System\.out\.println\s*\(\s*"([^"]*)"\s*\)/g;
    for (const line of lines) {
      sysOutRegex.lastIndex = 0;
      while ((match = sysOutRegex.exec(line)) !== null) {
        hasOutput = true;
        result += match[1] + '\n';
      }
    }

    // Log.d for Android
    const logRegex = /Log\.d\s*\(\s*"[^"]*"\s*,\s*"([^"]*)"\s*\)/g;
    for (const line of lines) {
      logRegex.lastIndex = 0;
      while ((match = logRegex.exec(line)) !== null) {
        hasOutput = true;
        result += match[1] + '\n';
      }
    }

    if (hasOutput) {
      output.textContent = '✓ Output:\n' + result;
    } else if (code.trim() === '') {
      output.textContent = '⚠ لا يوجد كود للتنفيذ';
    } else {
      output.textContent = '✓ تم التنفيذ بنجاح (لا يوجد مخرجات نصية)\n\n💡 تلميح: استخدم Console.WriteLine() لطباعة النتائج';
    }
  }, 800);
}

function resetCode(editorId, outputId, defaultCode) {
  document.getElementById(editorId).value = defaultCode;
  document.getElementById(outputId).textContent = '// المخرجات ستظهر هنا...';
}

// --- Handle Tab Key in Code Editor ---
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.code-editor').forEach(editor => {
    editor.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
      }
    });
  });
});

// --- Collapsible Solution ---
function toggleSolution(solutionId) {
  const el = document.getElementById(solutionId);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
