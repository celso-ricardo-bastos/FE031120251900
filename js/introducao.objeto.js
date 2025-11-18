'use strict'

console.log('Introdução Object');

let contrato = 1;
let lista = [1, 5, 'x'];

let Pessoa = {
    nome: 'Paula da Silva',
    idade: 25,
    printDados : function() {
        let nome = this.nome;
        let idade = this.idade
        console.log(`${nome}, ${idade}`)

        this.printIdade()
    },
    printIdade() {
        console.log('metodo print idade')
    },
    endereco: [{logradouro: 'rua tamanduá', numero: 50}, {}]
};
Pessoa.nome = 'sdfasdfasd fasdf'
Pessoa.printDados()

document.location.reload()

let Pet = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pet.prototype.pegarNome = function() {
    console.log(this.nome);
}

Pet.prototype.castrado = true;

let rex = new Pet('Rex', 10);
let sofi = new Pet('Sofi', 5);

rex.pegarNome();
sofi.pegarNome();


let nome = 'Alan Ferreira dos santos';

console.log(nome.substring(0, 5))


// let teste = [10, 20]
// console.log(teste)




// if (Pessoa?.endereco[1]?.logradouro) {
//     console.log('Entrouuuuuu')
// }



// Pessoa.peso = '70kg';
// let nome = Pessoa.nome;
// let idade = Pessoa['idade'];
// Pessoa.printNome = function() {}
// Pessoa.printIdade();