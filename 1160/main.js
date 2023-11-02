var input = require('fs').readFileSync('C:/Users/Luciano/OneDrive/Documentos/Bee/1160/stdin.txt', 'utf8');

var lines = input.split('\n')
let T = parseInt(lines[0])

let anos
 for(let i =1 ;i <= T; i++){

 let [PA, PB, G1, G2 ] = lines[i].split(" ");
    PA = parseInt(PA)
    PB = parseInt(PB)
    G1 = parseFloat(G1).toFixed(1)
    G2 = parseFloat(G2).toFixed(1)

    anos = 0;
    G1 /=100;
    G2 /=100;

    while(PA <= PB){

        PA += PA*G1; 
        PB += PB*G2; 
        PA = parseInt(PA)
        PB = parseInt(PB)
        anos++;
        if(anos > 100){
            break;
        }
    }

    if(anos <= 100){
        console.log(anos + " anos.");
    }
    else{
        console.log("Mais de 1 seculo.");
    }

 }


