const socket = require('socket.io');
const path = require('path');
const fs = require('fs');

const root = (req, res) => {
  res.writeHead(200);
  const index = fs.createReadStream(path.join(__dirname, 'index.html'));
  index.pipe(res);
};

const server = require('http').createServer(root);
server.listen(8080, () => {
  console.log('Start server in http://localhost:8080/');
});
