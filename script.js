// Calculadora JS

alert('Bem vindo a calculadora simples');
let n1 = prompt('Digite o primeiro valor:');
let op = prompt('O que deseja?\n+ SOMAR ?\n- SUBTRAIR ?\n* MULTIPLICAR ?\n/ DIVIDIR ?');
let n2 = prompt('Digite o segundo valor:');

let resultado;
if (op === '+') {
    resultado = Number(n1) + Number(n2);
} else if (op === '-') {
    resultado = Number(n1) - Number(n2);
} else if (op === '*') {
    resultado = Number(n1) * Number(n2);
} else if (op === '/') {
    resultado = Number(n1) / Number(n2);
} else {
    alert('Operação inválida.');
}

alert('O resultado é: ' + resultado);