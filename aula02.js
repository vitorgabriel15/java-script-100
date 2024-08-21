// var -> criando uma variável

//var altura = 5;
//var comprimento = 8;

//var area = altura * comprimento;
//console.log(area);

// let -> Cria uma variável ( forma mais atualizada de criar uma variável)

let altura = 5;
let comprimentoT = 8;
let forma = "retangulo"
let area;

if(forma == "retangulo"){
    area = altura * comprimento
}else if(forma === "triangulo"){
    area = (altura + comprimento) / 2
}else {
    console.log ('deveria ser uma')
}

console.log(area);



// const -> Utilizado para criar "variáveis" que são fixas, que não
// condições boolenas (truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = True;
const contaPaga = false;

console.log(0 == false); // true
console.log(contaPaga == 0) // true
console.log(contaPaga === 0) // false
console.log("" == false); // true
console.log(1 == true); // true

// Nulo e indefinido
// Nulo -> vazio ou nada

let vitor;
let luana = null;
let numero = 3;
let texto = "Eu gosto de programação <3"

// consultando os tipo de variáveis;

console.log(typeof vitor);
console.log(typeof luana);
console.log(typeof numero);
console.log(typeof texto);

// converção de variáveil

const numeroNuber = 390
const numeroString = "390" 

console.log(numeroNumber == numeroString); // compara apenas o valor
console.log(numeroNumber === numeroString); // compara também o tipo
console.log(numeroNumber + numeroString); // concatenação
console.log(numeroNumber + Number(numeroString)); // soma de número