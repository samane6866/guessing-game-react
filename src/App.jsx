import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have 10 attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">Guess a number</label>
        <input type="text" id="guessField" class="guessField" />
        <button class="guessSubmit">Submit a Guess</button>

        <div class="resultParas">
          <p>Previous Guesses: <span class="guesses"></span></p>
          <p>Guesses Remaining: <span class="lastResult">X</span></p>
          <p class="lowOrHi"></p>
        </div>
      </div>
    </>
  )
}

export default App;
