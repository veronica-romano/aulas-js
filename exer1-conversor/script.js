let number = document.getElementById('number');

function clique(){
    console.log(number.value);
}

let resultado = document.getElementById('resultado');



let formateNumber = number => {
    return number.toLocaleString('US',{
        style: 'currency',
        currency: 'USD'
    });
}

function formataMoeda(valor){
    return valor.toLocaleString('BR',{
        style: 'currency',
        currency: 'BRL'
    });
}

function clique(){
    resultado.innerHTML = number.value;
}