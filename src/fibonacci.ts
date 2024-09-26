import * as readline from 'readline/promises';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    
    const input = await rl.question("Insira um número e descubra se ele pertence à sequência de Fibonacci: ");
    
    
    const n = parseInt(input);

    if (isNaN(n)) {
        console.log("Por favor, insira um número válido.");
        rl.close();
        return;
    }

   
    let t1 = 0;
    let t2 = 1;
    let t3 = 0;

    
    if (n === 0 || n === 1) {
        console.log("O número faz parte da sequência de Fibonacci.");
    } else {
       
        while (t3 < n) {
            t3 = t1 + t2;
            t1 = t2;
            t2 = t3;
        }

        
        if (t3 === n) {
            console.log("O número faz parte da sequência de Fibonacci.");
        } else {
            console.log("O número não faz parte da sequência de Fibonacci.");
        }
    }

    
    rl.close();
}

main();
