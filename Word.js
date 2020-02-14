const Letter = require("./Letter.js");

class Word {
  constructor(word) {
    this.word = word;
    this.letterObjArray = this.word.split("");
    this.letterObjArray = this.makeLtrObjs();
    this.length = word.length;
  }
  makeLtrObjs() {
    let wrdArray = [];
    // console.log(this);
    this.letterObjArray.forEach(function(element) {
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
}
// }

const hello = new Word("hello");
// console.log(hello.letterObjArray);
hello.displayWord();

// console.log(hello.makeLtrObjs("hello"));
