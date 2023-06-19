// Define an array of quiz questions
const questionBank = [
    {
        question: "Policy should be descriptive not imperative so we must not be writing instructions for people.",
        answer: true
    },
    {
        question: "Wrt algorithmic, yes the text is obviously algorithmic and I've seen over many years on Wikipedia and Commons that there are some editors who it seems can't get out of bed and brush their teeth in the morning without a script to guide them. So we end up with instructions appearing here and there that were someone's bright idea at the time but don't really stand up to scrutiny as reflecting actual editing practice or solving general problems.",
        answer: true
    },
    {
        question: "You're all getting into the weeds and mixing subjects together that don't belong together. The solution, as proposed in the next section, is to deal with them separately. Pseudoscientific topics are fringe topics, but not the other way around. Instead of wasting a lot of time and effort to explain that, just deal with pseudoscience as a subcategory (in its own section) of fringe theories.",
        answer: true
    },
    {
        question: "Something that makes me happy is witnessing acts of kindness and compassion, where people go out of their way to help others without expecting anything in return, reminding me of the inherent goodness in humanity and filling me with hope and warmth.",
        answer: true
    },
    {
        question: "You think it's legitimate to make sarcastic edits to core policy pages? This is an increasingly bizarre exchange. I can assure you: I am trying to clarify things straight & in good faith. It is clear, anyway, what text you you think is good from your repeated reversions. It's not good.",
        answer: true
    },
    {
        question: "I understand the importance of maintaining a neutral point of view, but we must also consider the challenges of achieving complete neutrality. It's crucial to strike a balance that allows for diverse perspectives while avoiding undue bias. Let's encourage editors to provide well-sourced information and present it in a fair and balanced manner, fostering a space for respectful discourse.",
        answer: false
    },
    {
        question: "While I appreciate the intention behind providing guidelines, we need to be cautious about overregulating and stifling editors' creativity. The neutral point of view should be a guiding principle, but we should trust experienced contributors to exercise their judgment within reasonable bounds. Let's focus on empowering editors with knowledge and resources to make informed decisions, rather than imposing rigid rules.",
        answer: false
    },
    {
        question: "The concept of neutrality can be subjective, and we should be mindful of cultural, political, and historical contexts. It's important to acknowledge that different topics may require different approaches to neutrality. Instead of trying to apply a one-size-fits-all solution, let's encourage editors to engage in open discussions and strive for a balanced representation of information while respecting the nuances of each subject.",
        answer: false
    },
    {
        question: "We should remember that neutrality doesn't imply giving equal weight to all viewpoints, especially when it comes to fringe or pseudoscientific topics. Our focus should be on representing information based on reliable sources and established consensus within the relevant academic or scientific communities. Let's ensure that neutrality is achieved through a rigorous and evidence-based approach, rather than succumbing to undue influence from fringe views.",
        answer: false
    },
    {
        question: "I've observed instances where certain instructions or guidelines don't align with the actual editing practices on Wikipedia. It's important to critically evaluate the efficacy of these instructions and ensure they accurately reflect the community's editing norms. Let's focus on refining our guidance to better serve editors and enhance the overall quality and neutrality of Wikipedia's content.",
        answer: false
    }
];

const numberOfQuestions = 5; // Number of questions in each quiz

let quizQuestions = []; // Array to store the randomly selected quiz questions
let currentQuestionIndex = 0; // Tracks the current question index
let score = 0; // Player's score

// Get DOM elements
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const trueButton = document.getElementById("true-btn");
const falseButton = document.getElementById("false-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

// Attach event listener to the start button
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
    startButton.style.display = "none";
    questionElement.style.display = "block";
    trueButton.style.display = "inline-block";
    falseButton.style.display = "inline-block";
    score = 0; // Reset the score
    generateQuizQuestions();
    showQuestion();
    updateScore();
}

// Function to generate random quiz questions
function generateQuizQuestions() {
    quizQuestions = [];
    const shuffledQuestions = questionBank.sort(() => 0.5 - Math.random());
    for (let i = 0; i < numberOfQuestions; i++) {
        quizQuestions.push(shuffledQuestions[i]);
    }
}

// Function to display a question
function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    trueButton.disabled = false;
    falseButton.disabled = false;
}

// Attach event listeners to the true and false buttons
trueButton.addEventListener("click", () => checkAnswer(true));
falseButton.addEventListener("click", () => checkAnswer(false));

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    const question = quizQuestions[currentQuestionIndex];
    trueButton.disabled = true;
    falseButton.disabled = true;

    if (selectedAnswer === question.answer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = "Incorrect!";
        resultElement.style.color = "red";
    }

    resultElement.style.display = "block";
    currentQuestionIndex++;
    setTimeout(() => {
        resultElement.style.display = "none";
        if (currentQuestionIndex < numberOfQuestions) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1500);

    updateScore();
}

// Function to update the player's score
function updateScore() {
    scoreElement.textContent = `Score: ${score}/${numberOfQuestions}`;
}

// Function to end the quiz
function endQuiz() {
    questionElement.style.display = "none";
    trueButton.style.display = "none";
    falseButton.style.display = "none";
    resultElement.textContent = "Quiz finished!";
    resultElement.style.color = "black";
    resultElement.style.display = "block";
}
