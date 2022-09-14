const fs = require('fs');

// fs.watch("tr.txt", () => {
//     console.log("File Changed");
// });

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile("tr.txt", (err, data) => {
    if(err) errHandler(err);
    dataHandler(data);
    console.log("This will come last!");
});

// let data = fs.readFileSync("tr.txt");
// console.log(data.toString());
console.log("This will come first!");