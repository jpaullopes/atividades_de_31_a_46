//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S)/2 , R = (A + B)² e S = (B + C)²
import { question } from "readline-sync"

//entrada
const numero_A = Math.abs(Number.parseInt(question('Digite um número inteiro positivo[A]: '))) 
const numero_B = Math.abs(Number.parseInt(question('Digite um número inteiro positivo[B]: '))) 
const numero_C = Math.abs(Number.parseInt(question('Digite um número inteiro positivo[C]: '))) 
//processamento
const R = (numero_A + numero_B) ** 2
const S = (numero_B + numero_C) ** 2
const D = (R + S) / 2
//saída
console.log(`A expresão númerica de [D = (R + S)/2 ] onde A => ${numero_A},B => ${numero_B} e C => ${numero_C} é igual a: D => ${D.toFixed(2)}`)