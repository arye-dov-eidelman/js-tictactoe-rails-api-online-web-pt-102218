// Must be global scoped for tests
var turn = 0

function player(){
  return turn / 2 ? "O" : "X"
}

function updateState(){

}

function doTurn(){
  turn++
}

function attachListeners(){

}