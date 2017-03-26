const source = require('../../../data/startups.json');
const shuffle = require('../../../../app/utils/common-helpers');

const { services, targets, randoms } = source.data;
const shuffledServices = shuffle(services);
const shuffledTargets = shuffle(targets);
const shuffledRandoms = shuffle(randoms);

const generateList = () => shuffle(
  shuffledServices
    .map((service, i) => `${service} for ${shuffledTargets[i] ? shuffledTargets[i] : 'millennials'}`)
    .concat(shuffledRandoms)
).filter((s) => s);

module.exports = generateList;
