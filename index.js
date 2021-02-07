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

// Create Socket instance
const io = socket(server);

/**
 * Start a session of socket when client try connect
 */
io.on('connection', (socket) => {
  console.log('Connect');

  /**
   * Listen events from client, and submit backend response
   */
  socket.on('new message from client', (event) => {
    console.log('Recive data from client', event);
    socket.emit('new message from server', event);
  });

  /**
   * Display disconnect reason
   */
  socket.on('disconnect', (reason) => {
    console.log('Disconnect reason', reason);
  });
});

// Start server and set to listen port 8080
server.listen(8080, () => {
  console.log('Start server in http://localhost:8080/');
});
