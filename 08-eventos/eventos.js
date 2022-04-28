/*
for(var i = 0; i < 100; i++){
    console.log(i);
}
document.write(i) 

function clique(){
    let nome = document.getElementById('nome').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = nome;
}
*/

const pagina = document.querySelector(`body`);
const titulo = pagina.querySelector(`h1`);
const msg = pagina.querySelector('#mensagem');
const sub01 = document.querySelector('#subtitulo-exemplo01');



//exemplo 01
sub01.addEventListener('mouseover', function(){
    msg.textContent = "Você passou o mouse sobre...";
});

sub01.addEventListener('mouseout', function(){
    msg.textContent = "";
});

const botao = pagina.querySelector('#noturno');

botao.addEventListener('click', function(){
    pagina.classList.toggle('modo-noturno')
    
    if(botao.textContent == 'Ativar'){
        botao.textContent = 'Desativar'
    } else{
        botao.textContent = 'Ativar'
    }
    
});
