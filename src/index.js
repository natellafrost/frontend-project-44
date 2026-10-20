import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const ROUNDS_COUNT = 3;

const runGame = (description, generateRound) => {
  const name = greetUser();
  console.log(description);

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
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

export default runGame;
