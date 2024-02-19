//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import { question } from "readline-sync"

//entrada
const numero_inteiro = Number.parseInt(question('digite um número inteiro[Três dígitos]: '))
//processamento
var numero_inteiro_invertido = String(numero_inteiro).split('')
numero_inteiro_invertido.reverse()
numero_inteiro_invertido = Number(numero_inteiro_invertido.join(''))
const somatoria_numeros = numero_inteiro + numero_inteiro_invertido
//saída
console.log(`A soma entre ${numero_inteiro} e ${numero_inteiro_invertido} é igual a: ${somatoria_numeros}.`)