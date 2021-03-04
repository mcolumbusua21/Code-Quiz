var startBtn = document.querySelector("#start");
var startPrompt = document.querySelector("#heading");
var questionPrompt = document.querySelector("#question-prompt");
var timer = document.querySelector("#timer");
var time = 80;
var questionTitle = document.querySelector("#questions-text")
var answerContainer = document.querySelector("#answers")
var currentIndex = 0
var scores = 0
var playerInitials = document.querySelector("#playerInitials");
var scoresArray;
// playerInitials.value = '';


var questions = [
    { question: "Is the sky blue?", options: ["True", "False"], answers: "True"},
    
    { question: "What do dogs eat?",
    options: ["Dog food", "Cat food", "Pasta", "Pack rats"],
    answers: "Dog food",
},
{   question: "How long is class?",
    options: ["3 1/2 hours", "2 hours", "14 hours", "4 1/2 hours"],
    answers: "4 1/2 hours",
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

var interval;
function timerStart (count = time){
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(timerFunction, 1000);
    function timerFunction (){
        if (count ===0){
            clearInterval(interval);
            document.getElementById("timer-count").innerHTML = "Times Up. Try Again";
            return;
        }
        count--;
        time--;
        document.getElementById("timer-count").innerHTML = count
    }
}

startBtn.addEventListener("click", function (e) {
    // e.preventDefault();
    timerStart()
    startPrompt.style.display = "none";
    timer.style.display = "block";
    renderQuestion()
}
);



function renderQuestion(){
    if (currentIndex < questions.length) {
        questionTitle.innerHTML= questions[currentIndex].question;
        answerContainer.innerHTML = ""
    
        for (var burrito of questions[currentIndex].options) {
           var btn = document.createElement("button")
           btn.textContent = burrito
           btn.value = burrito
           btn.addEventListener("click", buttonClick)
           answerContainer.append(btn)
        }
        
    } else if (currentIndex === questions.length) {
        if (questions == undefined) {
            clearInterval(interval);
            // clearInterval(timeLimit);
            showEndGame();
            return;
        }
        
    }

    
}
function buttonClick(e){
    e.preventDefault();
    var isCorrect = questions[currentIndex].answers === e.target.value;
    console.log(isCorrect, e.target.value, questions[currentIndex].answers);
    if (isCorrect){
        scores++;
    }
    else {
        time = time - 10;
        timerStart(time) 
    }
    currentIndex++;
    renderQuestion()
}





