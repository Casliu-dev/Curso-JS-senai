// == compara valor
// === compara valor e tipo
// = atribuicao


//let numero1 = Number(prompt("primeiro numero"))
//let numero2 = Number(prompt("segundo numero"))
// o prompt converte para texto


//colocar () se o codigo tiver mais de uma 

//let media = (numero1 + numero2) / 2 

//let peso = Number(prompt("Peso (Kg): "))
//let altura = Number(prompt("Altura (m)"))

//let imc = peso / (altura ** 2)

//alert(imc)


//if (imc <= 18){
//    alert('baixo')
//}
//else if (imc > 18 && imc <= 24){
  //  alert ("normal")    
//}
//else{
    //alert ("sobrepeso")
//

//let idade = Number(prompt("qual sua idade"))

//if (idade >= 18){
//    alert("vc e maior de idade")
//}

//else if (idade < 18){
 //   alert("Vc e menor de idade")
//}


//let number = Number(prompt("Qual seu Numero?"))

//if (number >= 1){
 //   alert("Seu numero e positivo")
//}

//else if (number <= 0){
   // alert("Seu numerp e negativo")
//}



//let notafinal = Number(prompt("Qual foi sua nota neste teste?"))

//if (notafinal >= 60){
//    alert("Voce passou!")
//}
//else{
 //   alert("vc nao passou :(")
//}

//let number = Number(prompt("qual seu numero?"))

//if (number >= 1){
 //   alert ("seu numero e positivo")
//}

//else if (number <= -1){
//    alert("seu numero e negativo")
//}

//else {
//    alert("zero")
//}

// let age = Number(prompt("qual sua idade?"))

// if (age >=0 && age <=12 ){
    // alert("vai jogar seu fortnite")
// }

// else if  (age >=13 && age <=17){
    // alert("vai escutar deftones brozinho")

// } else if (age >= 18) {
    // alert("adulto")
// }

// 6

//  let number = Number(prompt("qual seu numero?"))

// if (number % 2 === 0) {
    // alert("O Numero e par")
// }
// else {
    // alert("o numero e impar")
// }

// intermediario    passo 1

/*let number1 = Number(prompt("Qual seu primeiro Numero?"))
let number2 = Number(prompt("Segundo Numero)"))
let operacao = prompt("digite a operacao (+, -, *, /) ")

let resultado

if (operacao === "+"){
    resultado = number1 + number2
    alert(resultado)
}
else if (operacao === "-"){
    resultado = number1 - number2
    alert(resultado)
}
else if (operacao === "*"){
    resultado = number1 * number2
    alert(resultado)
}
else if (operacao === "/"){
    resultado = number1 / number2
    alert(resultado)
}
else{
    alert("Erro")
}

if ( numero 2 == 0 ) {

    alert("Nao foi possivel realizar a operacao")

} 
*/

// 3 - Desconto em compras


/*let buy = Number(prompt("Qual o valor da compra? R$"))

let valorFinal


if (buy > 100) {
    
    valorFinal = buy - (buy * 0.10)
    alert("Compra com 10% de desconto! Valor a pagar: R$ " + valorFinal.toFixed(2))
}

else {
    valorFinal = buy
    alert("Sem desconto. Valor a pagar: R$ " + valorFinal.toFixed(2))
}
*/

/*let user = prompt("qual seu usuario?")
let password = prompt("Qual sua senha?")



if (user === "admin" && password === "1234") {
    alert("Login bem-sucedido")
}

else {
    alert("Acesso negado")
}

*/

let lado1 = Number(prompt("Qual o primeiro lado?"))
let lado2 = Number(prompt("Qual o segundo lado?"))
let lado3 = Number(prompt("Qual o terceiro lado?"))


if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {

    if (lado1 === lado2 && lado2 === lado3) {
        alert("Equilatero")
    }

    else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        alert("Isosceles")
    }

    else {
        alert("Escaleno")
    }
}

else {
    alert("Nao e possivel formar um triangulo")
}
