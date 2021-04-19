/**
 * @typedef {Object} CaesarEncodeOptions
 * @property {string} [dict=abcdefghijklmnopqrstuvwxyz] - The dict used for encode
 */

/**
 * @typedef {Object} CaesarDencodeOptions
 * @property {string} [dict=abcdefghijklmnopqrstuvwxyz] - The dict used for encode
 */

/**
 * Encode message with Caesar code
 *
 * @param {number} shift - The number of position shift dict
 * @param {string} message - The message to encode
 * @param {CaesarEncodeOptions} options - The caesar encode options
 *
 * @returns {string}
 */
function encode(
  shift,
  message,
  { dict: dictStr = 'abcdefghijklmnopqrstuvwxyz' } = {}
) {
  // const dict = dictStr.split('');
  // const targetDict = dict.slice(shift).concat(dict.slice(0, shift));
  // const targetDictStr = targetDict.join('');

  return message
    .split('')
    .map((char) => {
      const normalizedChar = char.toLowerCase();
      const isLowerCase = normalizedChar === char;
      const charPosition = dictStr.indexOf(normalizedChar);
      const cipherChar =
        charPosition !== -1
          ? dictStr.charAt((charPosition + shift) % dictStr.length)
          : char;
      // const cipherChar = targetDictStr.charAt(dictStr.indexOf(char));

      return isLowerCase ? cipherChar : cipherChar.toUpperCase();
    })
    .join('');
}

/**
 * Decode message with Caesar code
 *
 * @param {number} shift - The number of position shift dict
 * @param {string} message - The message to decode
 * @param {CaesarDecodeOptions} options - The caesar decode options
 *
 * @returns {string}
 */
function decode(
  shift,
  message,
  { dict: dictStr = 'abcdefghijklmnopqrstuvwxyz' } = {}
) {
  return message
    .split('')
    .map((char) => {
      const normalizedChar = char.toLowerCase();
      const isLowerCase = normalizedChar === char;
      const charPosition = dictStr.indexOf(normalizedChar);
      const cipherChar =
        charPosition !== -1
          ? dictStr.charAt(
              (dictStr.length + charPosition + -shift) % dictStr.length
            )
          : char;
      // const cipherChar = targetDictStr.charAt(dictStr.indexOf(char));

      return isLowerCase ? cipherChar : cipherChar.toUpperCase();
    })
    .join('');
}

function crack(message, { dict: dictStr = 'abcdefghijklmnopqrstuvwxyz' } = {}) {
  const plainTexts = [];

  for (let i = 0; i < dictStr.length; ++i) {
    plainTexts.push(decode(i, message));
  }

  return plainTexts;
}

module.exports = {
  encode,
  decode,
  crack,
};
