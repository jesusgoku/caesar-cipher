const caesar = require('../tools/caesar');
const { readStream } = require('../tools/stream');

async function action(shiftStr, messageArg, { dict }) {
  const { isTTY } = process.stdin;
  const shift = parseInt(shiftStr, 10);
  const message = isTTY ? messageArg : await readStream(process.stdin);
  const cipherText = caesar.encode(shift, message, { dict });

  process.stdout.write(cipherText);
}

module.exports = action;
