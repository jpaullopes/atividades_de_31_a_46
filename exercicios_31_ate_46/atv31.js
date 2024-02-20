//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import { question } from "readline-sync"
console.log('CONVERSOR DE BINÁRIO PARA DECIMAL')
//entrada
const numero_binario = question('Digite o número em binário[4 Digítos]: ')
//processamento
const numero_bin1 = Number.parseInt(numero_binario / 1000) * 8
let resto = numero_binario % 1000
const numero_bin2 = Number.parseInt(resto / 100) * 4
resto = resto % 100
const numero_bin3 = Number.parseInt(resto / 10) * 2
const numero_bin4 = (resto % 10) * 1
const numero_decimal = numero_bin1 + numero_bin2 + numero_bin3 + numero_bin4
//saída
console.log(`O numero binario ${numero_binario} em decimal corresponde ao número ${numero_decimal}.`)

