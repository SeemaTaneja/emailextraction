const fs = require('fs');
const file = fs.readFileSync("test.txt", "utf-8");
console.log(file);
const matches = ["@softwire.com" , "@softwire.com " , "@softwire.com\r" , "@softwire.com\n"];
let output = 0;
for (let i = 0; i < file.length ; i++ ){
    if(matches.includes(file.substring(i , i+14)))
    output += 1;  
}
console.log(output);


