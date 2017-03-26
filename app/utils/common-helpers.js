/**
 * Returns a shuffled copy of an array
 * @param {Array} arr - list of items to shuffle.
 */
const shuffle = (arr) => {
  const copy = [].concat(arr);

  for (let i = copy.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [copy[i - 1], copy[j]] = [copy[j], copy[i - 1]];
  }

  return copy;
};


module.exports = shuffle;
