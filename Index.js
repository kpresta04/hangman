const Word = require("./Word.js");
const inquirer = require("inquirer");

class Hangman {
  constructor(word) {
    this.guessedArray = []; //array of letters that have been guessed
    this.word = new Word(word);
    this.chances = 8;
    this.gameOver = false;
    this.turn();
  }
  async getUserGuess() {
    let guessPrompt = await inquirer.prompt({
      message: "Guess a letter",
      name: "letter"
    });

    return guessPrompt.letter;
  }
  checkVictory() {
    let trueTrue = 0;
    this.word.letterObjArray.forEach(function(letter) {
      if (letter.guessed === true) {
        trueTrue++;
      }
    });
    if (trueTrue === this.word.length) {
      this.gameOver = true;
      console.log("You Win");
    } else {
      // console.log(`Chances remaining: ${this.chances}`);

      // this.chances--;
      if (this.chances > 0) {
        console.log(`Chances remaining: ${this.chances}`);
      } else {
        this.gameOver = true;
        console.log("You Were Hanged. Game over!");
      }
    }
  }
  async turn() {
    while (!this.gameOver) {
      if (this.guessedArray.length > 0) {
        console.log(`Guessed so far: ${this.guessedArray}`);
      }
      this.word.displayWord();

      let guess = await this.getUserGuess();
      guess = guess.toString();
      this.guessedArray.push(guess);
      let fcount = this.word.falseCount();
      // console.log(`Fcount: ${fcount}`);
      this.word.guess(guess);
      if (fcount === this.word.falseCount()) {
        this.chances--;
      }
      // console.log(this.word.falseCount());

      this.word.displayWord();
      this.checkVictory();
    }
  }
}

const game = new Hangman("hello");
