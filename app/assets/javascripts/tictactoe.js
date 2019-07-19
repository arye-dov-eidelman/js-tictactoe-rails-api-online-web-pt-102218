var turn = 0

const winningSetups = [
  [0, 1, 2,],
  [3, 4, 5,],
  [6, 7, 8,],
  [0, 3, 6,],
  [1, 4, 7,],
  [2, 5, 8,],
  [0, 4, 8,],
  [2, 4, 6,],
]

function board(){
  cells = document.querySelectorAll('td');
  return [...cells].map(cell => cell.innerHTML)
}

function resetBoard(){
  cells = document.querySelectorAll('td');
  [...cells].forEach(cell => cell.innerHTML = "")
  turn = 0
}


function player(){
  return turn % 2 ? "O" : "X"
}

function updateState(cell){
  cell.innerHTML = player()
}

function doTurn(cell){
  // if (cell.innerHTML !== ""){
  //   return false
  // }
  updateState(cell)
  if (checkWinner()) {
    resetBoard()
  } else if (checkTie()) {
    resetBoard()
  } else {
    turn++
  }
}

function checkWinner(){
  winningAtSetups = winningSetups.map(setup => {
    boardAtSetups = setup.map(cellID => board()[cellID])
    if (allEqual(boardAtSetups) && boardAtSetups[0] !== ""){
      return boardAtSetups[0]
    }
  })

  winner = winningAtSetups.reduce((a, b) => a || b) || false

  if (winner){
    setMessage(`Player ${winner} Won!`)
    return true
  } else {
    return false
  }
}

function checkTie(){
  if (board().join("").length >= 9){
    setMessage("Tie game.")
    return true
  } else {
    return false
  }
}

function allEqual(arr){
  return arr.every( v => v === arr[0] )
}

function setMessage(message){
  document.getElementById('message').innerHTML = message
}

function attachListeners(){
  gamesDiv = document.getElementById('games');
  
  cells = document.getElementsByTagName('td');
  cells.forEach(cell => cell.addEventListener('click', cellClickHandler))

  saveButton = document.getElementById('save');
  saveButton.addEventListener('click', saveButtonHandler)

  previousButton = document.getElementById('previous');
  previousButton.addEventListener('click', previousButtonHandler)

  clearButton = window.document.getElementById('clear');
  clearButton.addEventListener('click', clearButtonHandler)
}

function cellClickHandler(e){
  doTurn(e.target)
}

function saveButtonHandler(){}

function previousButtonHandler(){}

function clearButtonHandler(){}

document.addEventListener('DOMContentLoaded', attachListeners, false);