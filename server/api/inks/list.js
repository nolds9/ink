// INKS#LIST
const generateList = require('./helpers/generate-list');

/**
 * Endpoint to return list of inks as JSON
 * @param {object} req request object
 * @param {object} res response object
 */
const list = (req, res) => {
  const inks = generateList();

  const response = {
    list: inks,
    totalCount: inks.length,
    generatedAt: new Date(),
  };

  res.json(response);
};

module.exports = list;
