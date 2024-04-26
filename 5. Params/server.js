const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  const passedUrl = url.parse(req.url, true);
  const pathname = passedUrl.pathname;

  const pathComponent = pathname.split("/").filter(Boolean);
  if (pathComponent[0] === "products" && pathComponent[1]) {
    const productId = pathComponent[1];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Products ID ${productId}`);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Not Found`);
  }
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

gfd;
