let nome = prompt("Qual seu nome?");
let cor = prompt("Qual sua cor favorita?");

console.log("A cor favorita de " + nome + " é " + cor);
console.log(`A cor favorita de ${nome} é ${cor}`);

const nome2 = "Vitor Hugo";
console.log(nome2.length);

const frase = "OieEeEeEEEe!"
const fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);
const fraseMaiuscula = frase.toUpperCase();
console.log(fraseMaiuscula);

const email = "         mika@gmail.com            ";
console.log(email.trim()); 

const frase2 = "Hoje comi cenoura";
console.log(frase2.includes("cenoura"));
console.log(frase2.includes("batata"));

const frase3 = "Hoje comi cenoura, adoro cenoura";
const novaFrase = frase3.replaceAll("cenoura", "batata");
console.log(novaFrase);


let fraseDoUsuario = prompt("Escreva uma frase");

console.log(fraseDoUsuario.toUpperCase());
console.log(fraseDoUsuario.replaceAll("o","i"));
console.log(fraseDoUsuario.length);

const listaDeCompras = ["batata", "alface", "queijo"];
const listaDeNumerosMega = [2, 13, 26, 35, 41 ,60];
const meuArray = ["banana", 15, true];
const listaDeCompras2 = ["Abacate", "banana", "tomate"];

const segundoItem = listaDeCompras2[2]
console.log(segundoItem);

let racas = ["salsicha", "golden", "caramelo", "pug", "labrador"];
let numero = prompt("Insira um número de 0 a 4");

console.log(racas[numero]);
 

const pokemon = ["bulbassauro", "squirtle", "charmander"];
console.log(pokemon.length);

const seriesBoas = ["The Big Bang Theory", "Brooklyn Nine-nine"];
console.log(seriesBoas.includes("The Big Bang Theory"));
console.log(seriesBoas.includes("Game of Thrones"));

const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);
numeros.push(5, 6, 7);
console.log(numeros);

const meusPeixes = ["palhaço", "mandarim", "esturjão"];
meusPeixes.pop()
console.log(meusPeixes)

const letras = [ "A", "B", "C", "D", "E", "F", "G", "H"];

letras.splice(2,1);
console.log(letras);

letras.splice(3,2);
console.log(letras);
