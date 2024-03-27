const isOddNumber = require('./isOddNumber')
const randomColor = require('./randomColor')
const generateUUID = require('./generateUUID')
const shuffleArray = require('./shuffleArray')

module.exports = (arr) => {
    return Math.min(...arr);
  }