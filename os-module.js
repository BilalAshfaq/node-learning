const os = require('os');

console.log(os.userInfo());

console.log(`System uptime is ${os.uptime()} seconds`);

console.log( {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
});