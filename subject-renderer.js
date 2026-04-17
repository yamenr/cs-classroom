/* ========================================
   CS Classroom - Subject Page Renderer
   Dynamically renders subject page content
   from the data store (localStorage/defaults)
   ======================================== */

function renderSubjectPage(subjectKey) {
  const data = getSubjectData(subjectKey);
  if (!data) return;

  renderLessons(data.lessons);
  renderVideos(data.videos);
  renderExercises(data.exercises, subjectKey);
  renderExams(data.exams);

  // Show first tab by default
  const firstTab = document.querySelector('.section-tabs button');
  if (firstTab) firstTab.click();
}

// ─── Lessons ───
function renderLessons(lessons) {
  const container = document.getElementById('lessons-content');
  if (!container) return;

  if (lessons.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-light); padding:3rem;">لا توجد دروس بعد</p>';
    return;
  }

  let html = '<div class="lessons-list">';
  lessons.forEach((lesson, i) => {
    html += `
      <div class="lesson-card">
        <div class="lesson-num">${i + 1}</div>
        <div>
          <h4>${esc(lesson.title)}</h4>
          <p>${esc(lesson.description)}</p>
          ${lesson.tags && lesson.tags.length ? `
            <div class="lesson-tags">
              ${lesson.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ─── Videos ───
function renderVideos(videos) {
  const container = document.getElementById('videos-content');
  if (!container) return;

  if (videos.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-light); padding:3rem;">لا توجد فيديوهات بعد</p>';
    return;
  }

  let html = '<div class="video-grid">';
  videos.forEach(video => {
    const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
    html += `
      <div class="video-card">
        <a href="https://www.youtube.com/watch?v=${video.youtubeId}" target="_blank" rel="noopener">
          <div class="video-placeholder">
            <img src="${thumbUrl}" alt="${esc(video.title)}" onerror="this.style.display='none'; this.parentElement.textContent='▶';">
            <span class="video-duration">${esc(video.duration)}</span>
          </div>
        </a>
        <div class="video-info">
          <h4><a href="https://www.youtube.com/watch?v=${video.youtubeId}" target="_blank" rel="noopener">${esc(video.title)}</a></h4>
          <p>${esc(video.description)}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ─── Exercises ───
function renderExercises(exercises, subjectKey) {
  const container = document.getElementById('exercises-content');
  if (!container) return;

  if (exercises.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-light); padding:3rem;">لا توجد تمارين بعد</p>';
    return;
  }

  let html = '';
  exercises.forEach((ex, i) => {
    const diffLabel = ex.difficulty === 'easy' ? 'سهل' : ex.difficulty === 'medium' ? 'متوسط' : 'صعب';
    const diffClass = 'diff-' + ex.difficulty;

    if (ex.type === 'code') {
      const editorId = `editor-${subjectKey}-${i}`;
      const outputId = `output-${subjectKey}-${i}`;
      const defaultCode = ex.starterCode || '';

      html += `
        <div class="exercise-card">
          <h4>
            ${esc(ex.title)}
            <span class="exercise-difficulty ${diffClass}">${diffLabel}</span>
          </h4>
          <p class="description">${esc(ex.description)}</p>
          <div class="code-editor-wrapper">
            <div class="code-editor-header">
              <span>محرر الأكواد</span>
              <span>💡</span>
            </div>
            <textarea class="code-editor" id="${editorId}">${esc(defaultCode)}</textarea>
            <div class="code-output" id="${outputId}">// المخرجات ستظهر هنا...</div>
          </div>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button class="btn-run" onclick="runCode('${editorId}', '${outputId}')">▶ تشغيل</button>
            <button class="btn-reset" onclick="resetCode('${editorId}', '${outputId}', \`${escBacktick(defaultCode)}\`)">↺ إعادة تعيين</button>
            ${ex.solutionCode ? `<button class="btn btn-outline" onclick="toggleSolution('sol-${subjectKey}-${i}')">💡 عرض الحل</button>` : ''}
          </div>
          ${ex.solutionCode ? `
            <div id="sol-${subjectKey}-${i}" style="display:none; margin-top:1rem;">
              <div class="code-editor-wrapper">
                <div class="code-editor-header"><span>الحل النموذجي</span><span>✓</span></div>
                <pre style="background:#0f172a; color:#e2e8f0; padding:1rem; font-family:monospace; direction:ltr; text-align:left; line-height:1.6; margin:0; white-space:pre-wrap;">${esc(ex.solutionCode)}</pre>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    } else if (ex.type === 'quiz') {
      const quizId = `quiz-${subjectKey}-${i}`;
      html += `
        <div class="exercise-card">
          <h4>
            ${esc(ex.title)}
            <span class="exercise-difficulty ${diffClass}">${diffLabel}</span>
          </h4>
          <div class="quiz-container" id="${quizId}">
      `;

      if (ex.questions) {
        ex.questions.forEach((q, qi) => {
          const qId = `${quizId}-q${qi}`;
          html += `
            <div class="quiz-question" id="${qId}" data-answered="false">
              <h4>سؤال ${qi + 1}: ${esc(q.question)}</h4>
              <div class="quiz-options">
          `;
          const letters = ['أ', 'ب', 'ج', 'د'];
          q.options.forEach((opt, oi) => {
            html += `
              <div class="quiz-option" onclick="selectOption(this, document.getElementById('${qId}'), ${q.correct})">
                <span class="option-letter">${letters[oi]}</span>
                <span>${esc(opt)}</span>
              </div>
            `;
          });
          html += `
              </div>
              <div class="quiz-feedback"></div>
            </div>
          `;
        });
      }

      html += `
            <div class="quiz-score">
              <div class="score-number"></div>
              <p>إجابات صحيحة</p>
            </div>
            <div style="text-align:center; margin-top:1rem;">
              <button class="btn-check-quiz" onclick="checkQuiz('${quizId}')">📊 عرض النتيجة</button>
              <button class="btn btn-outline" onclick="resetQuiz('${quizId}')" style="margin-right:0.5rem;">↺ إعادة المحاولة</button>
            </div>
          </div>
        </div>
      `;
    }
  });
  container.innerHTML = html;
}

// ─── Exams ───
function renderExams(exams) {
  const container = document.getElementById('exams-content');
  if (!container) return;

  if (exams.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:var(--text-light); padding:3rem;">لا توجد امتحانات بعد</p>';
    return;
  }

  let html = '<div class="exams-grid">';
  exams.forEach(exam => {
    html += `
      <div class="exam-card">
        <div class="exam-year">${esc(exam.year)}</div>
        <h4>${esc(exam.title)}</h4>
        <div class="exam-meta">${esc(exam.semester)} ${esc(exam.year)}</div>
        <div class="exam-links">
          <a href="${esc(exam.examLink)}" target="_blank">📄 الامتحان</a>
          <a href="${esc(exam.solutionLink)}" target="_blank">✅ الحل</a>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ─── Helpers ───
function esc(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function escBacktick(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}
