const fs = require('fs');
const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
  fs.readFile('./blog.html', (err, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
