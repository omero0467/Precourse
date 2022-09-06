//yore code goes here
//best attempt; ive spent till the last min trying to figure this out.
const hangword = ["exhuberant", "vivid", "lively", "colorful", "abundent"];
let randomWord = hangword[Math.floor(Math.random()) * hangword.length];
let maxAttempts = 10;
let mistakes = 0;
let guessedLetters = [];
let wordStatusDisplay = null;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Whats your guess?`,
});

rl.on("line", (line) => {
  checkInputValidity(line), checkIfwordStatusMatch(line);
}).on("close", () => {
  process.exit(0);
});

function wordDisplay() {
  wordStatusDisplay = randomWord
    .split("")
    .map((letter) => (guessedLetters.indexOf(letter) >= 0 ? letter : "*"))
    .join("");
  console.log(wordStatusDisplay);
}

function checkInputValidity(userInput) {
  const regEx = /[a-z]/;
  if (regEx.test(userInput)) {
    return guessedLetters.push(userInput);
  } else {
    return console.log("invalid input!"), rl.prompt;
  }
}

function checkIfwordStatusMatch(userInput) {
  if (randomWord.indexOf(userInput) >= 0) {
    wordDisplay();
  } else if (userInput === "invalid input!") {
    null;
  } else if (randomWord.indexOf(userInput) === -1) {
    mistakes++;
  } else { wordStatusDisplay.includes('*') ? rl.prompt :console.log('You Won!')};
  
  console.log(`
  you have 
  ${maxAttempts - mistakes} attempts left.`);

}
console.log(`
Hello and Welcome!
  you have 
  ${maxAttempts} attempts to guess the word:`);
