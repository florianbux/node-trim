const {
    showHelp
} = require('./messaging');

module.exports.formatting = (str) => {
    str = removeSymbols(str);
    if (str === '') {
        return showHelp(`There's something wrong with your Input.`);
    }
    str = str.trim();
    while (str.includes('  ')) str = str.split('  ').join(' ');
    return capitalizeInitial(str);
}

capitalizeInitial = (str) => {
    if (str.includes(' ')) {
        let res = [];
        str = str.split(' ')
        for (word of str) {
            res.push(word[0].toUpperCase().concat(word.toLowerCase().slice(1, word.length)));
        }
        return res.join(' ');
    } else return str[0].toUpperCase().concat(str.toLowerCase().slice(1, str.length));
}

removeSymbols = (str) => {
    return str.replace(/[^a-zA-Z ]/g, "");
}