// server.js (For a minimal example)
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Jenkins deployed Kubernetes! Build: ' + process.env.BUILD_ID + '\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
