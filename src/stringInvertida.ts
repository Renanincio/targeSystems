function inverterString(str: string): string {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

const original = "Exemplo de string";
const invertida = inverterString(original);

console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);
