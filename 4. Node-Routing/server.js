const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);
  console.log(req.method);
  if (passedUrl.pathname === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the homepage");
  } else if (passedUrl.pathname === "/about" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to about page");
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
