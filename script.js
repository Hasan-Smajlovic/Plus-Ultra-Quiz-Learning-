const questionsQuiz1 = [
{
    question:"What is the capital of France?",
    answers: [
    {text:"London", correct:false},
    {text:"Paris", correct:true},
    {text:"Berlin", correct:false},
    {text:"Madrid", correct:false}
    ],
},
{
    question:"Who wrote 'Romeo and Juliet'? ",
    answers: [
    {text:"William Shakespeare", correct:true},
    {text:"Jane Austen", correct:false},
    {text:" Charles Dickens", correct:false},
    {text:"Mark Twain", correct:false},
    ]
},
{
    question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
},
{
    question: "What is the capital of Japan?",
    answers: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false }
    ]
},
{
    question: "Who painted the Mona Lisa?",
    answers: [
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
    ]
},
{
    question: "What is the tallest mammal on Earth?",
    answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: true },
        { text: "Rhino", correct: false },
        { text: "Hippopotamus", correct: false }
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Mercury", correct: false },
        { text: "Neptune", correct: false }
    ]
},
{
    question: "What is the largest ocean on Earth?",
    answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true }
    ]
},
{
    question: "Who invented the telephone?",
    answers: [
        { text: "Alexander Graham Bell", correct: true },
        { text: "Thomas Edison", correct: false },
        { text: "Nikola Tesla", correct: false },
        { text: "Albert Einstein", correct: false }
    ]
},
{
    question: "What is the chemical symbol for gold?",
    answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Hg", correct: false }
    ]
}
];

const question = document.getElementById("Question");
const quizOptions = document.getElementById("quizOptions");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion()
{
    while(quizOptions.firstChild)
   {
        quizOptions.removeChild(quizOptions.firstChild);
   }

    let currentQuestion = questionsQuiz1[currentQuestionIndex];
    let  questionNumber = currentQuestionIndex +1;
    question.innerHTML = questionNumber + ". "+ currentQuestion.question; 
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("optionsBtn");
        quizOptions.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });


}
function selectAnswer(event )
{
    const selected = event.target;
    const isCorrect = selected.dataset.correct === "true";
    if (isCorrect) {

        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
       
        Array.from(quizOptions.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
   }
   setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsQuiz1.length) {
        showQuestion();
    } else {
        
        alert(`Quiz ended! Your score is: ${score}/${questionsQuiz1.length}`);
    }
}, 1500);
}


startQuiz();

