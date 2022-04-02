const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(+input);

function solution(n) {
    let result =0;
    for (let i =1; i<=n; i++){
        result+=i;
    }
    console.log(result);
}