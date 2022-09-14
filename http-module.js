const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.end("Welcome to our home page");
    }

    else if(req.url === '/about'){
        res.end("We have a history of 30 years");
    }
    else{
    res.end(`
    <h1>Page not found 404</h1>
    <p>Requested page does not exist</p>
    <p>Proceed back to <a href = '/'>home page</a></p>
    `);
    }
});

server.listen(4444);