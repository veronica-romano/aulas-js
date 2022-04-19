

console.log("Olá Mundo!");
// vai aparecer antes do body: document.write("Olá mundo!")
/* Comentário múltiplas linhas: SHIFT+ALT+A  */


/* Variáveis: espaço reservado na memória para armazenar qualquer tipo de dados/informação
Palavras-chave: var, let, const.
var: escopo global
let: escopo de bloco
const: escopo de bloco imutável

Variables are containers for storing data (storing data values)
*/

const nome = "veronica"; //constant
let ano = 2022; //local variable
var curso = "Técnico em Informática para Internet";//global variable

/* ano = 2025;
curso = "como se tornar uma princesa";
nome = "ana"; //dá erro */

console.log(nome);
console.log(ano);
console.log(curso);

//concatenação (junção)
console.log("Eu sou a " + nome + ", " + "e em " + ano + ", estou estudando o curso " + curso + ".");

//String literal

console.log(`Eu sou a ${nome} e em ${ano}, estou estudando o curso de ${curso}`);

/* Operadores matemáticos
+ adição
- subtração
/ divisão
* multiplicação
*/

let produto = "TV Led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;

console.log(`Temos atualmente o estoque do produto ${produto} , que custa R$:  ${preco}  reais cada, e comprando  ${quantidade} unidades, você paga R$ ${total}  reais.`);
