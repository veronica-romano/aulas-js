let formulario = document.querySelector('form');
let numeroSorteado = parseInt(Math.random() * 11);

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let palpiteUsuario = document.getElementById('palpite').value;
    let resultado = document.getElementById('resultado')
    if (palpiteUsuario == numeroSorteado){
        resultado.innerHTML = "VOCÊ ACERTOU!";
    } else if (palpiteUsuario <0 || palpiteUsuario >10){
        resultado.innerHTML = "digite um numero entre 0 e 10";
    } else if (palpiteUsuario < numeroSorteado){
        resultado.innerHTML = "Escolha um número maior...";
    }else if (palpiteUsuario > numeroSorteado) {
        resultado.innerHTML = "escolha um número menor...";
    } else{
        resultado.innerHTML = "você errou!";
    }
});


