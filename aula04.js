// FUNÇÕES!!!!

let x = "nada";
console.log(x)
x = "Oi"
y = "Tchau"

// declaração de função

imprimeTexto(y)

// 1) Declara a Função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Chamar/executar a função

imprimeTexto(x)
imprimeTexto("Eu sou professor")

function soma(){
    return 2 + 2
}

console.log(soma())
imprimeTexto(somaDeNumero(4, 7))
imprimeTexto(somaDeNumero(24, 11))

function somaDeNumero(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
// A ordem dos parâmetros é importante
imprimeTexto(nomeIdade("teo", 32))
imprimeTexto(nomeIdade(17, "Vitor"))

imprimeTexto(multiplicacao())
// Você pode definir um parâmentro inicial para sua função
function multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}

imprimeTexto(multiplicacao(somaDeNumero(3,4),somaDeNumero (5,10)));

// expreção de função

const constanteSoma = function(nume1, nume2){return nume1 + nume2}

console.log(constanteSoma(3,6))

// Funções e var são "Listadas" no Topo do arquivo

// Arrow function

const apresentaArrow = nome => `meu nome é ${nome}`
const somaEmFlecha = (nu1, nu2) => nu1 + nu2;

console.log(apresentaArrow("vitor"))
console.log(somaEmFecha(2,4))

const somaNumerospequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return "Essa função é apenas para números pequenos"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumeroPequenos(2,3))