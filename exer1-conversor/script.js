let number = document.getElementById('number');

function clique(){
    console.log(number.value);
}

let resultado = document.getElementById('resultado');



let formateNumber = number => {
    return number.toLocaleString('GBP-UK',{
        style: 'currency',
        currency: 'GBP'
    });
}


function clique(){
    resultado.innerHTML = number.value;
}