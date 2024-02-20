//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import { question } from "readline-sync"

//entrada
const numero_inteiro = Number.parseInt(question('digite um número inteiro[Três dígitos]: '))
//processamento
const centena = Number.parseInt(numero_inteiro / 100)
const resto = numero_inteiro % 100
const dezena = Number.parseInt(resto / 10)
const unidade = resto % 10
const numero_inteiro_invertido = unidade * 100 + dezena * 10 + centena
const somatoria_numeros = numero_inteiro + numero_inteiro_invertido
//saída
console.log(`A soma entre ${numero_inteiro} e ${numero_inteiro_invertido} é igual a: ${somatoria_numeros}.`)
