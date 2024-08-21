// Alguns erros comuns

// const numero; Primeiro erro: nao declara uma constante 


const minhaVar = "oi" // 2º Erro: Não declarar uma variável não declarada
console.log(minhaVar); // exemplo, chamar minhavar com V minúsculo

console.error("Isso está errado") // 3º "Erro": Você pode declarar um erro com o console.error;

// Condicional abreviada if (){}

let idadeMinima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

// Valor ternário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// Modo ternário, utilizado a estrutura _____ >= _____ ? _____ : _____ 
// Modo ternário, utilizado a estrutura _____ <= _____ ? _____ : _____ 
// Modo ternário, utilizado a estrutura _____ == _____ ? _____ : _____ 

//Template string

const nome = "Teotonio";
const idade = 32;
const cidadeNatal = "Foz do Iguaçu"

const apresentação = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentação)

//template string
const apresentacao2 = + `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`
console.log(apresentacao2);