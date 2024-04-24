const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
const http = require("http");
const url = require("url");
