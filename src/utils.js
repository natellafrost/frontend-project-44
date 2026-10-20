const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

export default getRandomNumber;
