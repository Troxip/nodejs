const { error } = require("console");
const fs = require("fs");

// const dataBuffer = fs.readFileSync("./sample.txt");
// const content = dataBuffer.toString();
// console.log(content);

// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   } else {
//     console.log(content);
//   }
// });

// fs.writeFile("./new.txt", "some new contentffff", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File has been written");
//   }
// });

// fs.appendFile("./new.txt", " Appended content", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File content appended");
//   }
// });

// fs.access("./new.txt", fs.constants.F_OK, (error) => {
//   if (error) {
//     console.log("File does not exist");
//   } else {
//     console.log("File exists");
//   }
// });

// fs.unlink("./new.txt", (err) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("File deleted");
//   }
// });
