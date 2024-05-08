let x0 = 2.9;
const tol = 0.01;
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




