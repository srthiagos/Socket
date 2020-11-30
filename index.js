const socket = require('socket.io');
const path = require('path');
const fs = require('fs');

// Serve the index.html file in root path
const root = (req, res) => {
  res.writeHead(200);
  const index = fs.createReadStream(path.join(__dirname, 'index.html'));
  index.pipe(res);
};
// Create server
const server = require('http').createServer(root);
// Start server and set to listen port 8080
server.listen(8080, () => {
  console.log('Start server in http://localhost:8080/');
});
