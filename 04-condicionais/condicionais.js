let nome = 'Veronica';
let idade = 28;
let mensagem;

if(idade >= 60){
    mensagem = "Você é idoso(a)";
} else if(idade >= 18){
   mensagem = "Você é adulto(a), mas não idoso(a)";
} else if (idade >= 12){
    mensagem = "Você é adolescente";
} else{
    mensagem = "Você é baby shark"
}
console.log(nome + ", com " + idade + " anos " + mensagem + ".")
console.log(`${nome},  com ${idade} anos, ${mensagem}.`)
document.write(`${nome},  com ${idade} anos, ${mensagem}.`);

let nota1 = 7;
let nota2 = 8;
let result;

let media = (nota1 + nota2) / 2;

//if(result <= 7){
 //   result = "reprovado";
//} else{
 //  result = "aprovado";
//}

result = media <= 7 ?  "reprovado" : "aprovado";
document.write(`Você está ${result}`);

document.write("---------------------")

let opcao = 4;
let textoOpcao;

switch(opcao){
    case 1:
        textoOpcao = "Legal, o que deseja saber?";
        break;
    case 2:
        textoOpcao = "Que pena, o que aconteceu?";
        break;
    case 3:
        textoOpcao = "Certo, qual a sua dúvida?";
    default:
        textoOpcao = "Hmm... não entendi, vou te transferir";
        break;
}

document.write(`Você escolheu a oção ${opcao} `);
document.write(textoOpcao);

document.write("---------------------")

let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);


