const caesar = require('../tools/caesar');
const { readStream } = require('../tools/stream');

async function action(shiftStr, messageArg, { dict }) {
  const { isTTY } = process.stdin;
  const shift = parseInt(shiftStr, 10);

  const message = isTTY ? messageArg : await readStream(process.stdin);

  const plainText = caesar.decode(shift, message, { dict });

  process.stdout.write(plainText);
}

module.exports = action;
