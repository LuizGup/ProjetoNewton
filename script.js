

console.log(`${x0}`);
console.log(`minha função é ${funcao}`);
console.log(`minha função é x ${-(entrada1)}`);

function crieFuncao(expression) {
    return function (x) {
        return eval(expression);
    };
}


let expressaoMatematica = prompt('Digite uma expressão matemática usando "x", por exemplo, "x**2 + 2*x + 1":');
let funcaoUsuario = createFunction(expressaoMatematica);

let x = parseFloat(prompt('Digite o valor de N'));
let x0 = (entrada1.toFixed(0) - 1);
console.log(`Quando x é ${x}, a expressão resulta em: ${userFunction(x)}`);

function derivada(f, x, h = 1e-5) {
    return (f(x + h) - f(x - h)) / (2 * h);
}
function funcaoQualquer(x) {
    return x - 3.1;
}
const result = derivada(funcaoQualquer, x0);
console.log(`A derivada de f(x) = x^2 + 2x no ponto x = 3 é aproximadamente ${result}`);
let funcao2 = x0 - 3.1;

let newton = entrada1 - ((funcao2) / derivada(funcaoQualquer, x0))
console.log(newton.toFixed(2));