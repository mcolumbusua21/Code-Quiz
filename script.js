var startBtn = document.querySelector("#start");
var startPrompt = document.querySelector("#heading");
var questionPrompt = document.querySelector("#question-prompt");
var timer = document.querySelector("#timer");
var time = 80;
var questionTitle = document.querySelector("#questions-text")
var answerContainer = document.querySelector("#answers")
var currentIndex = 0

function startGame() {
  timerCount = 80;
}

var questions = [
  { question: "Is the sky blue?", options: ["True", "False"], answers: "True"},

  { question: "What do dogs eat?",
    options: ["Dog food", "Cat food", "Pasta", "Pack rats"],
    answers: "Dog food",
  },
  { question: "How long is class?",
    options: ["3 1/2 hours", "2 hours", "14 hours", "4 1/2 hours"],
    answers: "4 1/2hours",
  },

  { question: "Is Tucson in California?",
    options: ["True", "False"],
    answers: "False",
  },

  { question: "How many pets do I have?",
    options: ["3", "2", "0", "5"],
    answers: "0",
  },
];

startBtn.addEventListener("click", function (e) {
    // e.preventDefault();
  startPrompt.style.display = "none";
  timer.style.display = "block";
 renderQuestion()
});

function renderQuestion(){
    questionTitle.innerHTML= questions[currentIndex].question;

    for (var burrito of questions[currentIndex].options) {
       var btn = document.createElement("button")
       btn.textContent = burrito
       answerContainer.append(btn)
    }
}

//make function to handle clicking an answer button
//in that function, evaluate if true/false
//adjust the score and timer approriately
//increment current index
//call render question
