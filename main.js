// const hideButtom = document.getElementById('hideButtom')
// const contentDiv = document.getElementById('condentDiv')

// hideButtom.addEventListener('click', () => {
//     contentDiv.style.display = 'none'
// })

////////////////////////////////////////////////////

// const cardDiv = document.createElement('div')
// cardDiv.setAttribute('id','card')

// const h2Element = document.createElement('h2')
// h2Element.textContent = 'Gandalf'

// const aElement = document.createElement('a')
// aElement.setAttribute('href','#')
// aElement.textContent = 'Go to profile'

// cardDiv.appendChild(h2Element)
// cardDiv.appendChild(aElement)


// document.body.appendChild(cardDiv)

///////////////////////////////////////////////////////

let score = 0

function showQuestion(question, answers, correctAnswerIndex){
    const questionElement = document.getElementById('question')
    questionElement.textContent = question

    const answerElements = document.querySelectorAll('.answer')
    answerElements.forEach((element,index) => {
        element.textContent = answers[index]
        element.classList.remove('correct','incorrect')
    })
}

function CheckAnswer(selectedElement){
    const answerElements = document.querySelectorAll('.answer')
    const selectedElementIndex = Array.from(answerElements).indexOf(selectedElement)

    if (selectedElementIndex === correctAnswerIndex) {
        selectedElement.classList.add('correct')
        score++
    } else {
        selectedElement.classList.add('incorrect')
    }

    updetaScore()
}

function updetaScore() {
    const scoreElement = document.getElementById('score')
    scoreElement.textContent = `score: ${score}`
}

const question = "what is the capital of France"
const answers = ["London","Berlin","Paris","Madrid"]
const correctAnswerIndex = 2

showQuestion(question, answers, correctAnswerIndex)

