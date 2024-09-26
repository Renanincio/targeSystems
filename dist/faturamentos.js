import * as fs from 'fs';
function calcularFaturamento(faturamentos) {
    const diasComFaturamento = faturamentos.filter(f => f.valor > 0);
    if (diasComFaturamento.length === 0) {
        console.log("Não há faturamento no mês.");
        return;
    }
    const menorFaturamento = Math.min(...diasComFaturamento.map(f => f.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(f => f.valor));
    const somaFaturamento = diasComFaturamento.reduce((soma, f) => soma + f.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(f => f.valor > mediaFaturamento).length;
    console.log(`Menor Faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior Faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Dias com Faturamento Acima da Média: ${diasAcimaDaMedia}`);
}
fs.readFile('./dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }
    const faturamentos = JSON.parse(data);
    calcularFaturamento(faturamentos);
});
