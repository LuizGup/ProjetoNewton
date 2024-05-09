
function aluno() {
    let nomeDoAluno = document.getElementById('nomeDoAluno').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    if (!nomeDoAluno) {
        alert('Preencha o nome');
        return;
    }
    if (!nota1 || nota1>10) {
        alert('Preencha o primeiro número ou sua nota não pode ser maior que 10');
        return;
    }
    if (!nota2 || nota2>10) {
        alert('Preencha o primeiro número ou sua nota não pode ser maior que 10');
        return;
    }
    if (!nota3 || nota3>10) {
        alert('Preencha o primeiro número ou sua nota não pode ser maior que 10');
        return;
    }


    function somar(a, b, c) {
        return a + b + c;
    }
    function dividir(a, b) {
        return a / b;
    }

    document.getElementById('resultado').innerHTML = `${nomeDoAluno}, olá! Sua nota da prova 1 é ${nota1}, da prova 2 é ${nota2} e da prova 3 é ${nota3} <br><br> Sua média é ${dividir(somar(nota1, nota2, nota3), 3)}`

}