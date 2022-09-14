const {readFileSync, writeFileSync} = require('fs');

console.log('Starting ...');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/third.txt', `Combined: ${first},  ${second}`, {flag: 'a'});

console.log('Ending ...');

