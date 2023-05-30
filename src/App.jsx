import { useState } from "react";
import "./App.css";
function random() {
  return Math.floor(Math.random() * 10 + 1);
}
function App() {
  // lo usaremos para saber si el usuario ha introducido un numero más alto o más bajo. Además nos servirá si el usuario agota todos los intentos, para mostrarlo
  const [numberRandom, setNumberRandom] = useState(random());
  // del input
  const [valorInput, setValorInput] = useState(" ");
  // tendremos que decrementar uno cada vez que el usuario introduzca un número
  const [restTry, setRestTry] = useState(5);
  // [4, 40, 20]
  const [previousGuess, setPreviousGuess] = useState([]);
  // 'el número es menor' o 'el número es mayor'
  const [message, setShowMessage] = useState(" ");

  function handelValorIniciar() {
    const updateGuesses = [...previousGuess, +valorInput];
    setPreviousGuess(updateGuesses);
    setValorInput(" ");

    console.log(valorInput, numberRandom);
    if (valorInput > numberRandom) {
      setShowMessage("is too high");
      setRestTry(restTry - 1);
    } else if (valorInput < numberRandom) {
      setShowMessage("is to low");
      setRestTry(restTry - 1);
    }
  }
  // si la variable de estado es 0, es que ya hemos perdido!
  if (restTry === 0) {
    return <h1>Lo siento! el número era {numberRandom}</h1>;
  }
  // Si el array de preivousGuesses incluye en algún momento el número correcto, entonces podemos decir uqe hemos ganado
  if (previousGuess.includes(numberRandom)) {
    return <h1>¡Has ganado!</h1>;
  }

  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have {restTry} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">
          Guess a number
        </label>
        <input
          type="number"
          id="guessField"
          max={100}
          min={0}
          classn="guessField"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        />
        <button onClick={handelValorIniciar} className="guessSubmit">
          Submit a Guess
        </button>

        <div className="resultParas">
          <p>
            Previous Guesses:
            <span className="guesses">{previousGuess.join(",")}</span>
          </p>
          <p>
            Guesses Remaining: <span className="lastResult">{restTry}</span>
          </p>
          <p className="lowOrHi">{message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
