//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex número = 9534 ; soma = 9+5+3+4 = 21.
import { question } from "readline-sync"
console.log('SOMADOR DE DÍGITOS')
//entrada
const numero_inteiro = Number.parseInt(question('Digite um número inteiro de sua preferência[4 dígitos]: '))
//processamento
const num1 = Math.floor(numero_inteiro / 1000)
const resto_centenas = numero_inteiro % 1000
const num2 = Math.floor(resto_centenas / 100)
const resto_dezenas = resto_centenas % 100
const num3 = Math.floor(resto_dezenas / 10)
const num4 = resto_dezenas % 10
const somatoria_digitos =  num1 + num2 + num3 + num4
//saída
console.log(`O somatório dos dígitos do número ${numero_inteiro} é de ${somatoria_digitos}.`)