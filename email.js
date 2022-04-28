const { match } = require('assert');
const fs = require('fs');
const file = fs.readFileSync("test.txt", "utf-8");
console.log(file);
const matches = ["@softwire.com", "@softwire.com " , "@softwire.com\r" , "@softwire.com\n"];
let output = 0;
for(let i = 0; i<file.length; i++){
    if(matches.include(file.substring(i , i+14)))
    output +=1 ;
}
console.log(output);
const emailRegex = /(@softwire.com)\b/g;
const result = file.match(emailRegex);
console.log(result.length);


const emailGeneral = /(@gmail.com)\b/g;
const count = file.match(emailGeneral);
console.log(count.length);

const emailTech = /(@techswitch.co.uk)\b/g;
const number = file.match(emailTech);
console.log(number.length);


