/*

 Desenvolva um sistema de compra onde o usuario digitará:
    - nome do produto 
    - Quantidade de produto que comprou
    - valor de uma unidade
    - nome do cliente

    Seu programa deverá calcular o total da compra  e imprimir as informações da compra:

    Exemplo de saida
    ###############################

    Produto: xxxxx
    Valor Unitario: xxxx
    Total da compra (com imposto): xxxxx
    Imposto cobrado: 20%

    -------------------------------------
    Obrigado e volte sempre.

    var nomeCliente = prompt('digite seu nome');

    Imposto sobre total da compra
    Caucule um imposta de 20% sobre o total da compra

    Formuala = totalCompra + totalCompra * 0.2
*/

const imposto = 0.2;
const camposSaida = [
    'Produto: ',
    'Valor Unitario: ',
    'Total da compra: ',
    'Imposto cobrado: 20%',
];
const produtos = [
    ['Sabão', 2.00], // cod 1
    ['Leite', 5.00], // cod 2
    ['Açucar',5.50], // cod 3
];

const dados = [];

const mensagens = [
    'codigo do produto',
    'digite a quantidade',
];

for(let i = 0; i < mensagens.length; i++) {
    let dado = prompt(mensagens[i]) 
    dados.push(dado);
}

const cod = dados[0];
const produtoSelecionado = produtos[cod - 1]
const totalCompraSemImposto = (dados[1] * produtoSelecionado[1]);
const totalComImposto = totalCompraSemImposto + totalCompraSemImposto * imposto;

console.log(`${camposSaida[0]} ${produtoSelecionado[0]}`);
console.log(`${camposSaida[1]} ${produtoSelecionado[1]}`);
console.log(`${camposSaida[2]} ${totalComImposto}`);
console.log(`${camposSaida[3]}`);
