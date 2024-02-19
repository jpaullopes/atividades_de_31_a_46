//Leia 3 números, calcule e escreva a média dos números.
import { question } from "readline-sync"
console.log('MÉDIA DE TRÊS NÚMEROS')
//entrada
const numero1 = Number(question('Digite o primeiro número: '))
const numero2 = Number(question('Digite o segundo número: '))
const numero3 = Number(question('Digite o terceiro número: '))
//processamento
const media_dos_numeros = (numero1 + numero2 + numero3) / 3
//saída
console.log(`A média de ${numero1},${numero2},${numero3} é igual a: ${media_dos_numeros.toFixed(2)}.`)