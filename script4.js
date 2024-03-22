const questions  = [
    {
        question:"Ozone hole refers to: ",
        answers: [
        {text:"Hole in ozone layer", correct:false},
        {text:"Decrease in the ozone layer in troposphere", correct:false},
        {text:"Increase in the thickness of ozone layer in troposphere", correct:false},
        {text:"Decrease in thickness of ozone layer in stratosphere", correct:true}
        ],
    },
    {
        question:"Photosynthesis generally takes place in which parts of the plant? ",
        answers: [
        {text:"Stem and leaf", correct:false},
        {text:"Leaf and other chloroplast bearing parts", correct:true},
        {text:"Roots and chloroplast bearing parts", correct:false},
        {text:"Bark and leaf", correct:false},
        ]
    },
    {
        question: "Plants synthesis protein from:",
            answers: [
                { text: "Starch", correct: false },
                { text: "Sugar", correct: false },
                { text: "Fatty acids", correct: false },
                { text: "Amino acids", correct: true }
            ]
    },
    {
        question: "One of the following is not a function of bones.",
        answers: [
            { text: "Place for muscle attachment", correct: false },
            { text: "Protection of vital organs", correct: false },
            { text: "Secretion of hormones for calcium regulation in blood and bones", correct: true },
            { text: "Production of blood corpuscles", correct: false }
        ]
    },
    {
        question: "Most highly intelligent mammals are: ",
        answers: [
            { text: "Whales", correct: false},
            { text: "Elephants", correct: false },
            { text: "Dolphins", correct: true},
            { text: "Kangaroos", correct: false }
        ]
    },
    {
        question: "Plant development is influenced by: ",
        answers: [
            { text: "Quality, quantity and duration of light", correct: true },
            { text: "Quality of light only", correct: false },
            { text: "Quality and quantity of light", correct: false },
            { text: "Quality and duration of light", correct: false }
        ]
    },
    {
        question: "Number of chromosomes in Down's syndrome is: ",
        answers: [
            { text: "47", correct: true },
            { text: "46", correct: false },
            { text: "48", correct: false },
            { text: "49", correct: false }
        ]
    },
    {
        question: "Our skin, when exposed to excess sunlight, becomes dark. This is because our skin pigments called: ",
        answers: [
            { text: "Flavoxanthin", correct: false },
            { text: "Carotene", correct: false },
            { text: "Xanthophyll", correct: false },
            { text: "Melanin", correct: true }
        ]
    },
    {
        question: "Radioactivity is a phenomenon of the spontaneous emission of: ",
        answers: [
            { text: "Protons (alpha particles)", correct: false },
            { text: "Electrons (beta particles)", correct: false },
            { text: "Gamma rays (short wave electromagnetic waves)", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Oxygen in our blood is transported by a protein named: ",
        answers: [
            { text: "Myoglobin", correct: false },
            { text: "Collagen", correct: false },
            { text: "Keratin", correct: false },
            { text: "Haemoglobin", correct: true }
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
    
    