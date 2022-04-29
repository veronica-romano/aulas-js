let formulario = document.querySelector('form');
let numeroSorteado = parseInt(Math.random() * 11);

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let palpiteUsuario = document.getElementById('palpite').value;
    let resultado = document.getElementById('resultado')
    if (palpiteUsuario == numeroSorteado){
        resultado.innerHTML = "você acertou!";
    } else if (palpiteUsuario <0 || palpiteUsuario >10){
        resultado.innerHTML = "digite um numero entre 0 e 10";
    } else{
        resultado.innerHTML = "você errou!";
    }
});
