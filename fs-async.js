const {readFile, writeFile} = require('fs');

console.log('Starting ...');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    console.log('Starting  second read...');
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        console.log('Starting write...');
        writeFile('./content/fourth.txt', `Combined: ${first},  ${second}`, {flag: 'a'}, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
        });
    } );

});
console.log('Ending ...');