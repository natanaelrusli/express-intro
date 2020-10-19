// This is the example of creating back end API services without express.js

const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('HELLOO');
        res.end();
    }
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`)


