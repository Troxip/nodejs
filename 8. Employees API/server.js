const http = require("http");
//mimic (database)
const employees = [
  { id: 1, name: "Emmanuael" },
  { id: 2, name: "Gustav" },
  { id: 3, name: "Agnes" },
];

const requestHandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];

  //Get all employess
  if (method === "GET" && url === "/employees") {
    res.writeHeader(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }
  //Get single employee
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      res.writeHeader(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(employee));
    } else {
      res.writeHeader(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Employee not found" }));
    }
  }
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
