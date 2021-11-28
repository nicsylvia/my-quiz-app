const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElements = document.getElementById('question-container')
const questionElements = document.getElementById('question')
const answerButtonElements = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

}
)

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElements.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElements.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElements.appendChild(button)
        
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElements.firstChild){
        answerButtonElements.removeChild(answerButtonElements.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElements.children).forEach(button => {
        setStatusClass = (button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 4 + 2?',
        answers: [
            {text: '6', correct: true},
            {text: '8', correct: false},
            {text: '42', correct: false},
            {text: '2', correct: false},
        ]
    },
    {
        question: 'Where is Alabian Solutions Located?',
        answers: [
            {text:'Oshodi, Lagos', correct: false},
            {text:'Ketu, Lagos', correct: false},
            {text:'Ikeja, Lagos', correct: true},
            {text:'Apapa, Lagos', correct: false},
        ]
    },
    {
        question: 'Facebook was built with what programming language?',
        answers: [
            {text:'Python', correct: false},
            {text:'Javascript', correct: false},
            {text:'PHP', correct: true},
            {text:'Java', correct: false},
        ]
    },
    {
        question: 'Who created Python?',
        answers: [
            {text:'Guido Van Rossum', correct: true},
            {text:'Mr Alabi', correct: false},
            {text:'Mr Benedict', correct: false},
            {text:'Mark Zuckerberg', correct: false},
        ]
    },
    {
        question: 'Which of these is not a framework of Javascript?',
        answers: [
            {text:'React Native', correct: false},
            {text:'Django', correct: true},
            {text:'Node Js', correct: true},
            {text:'Jquery', correct: false},
        ]
    },
    {
        question: 'One of the Frameworks of Python is?',
        answers: [
            {text:'PHP', correct: false},
            {text:'Guido van', correct: false},
            {text:'Node Express', correct: false},
            {text:'Flask', correct: true},
        ]
    },
    {
        question: 'When was the first programming Language created?',
        answers: [
            {text:'1884', correct: false},
            {text:'1894', correct: false},
            {text:'1883', correct: true},
            {text:'1990', correct: false},
        ]
    },
    {
        question: 'Who started Programming?',
        answers: [
            {text:'Ada Babbage', correct: false},
            {text:'Ada Lovelace', correct: true},
            {text:'Charles Babbage', correct: false},
            {text:'Bill Gates', correct: false},
        ]
    },
    {
        question: 'What is the name of the TV series Python programming language was named after?',
        answers: [
            {text:"Monty Python's Flying Circus ", correct: true},
            {text:'Python The Great', correct: false},
            {text:'The Pythonist & Pythonista', correct: false},
            {text:'Python', correct: false},
        ]
    },
    {
        question: "What was Guido's Motive behind the naming of Python as a programming language?",
        answers: [
            {text:'He wanted to be funny', correct: false},
            {text:'He loved Snakes too', correct: false},
            {text:'He had no motives', correct: false},
            {text:'He needed a name that was short, unique, and slightly mysterious', correct: true},
        ]
    },
]