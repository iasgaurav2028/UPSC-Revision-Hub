// ╔══════════════════════════════════════════════════════════╗
// ║  PRACTICE ENGINE                                            ║
// ║                                                              ║
// ║  Each topic has ONE unified 20-question set in QUIZ_DATA.    ║
// ║  Individual questions can be phrased as UPSC-style           ║
// ║  statement-based, pair-matching, assertion-reason, etc. —    ║
// ║  but they're all rendered the same way (pick one of 4        ║
// ║  options), all mixed together in a single list, in a         ║
// ║  single session. There are no separate                       ║
// ║  flashcard/true-false/fill-blank/match modes.                ║
// ╚══════════════════════════════════════════════════════════╝
let quizState = { index: 0, answers: [], questions: [] };
let currentPracticeNodeId = null;

function openQuiz(nodeId) {
  const quiz = QUIZ_DATA[nodeId];
  if (!quiz || !quiz.questions || quiz.questions.length === 0) return;
  currentPracticeNodeId = nodeId;
  quizState = {
    index: 0,
    answers: new Array(quiz.questions.length).fill(null),
    questions: quiz.questions,
  };
  document.getElementById("quizTitle").textContent = quiz.title.toUpperCase();
  document.getElementById("quizOverlay").classList.add("active");
  document.getElementById("quizFooter").style.display = "flex";
  renderQuizQuestion();
}

function closeQuiz() {
  document.getElementById("quizOverlay").classList.remove("active");
}

function renderQuizQuestion() {
  const { index, questions, answers } = quizState;
  const footer = document.getElementById("quizFooter");
  const progressFill = document.getElementById("quizProgressFill");

  if (index >= questions.length) {
    renderQuizResult();
    return;
  }

  footer.style.display = "flex";
  progressFill.style.width = (index / questions.length) * 100 + "%";

  const q = questions[index];
  const selected = answers[index];
  const letters = ["A", "B", "C", "D"];

  let html = `<div class="quiz-qnum">QUESTION ${index + 1} OF ${questions.length}</div>`;
  html += `<div class="quiz-question">${esc(q.q)}</div>`;
  q.options.forEach((opt, i) => {
    let cls = "quiz-option";
    if (selected !== null) {
      if (i === q.correct) cls += " correct";
      else if (i === selected) cls += " incorrect";
    } else if (i === selected) {
      cls += " selected";
    }
    html += `<div class="${cls}" data-optindex="${i}">
      <span class="quiz-option-letter">${letters[i]}.</span>
      <span>${esc(opt)}</span>
    </div>`;
  });
  if (selected !== null) {
    html += `<div class="quiz-explain active">💡 ${esc(q.explain)}</div>`;
  }

  document.getElementById("quizBody").innerHTML = html;

  document.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      if (quizState.answers[quizState.index] !== null) return;
      const i = parseInt(opt.getAttribute("data-optindex"), 10);
      quizState.answers[quizState.index] = i;
      renderQuizQuestion();
    });
  });

  document.getElementById("quizPrevBtn").disabled = index === 0;
  document.getElementById("quizNextBtn").textContent =
    index === questions.length - 1 ? "Finish ▶" : "Next ▶";
  document.getElementById("quizNextBtn").disabled = selected === null;

  const score = answers.filter((a, i) => a === questions[i].correct).length;
  document.getElementById("quizScoreLabel").textContent =
    `Score: ${score}/${questions.length}`;
}

function renderQuizResult() {
  const { questions, answers } = quizState;
  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const pct = Math.round((score / questions.length) * 100);
  document.getElementById("quizProgressFill").style.width = "100%";
  document.getElementById("quizFooter").style.display = "none";
  document.getElementById("quizBody").innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-score">${score}/${questions.length}</div>
      <div class="quiz-result-label">${pct}% Score</div>
      <button class="quiz-retry-btn" id="quizRetryBtn">Retry</button>
    </div>`;
  document.getElementById("quizRetryBtn").addEventListener("click", () => {
    openQuiz(currentPracticeNodeId);
  });

  const node = findNode(TREE_DATA, currentPracticeNodeId);
  if (node)
    logRevisionEvent(node, `quiz: ${score}/${questions.length} (${pct}%)`);
}

document.getElementById("quizPrevBtn").addEventListener("click", () => {
  if (quizState.index > 0) {
    quizState.index--;
    renderQuizQuestion();
  }
});
document.getElementById("quizNextBtn").addEventListener("click", () => {
  quizState.index++;
  renderQuizQuestion();
});
document.getElementById("quizClose").addEventListener("click", closeQuiz);
document.getElementById("quizOverlay").addEventListener("click", (e) => {
  if (e.target.id === "quizOverlay") closeQuiz();
});
