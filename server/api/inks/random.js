// INKS#RANDOMS
const generateList = require('./helpers/generate-list');

/**
 * Endpoint to return one random ink as JSON
 * @param {object} req request object
 * @param {object} res response object
*/
const random = (req, res) => {
  const sample = generateList()[0];

  const response = {
    ink: sample,
    generatedAt: new Date(),
  };

  res.json(response);
};

module.exports = random;
