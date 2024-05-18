// GLobal variables
const gameBoard = document.getElementById('wholeBoard').innerText
// console.log(document.getElementById('wholeBoard'))
const eachBox = document.getElementsByClassName('innerBoard')
const textInside = document.getElementsByClassName('innertext')

let cardOne = null
let cardTwo = null
let currentSelection = [cardOne, cardTwo]
// Declare and initialize cardOne and cardTwo

document.querySelectorAll('.innerBoard').forEach((parentElement) => {
  parentElement.addEventListener('click', (event) => {
    // console.log('You clicked me')
    const childElement = event.target.firstChild
    // console.log(childElement)
    const value = childElement.innerText
    console.log(value)
    // Display the childElement
    childElement.style.display = 'flex'

    if (cardOne === null) {
      cardOne = value
    } else if (cardTwo === null) {
      cardTwo = value
    } else {
      console.log('something is wrong with the value storer')
    }

    console.log(cardOne, cardTwo)

    // Create a function that checks if two cards are a match
    function matchChecker() {
      return cardOne === cardTwo
    }

    console.log(matchChecker())

    // If this is the second card that was flipped over check if it is a match
    if (cardTwo !== null) {
      console.log(cardOne, cardTwo)

      if (matchChecker()) {
        console.log(`its a match`)
        // If they match then run match logic / function then initialise cardOne and cardTwo
        forEach()
        cardOne = null
        cardTwo = null
          console.log(cardOne, cardTwo)
      } else {
        console.log(`its not a match`)
        // If they don't match hide both cards then initialise cardOne and cardTwo
        // event.target.firstChild.style.display = 'none'
        cardOne.style.display = 'none'
          cardOne = null
          cardTwo = null
      }
    }
  })
})

// Create a function that handles a match
// Inside this function make the two cards that match unclickable
// Also inside this function check if the game is over

// function triggerMatch() {
//   childElement.removeEventListener()
//   childElement.style.color = 'green'
// }

// Create a function that handles not a match
// Inside this function make the two cards that match non clickable, and remove event listener

// function triggerNotMatch() {
//   childElement.style.display = 'none'
//   cardOne = null
//   cardTwo = null
// }

// console.log(cardOne)
// Create a function that checks if two cards are a match
// function matchChecker() {
//   return cardOne === cardTwo
//   // if (cardOne === cardTwo) {
//   //   console.log(`its a match`)
//   //   return true
//   // } else if (cardOne !== cardTwo) {
//   //   return false
//   // } else {
//   //   console.log('issue with match checker')
//   // }
// }

// // GLobal variables
// const gameBoard = document.getElementById('wholeBoard').innerText
// const eachBox = document.getElementsByClassName('innerBoard')
// // eachBox will be used for event listener and then to check if it is a match - when display of textInside is set to none, innerText of eachBox is empty.

// const textInside = document.getElementsByClassName('innertext')
// // textInside will be used for hide or show text by setting display to none

// // textInside[1].style.display = 'flex'
// // the above will set the innerText to null

// console.log(eachBox[1].innerText)
// // the above displays will log the innterText of index 1 cell. when display: none, value will be empty

// // const gettingValue = eachBox[1].innerText

// // create an event listenser that when the eachBox is clicked, it will toggle display to flex, if not
// // const displayedBoxes = []

// // console.log(textInside[0].innerText)

// function clickToDisplay1() {
//   textInside[0].style.display = 'flex'
//   // displayedBoxes.splice(0, 0, 1),
//   console.log(textInside[0].innerText)
// }

// function clickToDisplay1() {
//   textInside[1].style.display = 'flex'
//   // displayedBoxes.splice(0, 0, 1),
//   console.log(textInside[1].innerText)
// }

// // eachBox[0].addEventListener('click', () => {
// //   clickToDisplay1()
// // })

// // function clickToDisplay2() {
// //   textInside[1].style.display = 'flex',
// //   displayedBoxes.splice(0, 0, 1)
// // }
// // eachBox[1].addEventListener('click', () => {
// //   clickToDisplay2()
// // })

// // console.log(displayedBoxes)
// // console.log(if(eachBox[3].innerText === eachBox[2].innerText){return true})

// // function clickToDisplay() {
// //   for (let i = 0; i > eachBox.length; i++) {
// //     eachBox[i].addEventListener('click', () => {
// //       textInside[i].style.display = 'flex'
// //       console.log(clickToDisplay())
// //     })
// //   }
// // }

// // function clickToDisplay() {
// //   textInside[6].style.display = 'flex'
// // }
// // console.log(clickToDisplay())

// // eachBox[6].addEventListener('click', () => {
// //   clickToDisplay()
// //   console.log(clickToDisplay())
// // })
// // function checkMatch() {
// //   if (eachBox[0].innerText === eachBox[6].innerText) {
// //     // console.log(document.getElementById('wholeBoard').innerText)
// //     return true
// //   } else {
// //     return false
// //   }
// // }
// // const winCaseOne = if (eachBox[0].innerText === eachBox[6].innerText) {
// //   return true
// // } else {
// //   return false
// // }
// // const winCaseTwo = if (eachBox[0].innerText === eachBox[6].innerText) {
// //   return true
// // }

// // ...

// // Funcitons for the game

// // // add click event listeners
// // function clickFlipper() {
// //   for (let i = 0; i > eachBox.length; i++) {
// //     eachBox[0].addEventListeners('click', () => {
// //       // document.getElementById('one').style.color = 'black'
// //     })
// //   }
// // }

// // function checkMatch() {}

// // start fucntion
// // const startGame = () => {
// //   addEventListeners()
// // }

// // startGame()
