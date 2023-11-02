var input = require('fs').readFileSync('C:/Users/Luciano/OneDrive/Documentos/Bee/1042/stdin.txt', 'utf8');

var value = input.split(" ").map(x=>parseInt(x));
//Pode ser das duas formas
let valueback = value.slice()//Slice realiza uma cópia rasa
let back = [... value]//Operador de propagação

//console.log (valueback)
value.sort(function(a,b){
    return a - b ;
})
for( let i of value){
    console.log(i)
    }
console.log();
for( let i of back){
console.log(i)
}
