console.log("hello world");
// console.log(global);
const os = require("os");
const path = require ("path");
const {add, substract, multiply, divide } = require ("./math.js");
console.log(substract(3,6));
console.log(add(3,6));
console.log(multiply(3,6));
console.log(divide(3,6));


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));