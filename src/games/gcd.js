import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const gcd = (left, right) => {
  let a = left;
  let b = right;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const generateRound = () => {
  const left = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const right = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

  const question = `${left} ${right}`;
  const correctAnswer = String(gcd(left, right));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(description, generateRound);
};

export default runGcdGame;
