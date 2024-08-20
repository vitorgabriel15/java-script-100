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
}else{
    area =(altura * comprimento) / 2
}

console.log(area);

// const -> Utilizado para criar "variáveis" que são fixas, que não
// condições boolenas (truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = True;
const contaPaga = false;

console.log(0 == false);
console.log(contaPaga == 0)
console.log(contaPaga === 0)