// GLobal variables
const gameBoard = document.getElementById('wholeBoard').innerText
// console.log(document.getElementById('wholeBoard'))
const eachBox = document.getElementsByClassName('innerBoard')
const textInside = document.getElementsByClassName('innertext')

// Declare and initialize cardOne and cardTwo
let cardOne = null
let cardTwo = null

const matchChecker = () => {
  return cardOne.innerText === cardTwo.innerText
}

const gameLogic = (event) => {
  let childElement = event.target.firstChild
  let parentElements = childElement.parentElement
  let value = childElement.innerText
  console.log(value)
  // Display the childElement
  childElement.style.display = 'block'

  if (cardOne === null) {
    cardOne = childElement
    console.log('Card 1 was selected. Value is ')
    console.log(cardOne.innerText)
  } else if (cardTwo === null) {
    cardTwo = childElement
    console.log('Card 2 was selected. Value is ')
    console.log(cardTwo.innerText)
  } else {
    console.log('something is wrong with the value storer')
  }

  // If this is the second card that was flipped over check if it is a match
  if (cardTwo !== null) {
    const isMatch = matchChecker()

    console.log('Is it a match?')
    console.log(isMatch)

    if (isMatch) {
      // If they match then run match logic / function then initialise cardOne and cardTwo
      console.log(`Inside isMatch true block...`)
      // TODO Remove event listeners
      console.log(childElement)
      // parentElement.removeEventListener('click', matchChecker)
      cardOne.parentElement.removeEventListener('click', gameLogic)
      cardTwo.parentElement.removeEventListener('click', gameLogic)
      cardOne = null
      cardTwo = null
    } else {
      console.log(`Inside isMatch false block...`)
      // TODO The delay part. If they don't match hide both cards after a delay
      console.log(cardOne.style.display, cardTwo.style.display)

      setTimeout(() => {
        ;(cardOne.style.display = 'none'),
          (cardTwo.style.display = 'none'),
          (cardOne = null),
          (cardTwo = null)
      }, 1000)

      console.log(cardOne, cardTwo)
    }
    console.log(cardOne, cardTwo)
  }
  console.log(cardOne, cardTwo)
}

function triggerMatch() {}

document.querySelectorAll('.innerBoard').forEach((parentElement) => {
  parentElement.addEventListener('click', gameLogic)
})