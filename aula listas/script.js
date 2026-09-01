//  //ARRAY
// // UM ARRAY E UM TIPO DE DADOS QUE SERVE PARA ARMAZENAR MAIS DE UM VALOR EM UMA UNICA VARIAVEL. 
// // ELES SAO REPRESENTADOS POR COLCHETES [] E SEUS ELEMENTOS SAO SEPARADOS POR VIRGULA.

// //ITENS COMECAM DO NUMERO ZERO.

//     const numeros = [1, 2, 3, 4, 5]
//     const nomes = ["Lucas", "Joao", "Maria", "Jose", "Pedro", "Paulo", "Carla", "Ana", "Beatriz", "Camila", "Daniel", "Eduardo", "Fernanda", "Gabriel", "Heloisa", "Isabela", "Juliana", "Karla", "Larissa", "Mariana"]

// //na minha lista de numeros
// //eu quero a posicao zero

// // console.log(numeros[0])

// // console.log(nomes[0])

// //lenght
// //e uma propriedade que retorna a quantidade de elementos de um array.

//     console.log(nomes.length)  //adicionando elementos a um array

// for (let i = 0; i < nomes.length; i++) {

//    console.log(nomes[i])

// }

// const frutas = ["banana", "maça", "pera", "uva", "abacaxi"]

// for ( const fruta of frutas) {
//     console.log(fruta)
// }

// const listaNumeros = [10,25,8,42,15,7]

// let soma = 0;

//of listanumeros - percorra toda a lista!

for ( const numero of listaNumeros ){
    soma += numero
}

console.log("Numeros ", listaNumeros)
console.log("Soma ", soma)



const ListaNota = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5]
//utilize o for of e retorne a maior nota da lista

let maiorNota = ListaNota[0];

for (const nota of ListaNota) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
}
console.log("Maior nota: ", maiorNota);