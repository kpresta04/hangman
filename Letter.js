module.exports = class Letter {
  constructor(letter) {
    this.letter = letter;
    this.guessed = false;
  }

  displayVal() {
    if (this.guessed === false) {
      return "_";
    } else {
      return this.letter;
    }
  }

  checkGuess(char) {
    if (char === this.letter) {
      this.guessed = true;
    }
  }
};
