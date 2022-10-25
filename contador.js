/*
Faça um algoritmo que leia 5 números inteiros usando a estrutura
de repetição FOR, no final informe qual é o maior deles.
*/

var numero
var maiorNumero = 0

for (var contador = 0; contador < 5; contador++) {
    numero = parseInt(prompt("Digite um número"))

    if(numero >= maiorNumero){
        maiorNumero = numero
    }  
}
console.log("O maior numero é: ", maiorNumero )