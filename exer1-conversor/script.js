let number = document.getElementById('number');
function clique(){
    console.log(number.value);
}

let formateNumber = number => {
    return number.toLocaleString('US',{
        style: 'currency',
        currency: 'USD'
    });
}
function formateValue(valor){
    return valor.toLocaleString('BR',{
        style: 'currency',
        currency: 'BRL'
    });
}
let resultado = document.getElementById('resultado');
function clique(){
    resultado.innerHTML = ( formateValue(number) );
}