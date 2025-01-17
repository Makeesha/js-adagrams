export const drawLetters = () => {
  const _ = require("lodash");
  let letterList = [];
  const poolList = [];
  const letterPool = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1,
};
  for (const key in letterPool) {
      for(let i = 0; i < letterPool[key]; ++i) {
          poolList.push(key);  {

  letterList = _.sampleSize(poolList,10);
}  }}
  return letterList
};



export const usesAvailableLetters = (input, lettersInHand) => {
  let flag = true;
  for(let letter of input){
      if(lettersInHand.includes(letter) === false){
      flag = false;
  break

}
  else {
      delete lettersInHand[lettersInHand.indexOf(letter)]
  }
}
  return flag
};

export const scoreWord = (word) => {
  const scoreChart = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10,
  }
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
  const lengthList = [7, 8, 9, 10]
  let score = 0
  
  for(let letter of word) {
      if(isAlpha(letter) === false) {
          score += 0;
      } else {
          score += scoreChart[letter.toUpperCase()];
      }
  }   
  if(lengthList.includes(word.length)) {
      score += 8;
  }
  
  return score
};

export const highestScoreFrom = (words) => {
let wordScores = []
let winners = []


for (let word in words){
  let highest = 0
  wordScores.push(scoreWord(words[word]))

}

let max = Math.max(...wordScores);


for (let word in words){
  if(scoreWord(words[word]) === max){
    winners.push( {
      "word": words[word],
      "score":  scoreWord(words[word])
      })
  }

 
}

if(winners.length > 1){
  if(winners[0]["word"].length === 10){
    return winners[0]}
  else if(winners[1]["word"].length === 10){
    return winners[1]}
  else if(winners[0]["word"].length < winners[1]["word"].length){
    return winners[0]}
  else{return winners[1]}
}
else{
  return winners[0]
}
}

