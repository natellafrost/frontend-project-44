import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 10;

const buildProgression = (start, step, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(start + index * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomNumber(MIN_START, MAX_START);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);

  const progression = buildProgression(start, step, length);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(description, generateRound);
};

export default runProgressionGame;
