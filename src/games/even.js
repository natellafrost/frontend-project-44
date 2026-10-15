import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const ROUNDS_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

const runEvenGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;
