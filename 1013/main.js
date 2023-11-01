var input = require('fs').readFileSync('C:/Users/Luciano/OneDrive/Documentos/Bee/1013/stdin.txt', 'utf8');


const [a,b,c] = input.split(' ').map(num => parseInt(num))

const maiorAB  = (a + b + Math.abs(a-b)) /2
const maiorBC= (c + maiorAB + Math.abs(c-maiorAB)) /2

console.log(maiorBC +' eh o maior')