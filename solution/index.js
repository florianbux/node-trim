const {
    formatting
} = require('./formatting');

const {
    showHelp
} = require('./messaging');

const arg = process.argv.slice(2);
if (arg.includes('--help')) console.log(showHelp());
let [...str] = arg.filter(el => el !== '--help');
if (str.length > 1) str = str.join(' ');
else [str] = str;
console.log(formatting(str));