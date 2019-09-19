const {
    formatting
} = require('./formatting');
const {
    showHelp
} = require('./messaging');

const [, , str] = process.argv;

if (process.argv.includes('--help')) showHelp();
formatting(str);