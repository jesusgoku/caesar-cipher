const caesar = require('../tools/caesar');
const { readStream } = require('../tools/stream');

async function action(messageArg, { dict }) {
  const { isTTY } = process.stdin;
  const message = isTTY ? messageArg : await readStream(process.stdin);
  const plainTexts = caesar.crack(message, { dict });

  console.table(plainTexts);
}

module.exports = action;
