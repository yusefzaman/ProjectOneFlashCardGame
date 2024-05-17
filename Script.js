// GLobal variables
const gameBoard = document.getElementById('wholeBoard').innerText
const eachBox = document.getElementsByClassName('innerBoard')
// eachBox will be used for event listener and then to check if it is a match - when display of textInside is set to none, innerText of eachBox is empty.

const textInside = document.getElementsByClassName('innertext')
// textInside will be used for hide or show text by setting display to none

// textInside[1].style.display = 'flex'
// the above will set the innerText to null

// console.log(eachBox[1].innerText)
// the above displays will log the innterText of index 1 cell. when display: none, value will be empty

// const gettingValue = eachBox[1].innerText

// create an event listenser that when the eachBox is clicked, it will toggle display to flex, if not

function clickToDisplay() {
  for (let i = 0; i > eachBox.length; i++) {
    textInside[i].style.display = 'flex'
  }
}

for (let i = 0; i > eachBox.length; i++) {
  eachBox[i].addEventListener('click', () => {
    clickToDisplay()
  })
}

// function checkMatch() {
//   if (eachBox[0].innerText === eachBox[6].innerText) {
//     // console.log(document.getElementById('wholeBoard').innerText)
//     return true
//   } else {
//     return false
//   }
// }
// const winCaseOne = if (eachBox[0].innerText === eachBox[6].innerText) {
//   return true
// } else {
//   return false
// }
// const winCaseTwo = if (eachBox[0].innerText === eachBox[6].innerText) {
//   return true
// }

// ...

// Funcitons for the game

// // add click event listeners
// function clickFlipper() {
//   for (let i = 0; i > eachBox.length; i++) {
//     eachBox[0].addEventListeners('click', () => {
//       // document.getElementById('one').style.color = 'black'
//     })
//   }
// }

// function checkMatch() {}

// start fucntion
// const startGame = () => {
//   addEventListeners()
// }

// startGame()
