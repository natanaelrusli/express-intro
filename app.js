// This is the example of creating back end API services without express.js
// Creating using pure node and node http module
const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('HELLOO');
        res.end();
    }
});

const port = 5000;
server.listen(port);
console.log(`Listening on port ${port}`)


