const http = require("http");
const url = require("url");

const requestHandler = (req, res) => {
  const data = {
    id: 123,
    name: "Agnes Appiah",
    email: "Agnes@gmail.com",
  };

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
