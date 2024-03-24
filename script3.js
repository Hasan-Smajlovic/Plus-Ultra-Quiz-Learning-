const questions  = [
    {
        question:"Who is known as father of computer?",
        answers: [
        {text:"Dennis Ritchie", correct:false},
        {text:"Bill Gates", correct:false},
        {text:"James Gosling", correct:false},
        {text:"Charles Babbage", correct:true}
        ],
    },
    {
        question:"What is the brain of a computer system called? ",
        answers: [
        {text:"RAM", correct:false},
        {text:"CPU", correct:true},
        {text:"GPU", correct:false},
        {text:"None of the above", correct:false},
        ]
    },
    {
        question: "Which of the following is included in computer system?",
            answers: [
                { text: "Hardware", correct: false },
                { text: "Peripheral Devices", correct: false },
                { text: "Software", correct: false },
                { text: "All of the above", correct: true }
            ]
    },
    {
        question: "What does the CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: false },
            { text: "Control Processing Unit", correct: true },
            { text: "Computer Processing unit", correct: false },
            { text: "Computer Programming Unit", correct: false }
        ]
    },
    {
        question: "What is known as temporary memory or volatile memory?",
        answers: [
            { text: "SSD", correct: false},
            { text: "HDD", correct: false },
            { text: "RAM", correct: true},
            { text: "ROM", correct: false }
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Reallocate Automatic Memory", correct: false },
            { text: "Remote access Memory", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The collection of 8 bits make:",
        answers: [
            { text: "Nibble", correct: true },
            { text: "Byte", correct: false },
            { text: "Word", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is the smallest unit of memory?",
        answers: [
            { text: "Byte", correct: false },
            { text: "Nibble", correct: false },
            { text: "Kb", correct: false },
            { text: "Bit", correct: true }
        ]
    },
    {
        question: "Which of the following is not an input device?",
        answers: [
            { text: "Speakers", correct: true },
            { text: "Microphone", correct: false },
            { text: "Mouse", correct: false },
            { text: "Keyboard", correct: false }
        ]
    },
    {
        question: "Which of the following computer languages is written in binary form?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "Pascal", correct: false },
            { text: "Machine Language", correct: true }
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

startQuiz();