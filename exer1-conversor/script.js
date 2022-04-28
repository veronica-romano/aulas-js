let number;


function formateValue(){
    let dolar = 5;
    valor = parseFloat(document.getElementById("number").value);			

    document.getElementById("resultado").innerHTML = (valor * dolar).toFixed(2);
}

