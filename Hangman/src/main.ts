import './style.css'

type Words = string[]
const words : Words = []

type State = {
  characters : string[]
  maxMistakes : number
}


let state: State= {
  characters : [],
  maxMistakes : 3

}


// Q: What's the word we're guesssing? ✅ state.word

// Q: What letters has the user entered?  ✅ state.characters
// Note: Don't allow the user to enter the same letter more than once

// Q: How many attempts do we have? ✅ state.maxMistakes

// Q: How many mistakes has the user made so far?
// Count the letters in state.characters that ARE NOT in state.word
function getMistakes () {
  let mistakes = state.characters.filter(char => !words.includes(char))
  return mistakes
}

function getMistakeCount () {
  let mistakes = getMistakes()
  return mistakes.length
}

// Q: How many correct guesses has the user made so far?
// Count the letters in state.characters that ARE in state.word

// Q: Has the user won?
function checkIfUserWon(): boolean {
  // are all the letters in the word in the guesses?
}

// Q: Has the user lost?
function checkIfUserLost(): boolean {
  // is the count of mistakes >= than maxMistakes?
}


function render () {
  let appEl = document.querySelector('#app')
  if (appEl === null) return
  appEl.textContent = ''

  let mistakesSpan = document.createElement('span')
  mistakesSpan.textContent = `Mistakes: ${getMistakes()} (${getMistakeCount()})`

  appEl.append(mistakesSpan)
}

function listenToUserKeypresses () {
  document.addEventListener('keyup', function () {
    console.log('the user entered a character!')
    render()
  })
}

listenToUserKeypresses()
render()