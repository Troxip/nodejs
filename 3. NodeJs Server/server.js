const http = require("http");
// console.log(http);

const requestHandler = (req, res) => {
  console.log(res);

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world");
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

const http = require("http");
// console.log(http);

const requestHandler = (req, res) => {
  console.log(res);

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world");
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
