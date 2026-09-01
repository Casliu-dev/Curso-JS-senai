// 1 nivel basico: crie um programa que exiba todos os numeros de 1 ate 10, um por linha

/*
let number = 1

while (number <= 10){
    console.log(`${number}`);
    number++
}
*/
/*
let question = Number(prompt("Qual seu numero?"))

for (let i = 1; i <= 10; i++) {
    console.log(`${question} x ${i} = ${question * i}`)

}
*/

/*
    const question = Number(prompt("Qual seu numero?"))

    function tabuada(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
    }
    tabuada(question)
    */

    /* 3. Soma dos primeiros N números
Solicite um número inteiro positivo ao usuário e calcule a soma de todos os números de 1 até esse valor.
Exemplo:
Entrada: 5 
Saída: 15 
(1 + 2 + 3 + 4 + 5 = 15)
*/
/*
const question = Number(prompt("Digite um numero inteiro positivo:"))

let soma = 0

for (let i = 1; i <= question; i++) {
    soma += i
}

console.log(`A soma de 1 ate ${question} e ${soma}`)
*/

/*
🟡 Nível Intermediário
4. Números pares de 1 a 50
Exiba todos os números pares entre 1 e 50, um por linha.
*/
/*
function number() {
    for (let i = 2; i <= 50; i += 2) {
        console.log(i)
    }
}
number()
*/

/*
for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}
    */


/*
5. Jogo de adivinhação
Crie um programa que gere um número aleatório entre 1 e 100
*/
/*
for (let i = 1; i <= 5; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = Number(prompt("Adivinhe o número entre 1 e 100:"));
    
    if (guess === randomNumber) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log(`Errado! O número correto era ${randomNumber}.`);
    }
}
    */

/*
6. Contagem regressiva
Solicite um número inteiro ao usuário e faça uma contagem regressiva até 0, exibindo cada número.
Exemplo:
Entrada:
5
Saída:
5
4
3
2
1
0
*/

//for (let i = 5; i >= 0; i--) {
 //   console.log(i)
//}

/*
7. Soma dos dígitos
Solicite um número inteiro positivo ao usuário e calcule a soma de todos os seus dígitos.
Exemplo:
Entrada: 1234 
Saída: 10 
(1 + 2 + 3 + 4 = 10)
*/
/*
for (let i = 1; i <= 5; i++) {
    const number = prompt("Digite um número inteiro positivo:");
    let sum = 0;

    for (let digit of number) {
        sum += parseInt(digit);
    }

    console.log(`A soma dos dígitos de ${number} é ${sum}.`);
}
    */

/*
8. Fatorial
Solicite um número inteiro positivo ao usuário e calcule o seu fatorial.
O fatorial de um número é obtido multiplicando esse número por todos os inteiros positivos menores que ele, até chegar em 1.
Exemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120 
4! = 4 × 3 × 2 × 1 = 24 
3! = 3 × 2 × 1 = 6 
Ao final, exiba o resultado do cálculo.
*/
/*
for (let i = 1; i <= 5; i++) {
    const number = Number(prompt("Digite um número inteiro positivo:"));
    let factorial = 1;

    for (let j = 1; j <= number; j++) {
        factorial *= j;
    }

    console.log(`O fatorial de ${number} é ${factorial}.`);
}
    */


/* 9. Inverter número
Solicite um número inteiro positivo ao usuário e exiba esse número com seus dígitos na ordem inversa.
Exemplo:
Entrada: 12345 
Saída: 54321 
*/
/*
for (let i = 1; i <= 5; i++) {
    const number = prompt("Digite um número inteiro positivo:");
    const reversedNumber = number.split('').reverse().join('');
    console.log(`O número ${number} invertido é ${reversedNumber}.`);
}
    */

/*10. Números perfeitos até 1000
Um número perfeito é aquele cuja soma de todos os seus divisores positivos, exceto ele mesmo, é igual ao próprio número.
Exemplo:
Divisores de 6: 1, 2 e 3 
1 + 2 + 3 = 6 
Crie um programa que encontre e exiba todos os números perfeitos entre 1 e 1000.

*/
for (let num = 1; num <= 1000; num++) {
    let sumOfDivisors = 0;

    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            sumOfDivisors += divisor;
        }
    }

    if (sumOfDivisors === num) {
        console.log(`${num} é um número perfeito.`);
    }
}