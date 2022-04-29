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

const formulario = pagina.querySelector('form');
const campoNome = pagina.querySelector('#nome');
const campoNota1 = pagina.querySelector('#nota1');
const campoNota2 = pagina.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event){
     event.preventDefault();
     let nome = campoNome.value;
     let nota1 = parseFloat(campoNota1.value);
     let nota2 = parseFloat(campoNota2.value);

     let media = calculaMedia(nota1, nota2);

     let situacao = verificaSituacao(media);

     montaResumo(nome, media, situacao);

     formulario.reset();

     campoNome.focus();
});

    function calculaMedia(nota1, nota2){
        return(nota1 + nota2) / 2;
    };

    function verificaSituacao(media){
        if (media >= 7){
            return 'aprovado';
        } else{
            return 'reprovado';
        }
    };

    function montaResumo (nome, media, situacao){
        let linha = document.createElement ('tr');
        linha.innerHTML = `<td> ${nome} </td> <td> ${media} </td> <td> ${situacao} </td>`;
        corpoTabela.appendChild(linha);
    }