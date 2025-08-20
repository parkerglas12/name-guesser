import CryptoJS from "crypto-js";
import gameData from "../assets/game-data.json";

// PERSON CLASS
class Person {
  constructor(imgOne, imgTwo, answers, difficulty, question, hints) {
    this.imgOne = imgOne;
    this.imgTwo = imgTwo;
    this.answers = answers;
    this.difficulty = difficulty;
    this.question = question;
    this.hints = hints;
  }
}

// NO CHEATING, UNLESS...
const secretKey = import.meta.env.VITE_ENCRYPTION_KEY;
const decryptedData = gameData.map((cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedText);
});

// GAME DATA MAP
const info = new Map(
  decryptedData.map((entry) => [
    entry.question,
    new Person(
      `${entry.question}.webp`,
      `${entry.question}(2).webp`,
      entry.answers,
      entry.difficulty,
      entry.question,
      entry.hints
    ),
  ])
);

// GAME FUNCTIONS
export function getInfoMap() {
  return info;
}

export function getGameContents(myMap, diffLevel) {
  while (true) {
    let keysArray = [...myMap.keys()];
    let randomIndex = Math.floor(Math.random() * keysArray.length);
    let randomKey = keysArray[randomIndex];
    let question = myMap.get(randomKey);
    if (question.difficulty.length === diffLevel) {
      return question;
    } else {
      continue;
    }
  }
}
