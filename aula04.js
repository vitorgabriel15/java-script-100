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