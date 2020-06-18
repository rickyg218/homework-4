var questions = [
    {
        question: "What's My name?",
        selections: [
            "Jack",
            "Enrique",
            "mark"
        ],
        answer: "Jack"
    },
    {
        question: "what does HTML mean?",
        selections: [
            "Hello to men likeme ",
            "Hyper text mark-up language",
            "Higher scale language",

        ],
        answer: "Hyper text mark-up language"
    },
    {
        question: "what does css mean?",
        selections: [
            "cascade style sheet",
            "credits and sheets",
            "cascade sheet set"
        ],
        answer: "cascade style sheet",
    },
    {
        question: " what is javascript?",
        selections: [
            "the building blocks of the web",
            "java with a script attached to it",
            "the language of the web",
        ],
        answer: "the language of the web",
    }
]
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var score = 0
var time = 60
var counter = 0

function start() {
    questionEl.textContent = questions[counter].question;
    console.log("hello");
    console.log(questions[counter]);
    questions[counter].selections.forEach(function (selection) {
        var btn = document.createElement("button");
        btn.addEventListener("click", answer)
        btn.textContent = selection
        answersEl.appendChild(btn);
    })
}




document.getElementById("startBtn").addEventListener("click", start);



function answer() {
    console.log(Object.values(questions[0]));;
    if (this.textContent === questions[counter].answer) {
        counter++
        console.log(counter);
        score++
    }

    else {
        time -= 5;
        console.log(time);
    }

    if (counter === questions.length) {
        alert("the game is over");

    }
    else {
        currentQuestion();
    }


}

function currentQuestion() {
    var nextQuestion = questions[counter];
    questionEl.textContent = nextQuestion.question;
    answersEl.innerHTML = "";
    questions[counter].selections.forEach(function (selection) {
        var btn = document.createElement("button");
        btn.addEventListener("click", answer)
        btn.textContent = selection
        answersEl.appendChild(btn);

    })
}





//     document.getElementById("button").addEventListener("click", answer(){
//         if(questions.selections === questions.answer){
//     counter++
//     alert("you are correct")
//     };


// }





// answersEl.addEventListener("click", function(event){
//     check to see if what was click was a button 
//     once were sure then we are going to use event object 
//     console.log(event.target)
//     get text content of event.target 
//     here is the text and using question  
// })

// displayQuestion() 
// function nextQuestion() {
//     if (userInput === questions[i].answer) {
//         score++
//     } else {
//         time -= 3
//     }
// }
// }
// function finalScore(score) {
//     return score
// }
// // for loop to insert choices
// <ul id="answers">
//     <li id="question1"></li>
//     <li></li>
//     <li></li>
//     <li></li>

