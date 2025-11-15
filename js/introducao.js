  'use strict'
        // alert('Hello world!!!')

        /*
            Introdução ao java
        */

        // console.log('Hello world!!!');


        /**
         * Tipos Primitivos
            String;
            Number;
            Boolean;
            Null;
            Undefined;
        */

        var nome;
        var valorCurso = 550.42;
        nome = 'Impacta';

        // console.log(valorCurso + 10.00);
        // console.log(valorCurso - 10.00);
        // console.log(valorCurso / 10.00);
        // console.log(valorCurso * 10.00);

        var idade = 10;
        var soma;
        soma = --idade;
        // console.log(soma)

        /* Concatenação e Interpolação */
        var firstName = "Camila";
        var lastName = "da Silva";

        var nomeCompletoC = firstName + ' ' + lastName;
        var nomeCompletoI = `Nome: ${firstName} ${lastName}`;
        // console.log(nomeCompletoI);


        /* Operadores relacionais */
        // Operators:  ==, ===, !=, !==, >=, >, <, <=
        // + O perador unario
        var val1 = +'10';
        var val2 = 10;
        var comparar = val1 >= val2;
        // console.log(comparar);


        /* Truthy e Falsy */
        var contrato = '';
        // console.log(!contrato)


        /* Estrutura de seleção */
        /*
            || => OU
            && => E
            !  => Não
        */

        var notaAluno = 8;
        var nomeAluno = "Paulo Enrique"
        var faltas = 10;

        // se nota >= 7 aprovado E faltas <= 5
        // se menor que <5 reprovado
        // se estiver >= 5 recuperação

        // V && F == F

        // if(notaAluno >= 7 && !(faltas <= 5)) {
        //     console.log('Aprovado')
        // }
        // else if(notaAluno >= 5 && faltas <= 5) {
        //     console.log('Recuperação')
        // } 
        // else {
        //     console.log('Reprovado')
        // }

        /* Operador Ternario */
        var resultado;
        resultado = notaAluno >= 7 ? 'Aprovado' : 'Reprovado';
        // console.log(resultado);
        // var nomeCliente = prompt('digite seu nome');
        // console.log(nomeCliente);

        /* Estrutura Léxica */
        /* São conjuntos de regras especificas sa linguagem JS */
        // Case Sensitive
        // debugger;

        /* Let para criação de variaveis */
        let contratoAluguel = 'Fechado';
        contratoAluguel = 'Aberto';

        /* Const, para criação de constantes */
        const pi = 3.41;
        let circulo = 50 * pi;
        // console.log(contratoAluguel);

        /* Array */
        const dadosPessoais = [4000, 5000, 8552, 5888, 6200, 4000, 6200, 4, 6200];

        // console.log(dadosPessoais.length);
        const result = []
        /* Estrutura de repetição - Laços */
        for(let interacao = 0; interacao < dadosPessoais.length; interacao++) {

            if (dadosPessoais[interacao] == 6200) {
                result.push(dadosPessoais[interacao])
                continue;
            }

            // console.log(dadosPessoais[interacao]);
        }

        // console.log(result);

        // let interacao = 0;
        // while(interacao < 10) {
        //     console.log('-------')
        //     console.log(interacao);
        //     interacao++;
        // }

