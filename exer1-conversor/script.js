
function formateValue(){
    
    let dolar = 5;	
    let number = parseFloat(document.getElementById("number").value);
    document.getElementById("resultado").innerHTML = (number * dolar).toFixed(2);
}

