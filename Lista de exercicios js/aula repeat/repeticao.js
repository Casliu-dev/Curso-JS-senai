//while(true){
  //  console.log("Ao infinito e... Alem!")
//}
// o while (enquanto)
// Permite criar loops que sao executados zero ou mais vezes.


// enquanto a condicao for true, executa o bloco de codigo!

//while(false){
 // console.log ("ao infinito e alem!!")
//}

//enquanto o meu contador for menor ou igual a 5, continue
/*
let contador = 1

while (contador <= 5){

    console.log("contagem:" + contador)

    contador ++

    // contador igual a 2
}


// contagem regressiva

let tempo = 10

while(tempo > 0){

    console.log(tempo)

    tempo-- // Retira 1 do tempo (mesma coisa que: tempo = tempo - 1)

}
console.log("Codigo acabou.")
*/
/*
const senhaCorreta = "resenhex67"
let tentativa = ""

while(tentativa != senhaCorreta){

    tentativa = prompt("digite a senha:")

    if(tentativa === senhaCorreta){
        console.log("senha correta parabens :")
    }

    else
       alert("senha incorreta")
    }

*/
/*
let soma = 0
let numero = 0

// while, nao if: precisa repetir ate a soma passar de 100
while (soma <= 100){

    numero = Number(prompt("informe um numero"))

    soma = soma + numero

}

alert("A soma dos numeros chegou em:" + soma)
*/

//DO - WHILE  PERMITE CRIAR LOOP QUE SAO EXECUTADOS UMA OU MAIS VEZES.
/*
let repetir = false

do{
    console.log("so uma vez")
}while(repetir) // enquanto a condicao for TRUE.

//WHILE vs DO..WHILE

let num = 10;

while(num < 5){
    console.log("Isso NAO vai aparecer.")
}

do {
    console.log("isso VAI aparecer pelo menos 1X")
}
while(num < 5)
*/

// sorteia UMA vez, antes do loop: Math.random() da 0 a 0.999...,
// x10 = 0 a 9.99, floor = 0 a 9, +1 = 1 a 10
const secret = Math.floor(Math.random() * 10) + 1;

let palpite;
let tentativas = 0;

console.log("Adivinhe o numero entre 1 e 10.")
//console.log("(gabarito: " + secret + ")") // descomente pra testar

// do..while: o primeiro palpite sempre acontece, entao testa DEPOIS
do {

    palpite = Number(prompt("Seu Palpite"))

    if(Number.isNaN(palpite)){
        alert("digite um numero valido")
        continue // volta pro inicio do loop sem contar a tentativa
    }

    tentativas++

    if (palpite === secret){
        alert("acerto miseravi KKKKKK em " + tentativas + " tentativas")
    }

    else if (palpite > secret){
        alert("muito alto! tente um numero menor")
    }

    else {
        alert("muito baixo! tente um numero maior")
    }

}
while(palpite !== secret)
