/* soluçaõ 1
function converteDolar(){
    
    let valorDolar = document.getElementById('valorDolar').value;
    let converteReal = valorDolar * 4.97;
    let resultado = document.getElementById('resultado')
    resultado.innerText = `O valor convertido em reais é R$ ${converteReal}`
    resultado.style.color = 'red';
} */


/* Solução 2
function converteDolar(){
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let valorDolar = document.getElementById('valorDolar').value;
    let converteReal = valorDolar * cotacaoDolar;
    let resultado = document.getElementById('resultado')
    resultado.innerText = `O valor convertido em reais é R$ ${converteReal}`
    resultado.style.color = 'red';
} */


    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        let cotacao = document.getElementById('cotacao').value;
        let valor = document.getElementById('valor').value;
        let converteReal = valor * cotacao;
        let resultado = document.getElementById('resultado')
        resultado.innerText = `O valor convertido em reais é R$ ${converteReal}`
    });


