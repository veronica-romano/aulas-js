//1 - while
let i = 1;
while(i < 10) {
    console.log(`1 X  ${i} é: ${i}<br>`);
    i ++
};

console.log("---------------------");
//2 - do while
let j = 10;

do{
    console.log(`j é ${j}`);
    j++ 
} while (j < 10);

console.log("---------------------");
//3 - for

for (let k = 1; k<= 5; k++){
    console.log(`k vale ${k}`);
}

//loop+array
let alunos = [
    "Chiquinha", "Chaves", "Madruga", "Quico", "Pópis"
];
//cache do tamanho do array
let tamanho = alunos.length;
//console.log(tamanho);
for(let i = 0; i< tamanho; i++){
    console.log(alunos[i]);
}