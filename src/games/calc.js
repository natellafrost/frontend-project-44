import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];

const calculate = (left, right, operator) => {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const left = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const right = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];

  const question = `${left} ${operator} ${right}`;
  const correctAnswer = String(calculate(left, right, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGame(description, generateRound);
};

export default runCalcGame;
