let questions = [
    {
    question:"Which language runs in the browser?",
    options: ["Python", "C", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
    time:60,
    marks:2
    },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style System", "Creative Styling System"],
    correctAnswer: "Cascading Style Sheets",
    time:60,
    marks:2
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>",
    time:60,
    marks:2
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Oracle"],
    correctAnswer: "Netscape",
    time:60,
    marks:2
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "define"],
    correctAnswer: "const",
    time:60,
    marks:2
  },
  {
    question: "Which method is used to convert JSON data into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    correctAnswer: "JSON.parse()",
    time:60,
    marks:2
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "===",
    time:60,
    marks:2
  },
  {
    question: "What will typeof null return?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswer: "object",
    time:60,
    marks:2
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    correctAnswer: "pop()",
    time:60,
    marks:2
  },
  {
    question: "Which function is used to print something in the console?",
    options: ["print()", "console.log()", "echo()", "log.print()"],
    correctAnswer: "console.log()",
    time:60,
    marks:2
  },
  {
    question: "Which method adds one or more elements at the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    correctAnswer: "push()",
    time:60,
    marks:2
  },
  {
    question: "Which built-in method converts a string to uppercase?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "caseUpper()"],
    correctAnswer: "toUpperCase()",
    time:60,
    marks:2
  },
  {
    question: "What is the default value of an uninitialized variable in JavaScript?",
    options: ["0", "null", "undefined", "NaN"],
    correctAnswer: "undefined",
    time:60,
    marks:2
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["for loop", "while loop", "do...while loop", "foreach loop"],
    correctAnswer: "do...while loop",
    time:60,
    marks:2
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correctAnswer: "Float",
    time:60,
    marks:2
  }
];


let questionIndex = 0
let totalMarks = 0
let displayQuestion = document.getElementById("displayQuestion")
let displayOptions = document.getElementById("displayOptions")
let currentQuestionNo = document.getElementById("currentQuestionNo")
let totalQuestionNumber = document.getElementById("totalQuestionNumber")
let QuestionTimer = document.getElementById("QuestionTimer")
let Timer = questions[0].time

let checkAnswer = (a,b,c)=>{
    if(a===b){
        totalMarks += +c
    }
    console.log(totalMarks)
    nextQuestion()
}

let renderQuestion = ()=>{
    let currentQuestion = questions[questionIndex]

    currentQuestionNo.innerHTML = questionIndex + 1
    totalQuestionNumber.innerHTML = questions.length
    displayQuestion.innerHTML = currentQuestion.question

    displayOptions.innerHTML = ""
    for(let i = 0; i < currentQuestion.options.length; i++){
        let option = currentQuestion.options[i]
       
        displayOptions.innerHTML += `<button class="font-semibold text-2xl w-auto text-left px-4 py-2 border rounded-lg bg-[#2222] text-white my-3 hover:bg-[#8be074]" onclick="checkAnswer('${currentQuestion.correctAnswer}','${option}','${currentQuestion.marks}')">${option}</button>`;

    }

}
renderQuestion()
let result = {
    Result: "Your marks is "+ totalMarks+"out of 15"
}

function nextQuestion(){
    // questionIndex++
    if(questionIndex + 1 === questions.length){
        alert("Your Quiz is completed and your Result is" +""+ totalMarks+"/15")
    }
    if(questionIndex < questions.length -1){
        questionIndex++;
    }
    renderQuestion()
    Timer = questions[questionIndex].time
   QuestionTimer.innerHTML = "Time Left : "+Timer
}
const checkTimer =()=>{
    const currentQuestion = questions[questionIndex]
    if(Timer === 0){
        nextQuestion()
        Timer = currentQuestion.time
    }else{
        Timer--
    }
    QuestionTimer.innerHTML = "Time Left: "+Timer
}
setInterval(checkTimer,1000)


