var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

document.querySelector('#save').addEventListener('click', () => {
    addFlashCard()
})

document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('.creator-flash').style.display = 'none'
})

document.querySelector('#del_cards').addEventListener('click', () => {
    localStorage.clear()
    contentArray = []
    document.querySelector('#question').value = ''
    document.querySelector('#answer').value = ''
    document.querySelector('.container-flashcard .container').innerHTML = ''
})

document.querySelector('#add_card').addEventListener('click', () => {
   document.querySelector('.creator-flash').style.display = 'block'
})

addFlashCard = () => {
    let question = document.querySelector('#question').value
    let answer = document.querySelector('#answer').value

    let objFlashCard = {
        'Question' : question,
        'Answer' : answer,
    }

    contentArray.push(objFlashCard)
    localStorage.setItem('items', JSON.stringify(contentArray))

    createFlashCard(contentArray[contentArray.length - 1])

    question = ''
    answer = ''
}

createFlashCard = (objFlashCard) => {
    let boxFlashCard = document.createElement('div')
    let questionFlash = document.createElement('h3')
    let answerFlash = document.createElement('p')

    boxFlashCard.classList.add('flashcard')

    questionFlash.innerHTML = objFlashCard.Question
    answerFlash.innerHTML = objFlashCard.Answer

    boxFlashCard.appendChild(questionFlash)
    boxFlashCard.appendChild(answerFlash)

    const containerFlashCard = document.querySelector('.container-flashcard .container')

    containerFlashCard.appendChild(boxFlashCard)
}

contentArray.forEach(createFlashCard)

