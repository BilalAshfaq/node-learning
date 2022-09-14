const path = require('path');

console.log(path.sep);

const relativePath = path.join('/content', 'subfolder', 'file.txt');

console.log(relativePath);
console.log(path.basename(relativePath));

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'file.txt');
console.log(absolutePath);