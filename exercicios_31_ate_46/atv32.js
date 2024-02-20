//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import { question } from "readline-sync"
//entrada
const numero_inteiro = Number.parseInt(question('Digite um número inteiro[3 dígitos]: '))
//processamento
const centena = Number.parseInt(numero_inteiro / 100)
const resto = numero_inteiro % 100
const dezena = Number.parseInt(resto / 10)
const unidade = resto % 10
const numero_inverso = unidade * 100 + dezena * 10 + centena
const diferença_dos_numeros = Math.abs( numero_inteiro - numero_inverso)
//saída
console.log(`A difeença entre ${numero_inteiro} e ${numero_inverso} é igual a: ${diferença_dos_numeros}.`)
