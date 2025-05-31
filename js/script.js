
  const quizData = {
    "Javascript": [
      { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
         "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
         { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
          "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
          { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
            "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
            { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
              "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." }
          
         ],
    "Angular Basic": [
      { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
        "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
        { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
         "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
         { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
           "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
           { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
             "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." }
         
    ],
    "React.js Advance": [
      { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
        "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
        { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
         "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
         { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
           "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
           { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
             "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." }
    ],
    "Flutter": [
      { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
        "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
        { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
         "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
         { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
           "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." },
           { question: "Which method can be used to round a number to the nearest integer in JavaScript?", options: ["This method rounds a number up to the nearest integer, regardless of its decimal part.",
             "This method rounds a number down to the nearest integer, ignoring the decimal part.", " This method rounds a number to the nearest integer based on its decimal value.", "This method generates a random number between 0 and 1, without rounding."], answer: "This method rounds a number down to the nearest integer, ignoring the decimal part." }
    ]
  };

  let selectedTopic = "";
  let currentTopic = "";
  let questions = [];
  let currentQuestionIndex = 0;
  let correct = 0, wrong = 0, unanswered = 0;
  let selectedAnswer = "";
  let timer;
  let timeLeft = 10;

  const nameInput = document.getElementById('name');
  const startPage = document.getElementById('start-page');
  const quizPage = document.getElementById('quiz-page');
  const resultPage = document.getElementById('result-page');
  const congratsPage = document.getElementById('congrats-page');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const timerEl = document.getElementById('timer');
  const nextBtn = document.getElementById('nextBtn');
  const skipBtn = document.getElementById('skipBtn');
  const progressFill = document.getElementById('progress-fill');
  const exitBtn = document.getElementById('exitBtn');
  const userNameSpan = document.getElementById('user-name');
  const finalScoreSpan = document.getElementById('final-score');
  const correctCountSpan = document.getElementById('correct-count');
  const wrongCountSpan = document.getElementById('wrong-count');
  const unansweredCountSpan = document.getElementById('unanswered-count');
  const progressCircle = document.getElementById('progress-circle');
  const progressText = document.getElementById('progress-text');

  function startTopic(topic) {
  const userName = nameInput.value.trim();
  if (!userName) {
    alert("Please enter your full name before selecting a topic.");
    return;
  }
  selectedTopic = topic;
  checkStartButtonState();
}

function openRulesModal() {
  document.getElementById("rulesModal").style.display = "block";
}

function closeRulesModal() {
  document.getElementById("rulesModal").style.display = "none";
}

// Optional: Close modal when clicking outside the content
window.onclick = function(event) {
  const modal = document.getElementById("rulesModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

  function checkStartButtonState() {
    const userName = nameInput.value.trim();
    document.getElementById('startQuizBtn').disabled = !(userName && selectedTopic);
  }

  function startQuiz() {
    const userName = nameInput.value.trim();
    currentTopic = selectedTopic;
    questions = quizData[currentTopic];
    currentQuestionIndex = 0;
    correct = 0; wrong = 0; unanswered = 0;
    selectedAnswer = "";
    timeLeft = 10;

    startPage.style.display = "none";
    resultPage.style.display = "none";
    quizPage.style.display = "block";
    exitBtn.style.display = "block";

    userNameSpan.textContent = userName;
    document.getElementById('congrats-user-name').textContent = userName;

    loadQuestion();
  }

  function loadQuestion() {
    clearInterval(timer);
    selectedAnswer = "";
    timeLeft = 10;
    nextBtn.disabled = true;

    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        selectedAnswer = opt;
        Array.from(optionsEl.children).forEach(b => b.style.backgroundColor = "#F3F3E9");
        btn.style.backgroundColor = "#B92B5D";
        btn.style.color = "white";
        nextBtn.disabled = false;
      };
      optionsEl.appendChild(btn);
    });

    skipBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';

    updateProgress();

    timerEl.textContent = `Time left: ${timeLeft}s`;
    timerEl.style.display = "block";

    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        unanswered++;
        goToNextQuestion();
      }
    }, 1000);
  }

  function submitAnswer() {
    clearInterval(timer);
    if (selectedAnswer === "") {
      unanswered++;
    } else if (selectedAnswer === questions[currentQuestionIndex].answer) {
      correct++;
    } else {
      wrong++;
    }
    goToNextQuestion();
  }

  function skipQuestion() {
    clearInterval(timer);
    unanswered++;
    goToNextQuestion();
  }

  function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      showCongratulations();
    } else {
      loadQuestion();
    }
  }

  function updateProgress() {
    const percent = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${percent}%`;
  }

  function showCongratulations() {
  quizPage.style.display = "none";
  const percent = Math.round((correct / questions.length) * 100);

  if (percent >= 80) {
    congratsPage.style.display = "block";
    document.getElementById('congrats-final-score').textContent = `${correct} / ${questions.length}`;
    document.getElementById('congrats-correct-count').textContent = correct;
    document.getElementById('congrats-wrong-count').textContent = wrong;
    document.getElementById('congrats-unanswered-count').textContent = unanswered;

    let deg = 0;
    const targetDeg = percent * 3.6;
    const circle = document.getElementById('congrats-progress-circle');
    const text = document.getElementById('congrats-progress-text');

    const interval = setInterval(() => {
      if (deg >= targetDeg) {
        clearInterval(interval);
        text.textContent = `${percent}%`;
      } else {
        deg += 4;
        if (deg > targetDeg) deg = targetDeg;
        circle.style.background = `conic-gradient(#F3F3E9 ${deg}deg, #ddd ${deg}deg)`;
        text.textContent = `${Math.round(deg / 3.6)}%`;
      }
    }, 15);
  } else {
    showPracticePage(percent);
  }
}

function showPracticePage(percent) {
  resultPage.style.display = "block";
  finalScoreSpan.textContent = `${correct} / ${questions.length}`;
  correctCountSpan.textContent = correct;
  wrongCountSpan.textContent = wrong;
  unansweredCountSpan.textContent = unanswered;

  let deg = 0;
  const targetDeg = percent * 3.6;

  const interval = setInterval(() => {
    if (deg >= targetDeg) {
      clearInterval(interval);
      progressText.textContent = `${percent}%`;
    } else {
      deg += 4;
      if (deg > targetDeg) deg = targetDeg;
      progressCircle.style.background = `conic-gradient(#F3F3E9 ${deg}deg, #ddd ${deg}deg)`;
      progressText.textContent = `${Math.round(deg / 3.6)}%`;
    }
  }, 15);
}


  function resetQuiz() {
    clearInterval(timer);
    currentTopic = "";
    selectedTopic = "";
    questions = [];
    currentQuestionIndex = 0;
    correct = 0; wrong = 0; unanswered = 0;
    selectedAnswer = "";
    timeLeft = 10;
    nameInput.value = "";
    exitBtn.style.display = "none";
    resultPage.style.display = "none";
    congratsPage.style.display = "none";
    quizPage.style.display = "none";
    startPage.style.display = "block";
    checkStartButtonState();
  }

  function exitQuiz() {
    if (confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
      resetQuiz();
    }
  }