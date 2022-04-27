const fs = require('fs');
const file = fs.readFileSync("test.txt", "utf-8");
console.log(file);
const emailRegex = /(@softwire.com)\b/g;
const result = file.match(emailRegex);
console.log(result.length);


