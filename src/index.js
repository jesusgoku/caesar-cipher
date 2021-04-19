const { Command } = require('commander');

const pkg = require('../package.json');
const encodeAction = require('./commands/encode');
const decodeAction = require('./commands/decode');
const crackAction = require('./commands/crack');

const app = new Command();

app.version(pkg.version);

app
  .command('encode <shift> [message]')
  .option('-d, --dict <dict>')
  .action(encodeAction);

app
  .command('decode <shift> [message]')
  .option('-d, --dict <dict>')
  .action(decodeAction);

app.command('crack [message]').action(crackAction);

app.parse();
