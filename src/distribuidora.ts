const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((soma, valor) => soma + valor, 0);

function calcularPercentuais(faturamento: { [estado: string]: number }, total: number) {
    Object.entries(faturamento).forEach(([estado, valor]) => {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    });
}

calcularPercentuais(faturamentoPorEstado, valorTotal);