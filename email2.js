
const fs = require('fs');
const file = fs.readFileSync("test.txt", "utf-8");
console.log(file);
const allEmail = /\b(\S+)@(\S+)\b/g;
const matches = file.match(allEmail);
const count = {};
console.log(matches.length);
for ( let i = 0 ; i <matches.length ; i++ ){
    const result = matches[i];
    const atsignIndex = result.indexOf('@');
    const domain = result.slice(atsignIndex + 1);
    console.log(domain);
    if(count[domain] === undefined){
        count[domain] = 1;
    }else{
        count[domain] += 1;
    }
}
console.log(count);

