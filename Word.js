const Letter = require("./Letter.js");

module.exports = class Word {
  constructor(word) {
    this.word = word;
    this.letterArray = this.word.split("");
    this.letterObjArray = this.makeLtrObjs();
    this.length = this.word.length;
    this.falseNum = this.falseCount();
  }
  falseCount() {
    let falseCount = 0;
    this.letterObjArray.forEach(function(letter) {
      if (letter.guessed === false) {
        falseCount++;
      }
    });
    return falseCount;
  }
  makeLtrObjs() {
    let wrdArray = [];
    // console.log(this);
    this.letterArray.forEach(function(element) {
      //   console.log(element);
      let ltr = new Letter(element);
      wrdArray.push(ltr);
    });
    // console.log(wrdArray);
    return wrdArray;
  }
  displayWord() {
    let printStr = "";
    this.letterObjArray.forEach(function(letter) {
      printStr += letter.displayVal() + " ";
    });
    console.log(printStr);
  }
  guess(char) {
    this.letterObjArray.forEach(function(letter) {
      letter.checkGuess(char);
    });
  }
};
// }

// const hello = new Word("hello");
// console.log(hello.letterObjArray);
// hello.guess("l");
// hello.displayWord();

// console.log(hello.makeLtrObjs("hello"));
