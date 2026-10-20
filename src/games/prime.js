import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(description, generateRound);
};

export default runPrimeGame;
