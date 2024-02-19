//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import { question } from "readline-sync"
console.log('CONVERSOR DE BINÁRIO PARA DECIMAL')
//entrada
const numero_binario = question('Digite o número em binário[4 Digítos]: ')
//processamento
const numero_bin_separado = numero_binario.split('')
const numero_bin1 = Number.parseInt(numero_bin_separado[3]) * 1
const numero_bin2 = Number.parseInt(numero_bin_separado[2]) * 2
const numero_bin3 = Number.parseInt(numero_bin_separado[1]) * 4
const numero_bin4 = Number.parseInt(numero_bin_separado[0]) * 8
const numero_decimal = numero_bin1 + numero_bin2 + numero_bin3 + numero_bin4
//saída
console.log(`O numero binario ${numero_binario} em decimal corresponde ao número ${numero_decimal}.`)
