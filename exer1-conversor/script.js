
function converteDolar(){
    
    let valorDolar = document.getElementById('valorDolar').value;
    let converteReal = valorDolar * 4.97;
    let resultado = document.getElementById('resultado')
    resultado.innerText = `O valor convertido em reais é R$ ${converteReal}`
}

