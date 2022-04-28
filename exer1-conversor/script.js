
function formateValue(){
    let number;
    number = parseFloat(document.getElementById("number").value);let dolar = 5;		
    document.getElementById("resultado").innerHTML = (number * dolar).toFixed(2);
}

