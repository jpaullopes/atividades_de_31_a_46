//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import { question } from "readline-sync"
//entrada
const numero_inteiro = Number.parseInt(question('Digite um número inteiro[3 dígitos]: '))
//processamento
var numero_inverso = String(numero_inteiro).split('')
numero_inverso.reverse()
numero_inverso = Number(numero_inverso.join(''))
const diferença_dos_numeros = Math.abs( numero_inteiro - numero_inverso)
//saída
console.log(`A difeença entre ${numero_inteiro} e ${numero_inverso} é igual a: ${diferença_dos_numeros}.`)