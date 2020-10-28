// This is the example of creating back end API services without express.js
// Creating using pure node and node http module
const http = require('http');
const port = 5000;

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('<h1>HELLOO</h1>');
        res.end();

    } else if (req.url === '/name') {
        res.write('<h1>My Name is Koding</h1>');
        res.end();

    }
});

server.listen(port);
console.log(`Listening on port ${port}`)


