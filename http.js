const http = require('http');

const server = http.createServer((req, res) => {
  console.log('url: ' + req.url);
  if (req.url === '/rizwan') {
    res.end('My name is Rizwan');
  } else {
    res.end('<h1>Hello Rizwan</h1>');
  }
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
