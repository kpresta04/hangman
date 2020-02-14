module.exports = class Letter {
  constructor(letter) {
    this.letter = letter;
    this.guessed = false;
  }

  displayVal = function() {
    if (this.guessed === false) {
      return "_";
    } else {
      return this.letter;
    }
  };

  checkGuess = function(char) {
    if (char === this.letter) {
      this.guessed = true;
    }
  };
};
