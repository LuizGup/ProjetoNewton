let x0 = 2.9;
const tol = 0.0001; 
const h = 0.00001 * tol;

function f(x) {
    return - 0.0024 * Math.pow(x, 7) + 0.0767 * Math.pow(x, 6) - 1.483 * Math.pow(x, 5) + 18.0422 * Math.pow(x, 4) - 136.0762 * Math.pow(x, 3) + 597.7246 * Math.pow(x, 2) - 1312.3865 * x + 924.8585;
}

function F(x) {
    return (f(x + h) - f(x)) / h;
}

let xn;
let i = 1;

while (true) {
    xn = x0 - f(x0) / F(x0);
    let erro = Math.abs(xn - x0);

    if (erro <= tol) {
        break;
    } else {
        x0 = xn;
        i++;
    }
}

console.log(`Solução por Newton-Raphson: ${xn.toFixed(4)}`);
console.log(`Quantidade de iterações: ${i}`);

// const tolerancia = 0.01;
// let N = parseFloat(prompt('Digite o valor de N'));
// let x0 = (Math.trunc(N)-1);
// console.log(`${x0}`);

// function derivada(f, x, h = 1e-5) {
//     return (f(x + h) - f(x - h)) / (2 * h);
// }
// function funcaoQualquer(x) {
//     return x-N;
// }

// const result = derivada(funcaoQualquer, x0);
// console.log(`A derivada de f(x) = x^2 + 2x no ponto x = 3 é aproximadamente ${result}`);
// let funcao2 = x0-N;

// for(let i=1;i<=5;i++){
//     let x1 = x0-((funcao2)/derivada(funcaoQualquer, x0))
//     console.log(x1.toFixed(2));
//     x0=(x1);
//     console.log(`meu x0 é ${x0.toFixed(2)}`)

// }