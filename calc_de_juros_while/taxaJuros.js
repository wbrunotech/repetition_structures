// Calculadora de Juros que construi usando o laço " while " de repetição.

let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

while ( contador <= parcelas_totais ) {

    let numero_parcela = contador;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) será de R$" + juros_emprestimo + ",00");

    contador++;

}

// No console será impresso:
// A taxa de juros no período de 1 mes(es) será de R$60,00
// A taxa de juros no período de 2 mes(es) será de R$120,00
// A taxa de juros no período de 3 mes(es) será de R$180,00
// A taxa de juros no período de 4 mes(es) será de R$240,00
// A taxa de juros no período de 5 mes(es) será de R$300,00