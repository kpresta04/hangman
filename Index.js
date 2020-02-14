const Word = require("./Word.js");

class Hangman {
  constructor(word) {
    this.guessedArray = []; //array of letters that have been guessed
    this.word = new Word(word);
    this.turn();
  }
  turn() {
    this.word.displayWord();
    if (this.guessedArray.length > 0) {
      console.log(`Guessed so far: ${this.guessedArray}`);
    }
  }
}

const game = new Hangman("hello");
