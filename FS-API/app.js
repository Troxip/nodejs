const fs = require("fs");

// const dataBuffer = fs.readFileSync("./sample.txt");
// const content = dataBuffer.toString();
// console.log(content);

fs.readFile("./sample.txt", "utf-8", (err, content) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(content);
  }
});
