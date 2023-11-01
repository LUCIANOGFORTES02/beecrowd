var input = require('fs').readFileSync('C:/Users/Luciano/OneDrive/Documentos/Bee/1021/stdin.txt', 'utf8');

let value = parseFloat(input)
let x;
//Notes de 100,50,20,5,2 
//coins de 1, 0.50, 0.25, 0.10, 0.05 and 0.01
console.log("NOTAS:")


    x = value/100
    x = parseInt(x)
    value = value%100
    console.log(x + " nota(s) de R$ 100.00")


    x = value/50
    x = parseInt(x)
    value= value%50
    console.log(x + " nota(s) de R$ 50.00")


    x = value/20
    x = parseInt(x)
    value= value%20
    console.log(x + " nota(s) de R$ 20.00")


    x = value/10
    x = parseInt(x)
    value= value%10
    console.log(x + " nota(s) de R$ 10.00")


    x = value/5
    x = parseInt(x)
    value= value%5
    console.log(x + " nota(s) de R$ 5.00")


    x = value/2
    x = parseInt(x)
    value= value%2
    console.log(x + " nota(s) de R$ 2.00")

console.log("MOEDAS:")

    x = value/1
    x=parseFloat(x)
    value = value %1
    console.log(Math.floor(x)  + " moeda(s) de R$ 1.00")

    x = value/0.50
    x=parseFloat(x)
    value= value%0.50
    console.log(Math.floor(x)  + " moeda(s) de R$ 0.50")

    x = value/0.25
    x=parseFloat(x)
    value= value%0.25
    console.log(Math.floor(x)  + " moeda(s) de R$ 0.25")

    x = value/0.10
    x=parseFloat(x)
    value= value%0.10
    console.log(Math.floor(x)  + " moeda(s) de R$ 0.10")

    x = value/0.05
    x=parseFloat(x)
    value= value%0.05
    console.log(Math.floor(x)  + " moeda(s) de R$ 0.05")

    x = value/0.01
    x=parseFloat(x)
    value= value%0.01
    console.log(x.toFixed(0) + " moeda(s) de R$ 0.01")

