// Import http pacquage
const http = require('http');
// Import fs
const fs = require('fs');
// Set port
const PORT = process.env.PORT || 5000;

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(
    200,
    { 'Content-Type': 'text/html' }
  );
  fs.readFile('index.html', (error, data) => {
    if(error) {
      res.writeHead(404);
      res.write(`Error: File Not Found`)
    } else {
      res.write(data);
    }

    res.end();
  })

  // res.write('Hello Node');
});

server.listen(PORT, (error) => {
  if(error) {
    console.log('Oups... Something went wrong');
  } else {
    console.log(`Server running on PORT ${PORT}`);
  }
});