/* Sintaxe 1 (tradicional) Função literal/anônima */
let exemplo1 = function(){
    console.log("Função anônima/literal");
} 
exemplo1();



/* Sintaxe 2 (tradicional) Função nomeada */
function exemplo2(){
    console.log("Função nomeada");
}
exemplo2();



/* Sintaxe 3 (moderna) Função seta/flecha */
let exemplo3 = () =>{
    console.log('Arrow function');
};

exemplo3();

let exemplo3b = () => console.log('Arrow function B');
exemplo3b();


function dobra(valor){
   return valor * 2;
}
document.write( dobra(10) );

let dobrab = (valor) => {
    return valor * 2;

}
document.write( dobrab(11) );


let dobrac = valor =>  valor * 2;
document.write(dobrac(20));

console.log('-----------------')

let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor){
    
}