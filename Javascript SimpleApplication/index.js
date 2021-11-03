const x_value = 'x'
const circle_value = 'circle'
const winning_check = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const popupElement = document.getElementById('popup')
const restartbtn = document.getElementById('restartbtn')
const popupTextElement = document.querySelector('[data-message]')
let circleTurn

gameBegin()

restartbtn.addEventListener('click', gameBegin)

function gameBegin() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(x_value)
    cell.classList.remove(circle_value)
    cell.removeEventListener('click', clicker)
    cell.addEventListener('click', clicker, { once: true })
  })
  boardHover()
  popupElement.classList.remove('show')
}

function clicker(e) {
  const cell = e.target
  const currentClass = circleTurn ? circle_value : x_value
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    chance()
    boardHover()
  }
  
}

function endGame(draw) {
  if (draw) {
    popupTextElement.innerText = 'Draw!'
  } else {
    popupTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  popupElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(x_value) || cell.classList.contains(circle_value)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function chance() {
  circleTurn = !circleTurn
}

function boardHover() {
  board.classList.remove(x_value)
  board.classList.remove(circle_value)
  if (circleTurn) {
    board.classList.add(circle_value)
  } else {
    board.classList.add(x_value)
  }
}

function checkWin(currentClass) {
  return winning_check.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}