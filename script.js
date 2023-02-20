const elementId = (id) => document.getElementById(id);

// getting all the dom  element
const quizContainer = elementId("quiz-container"),
  quizQuestion = elementId("question"),
  strtBtn = elementId("start"),
  rstrtBtn = elementId("rstart"),
  nxtBtn = elementId("next"),
  optionContainer = elementId("option-container");
scoreChecker = elementId("score");



// initializing variable
let shuffledQuestion,clickStatus, answerStatus, right =0, totalNo = 0, qArr = [];



// question index setters
function Questionsetter () {
   shuffledQuestion = Math.floor(Math.random() * QuestionList.length);

   if(qArr.includes(shuffledQuestion) === true){
    Questionsetter()
   }
 else{ qArr.push(shuffledQuestion)
  quizQuestion.innerHTML = QuestionList[shuffledQuestion].question;
  optionselector(QuestionList[shuffledQuestion]);
}};

const optionselector = (opt) => {
  clickStatus = 0
   optionContainer.innerHTML = " "
  opt.answer.forEach((option) => {
    let btn = document.createElement("div");
    btn.innerText = option.text;
    optionContainer.appendChild(btn);
    btn.classList.add("option");
   
    btn.addEventListener('click',(e)=>{
     
      if(clickStatus === 0){ 
      clickStatus = 1
      btn.style.hover ="none"
      option.correct? (e.target.style.background = "green") : (e.target.style.background = "red")
      scoreChecking(option)
    }
    })
  });
};

function resetter(){
  qArr.length =0
  quizQuestion.innerHTML =` Your score is ${right} out of ${totalNo}`
  optionContainer.innerHTML = " ";
  rstrtBtn.classList.remove("hide")
  nxtBtn.classList.add("hide")
  scoreChecker.classList.add("hide");
}

function scoreChecking(option){
  if(option.correct === true){
    right +=1;
   totalNo +=1;
 }
 else{
   totalNo +=1
 }
 scoreChecker.innerHTML = `${right}/${totalNo}` 
}
// start btn logic


function startingQuizz(){
  (right = 0), (totalNo = 0);
  scoreChecker.innerHTML = `${right}/${totalNo}`;
  strtBtn.classList.add("hide");
  scoreChecker.classList.remove("hide");
  quizContainer.classList.remove("hide");
  nxtBtn.classList.remove("hide");
  Questionsetter();
}

// adding Event Listener To button
strtBtn.addEventListener("click", () => startingQuizz());

rstrtBtn.addEventListener('click',()=>{
  rstrtBtn.classList.add("hide")
  startingQuizz()
})


// next button logic
nxtBtn.addEventListener("click", () => {
  console.log(qArr.length, QuestionList.length);
  if(qArr.length === QuestionList.length){
    return resetter() 
   } 
   else{
   Questionsetter();
}});



// quiz question set
const QuestionList = [
  {
    question: "What is &nbsp &nbsp 2+2+2=?",
    answer: [
      { text: "a:-  6", correct: true },
      { text: "b:-  22", correct: false },
      { text: "c:-  8", correct: false },
      { text: "d:-  222", correct: false },
    ],
  },
  {
    question: "What will be &nbsp &nbsp 21*9= ?",
    answer: [
      { text: "a:-  40", correct: false },
      { text: "b:-  219", correct: false },
      { text: "c:-  189", correct: true },
      { text: "d:-  0", correct: false },
    ],
  },
  {
    question: "What will be &nbsp &nbsp 1/Infinity= ?",
    answer: [
      { text: "a:-  1", correct: false },
      { text: "b:-  Infinity", correct: false },
      { text: "c:-  0", correct: true },
      { text: "d:-  -1", correct: false },
    ],
  },

  {
    question: "What will be &nbsp &nbsp 1/0= ?",
    answer: [
      { text: "a:-  1", correct: false },
      { text: "b:-  Infinity", correct: true },
      { text: "c:-  0", correct: false },
      { text: "d:-  -1", correct: false },
    ],
  },

  {
    question: "What will be the value of &nbsp &nbsp 5+2(8+7)/5-6/2=?",
    answer: [
      { text: "a:-  0", correct: false },
      { text: "b:-  8", correct: true },
      { text: "c:-  19", correct: false },
      { text: "d:-  13", correct: false },
    ],
  },
];
