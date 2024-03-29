const questions = [
    {
        question: "Fifty Shades of ",
        answers: [
            { text: "Grey", correct: true },
            { text: "Blue", correct: false },
            { text: "Red", correct: false },
            { text: "Green", correct: false }
        ]
    },

    {
        question: "The Hunger Games",
        answers: [
            { text: "Catching Fire", correct: true },
            { text: "Mockingjay", correct: false },
            { text: "The Ballad of Songbirds and Snakes", correct: false },
            { text: "The Hunger Games", correct: false }
        ],
    },

    {
        question: "Which Welsh actor starred opposite Debra Winger in “Shadowlands”?",
        answers: [
            { text: "Anthony Hopkins", correct: true },
            { text: "Richard Burton", correct: false },
            { text: "Michael Sheen", correct: false },
            { text: "Tom Jones", correct: false }
        ]
    },

    {
        question: "Who played Han Solo in the original Star Wars trilogy?",
        answers: [
            { text: "Harrison Ford", correct: true },
            { text: "Mark Hamill", correct: false },
            { text: "Alec Guinness", correct: false },
            { text: "Peter Cushing", correct: false }
        ]
    },

    {
        question: "Which Mrs Bruce Willis starred in “Ghost”?",
        answers: [
            { text: "Demi Moore", correct: true },
            { text: "Michelle Pfeiffer", correct: false },
            { text: "Sharon Stone", correct: false },
            { text: "Kim Basinger", correct: false }
        ]
    },

    {
        question: "Which Warren starred in “Dick Tracy” and “Bugsy Malone”?",
        answers: [
            { text: "Warren Beatty", correct: true },
            { text: "Warren Oates", correct: false },
            { text: "Warren Clarke", correct: false },
            { text: "Warren Mitchell", correct: false }
        ]
    },

    {
        question: "Which actor starred in “The Great Escape” and “The Thomas Crown Affair”?",
        answers: [
            { text: "Steve McQueen", correct: true },
            { text: "James Garner", correct: false },
            { text: "Charles Bronson", correct: false },
            { text: "Richard Attenborough", correct: false }
        ]
    },

    {
        question: "Which actor starred in “The Great Escape” and “The Thomas Crown Affair”?",
        answers: [
            { text: "Steve McQueen", correct: true },
            { text: "James Garner", correct: false },
            { text: "Charles Bronson", correct: false },
            { text: "Richard Attenborough", correct: false }
        ]
    },

    {
        question: "Who won Oscars for “Philadelphia” in ’93 and “Forrest Gump” in ’94?",
        answers: [
            { text: "Tom Hanks", correct: true },
            { text: "Denzel Washington", correct: false },
            { text: "Morgan Freeman", correct: false },
            { text: "Kevin Costner", correct: false }
        ]
    }
];

const question = document.getElementById("Question");
    const quizOptions = document.getElementById("quizOptions");
    const result = document.getElementById("score");
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
        let currentQuestion = questions[currentQuestionIndex];
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
            if (currentQuestionIndex < questions.length) {
            showQuestion();
            } else {
            quizOptions.innerHTML = '';
            result.textContent = `Quiz ended! Your score is: ${score}/${questions.length}`;
            result.style.display = 'block';
            question.style.display = 'none'; 
            question.parentNode.style.border = 'none'; 
            document.body.style.backgroundColor="bisque";
            }
            const homeButton = document.createElement("button");
            homeButton.textContent = "Go to Home Page";
            homeButton.classList.add("homeBtn");
            result.appendChild(homeButton);

            homeButton.addEventListener("click", function() {
                window.location.href = "index.html"; 
            });
        }, 1500);
}

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress-bar');
    const buttons = document.querySelectorAll('.optionsBtn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            updateProgressBar(10);
        });
    });

    function updateProgressBar(increment) {
        let currentWidth = parseInt(progressBar.style.width) || 0;
        let newWidth = currentWidth + increment;

        if (newWidth <= 100) {
            progressBar.style.width = newWidth + '%';
            progressBar.style.backgroundColor = 'green';
        } else {
            progressBar.style.width = '100%';
        }
    }
});

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    updateProgressBar(10);
}


startQuiz();
