const Word = require("./Word.js");
const inquirer = require("inquirer");

class Hangman {
  constructor(word) {
    this.guessedArray = []; //array of letters that have been guessed
    this.word = new Word(word);
    this.turn();
  }
  async getUserGuess() {
    let guessPrompt = await inquirer.prompt({
      message: "Guess a letter",
      name: "letter"
    });

    return guessPrompt.letter;
  }
  async turn() {
    this.word.displayWord();
    if (this.guessedArray.length > 0) {
      console.log(`Guessed so far: ${this.guessedArray}`);
    }

    let guess = await this.getUserGuess();
    guess = guess.toString();
    // console.log(typeof guess);
    this.word.guess(guess);

    // this.getUserGuess().then(() => {
    //   getData(username);
    // });
    // console.log(userGuess);
    // this.word.guess(userGuess);
    this.word.displayWord();
  }
}

const game = new Hangman("hello");
