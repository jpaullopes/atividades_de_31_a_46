/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações,
escrevendo o resultado em forma de fração.*/
import { question } from "readline-sync"
console.log('SOMADOR DE FRAÇÕES')
//entrada
const nume_fracao_1 = Number(question('Digite o numerador da primeira fração: '))
const denominador_fracao_1 = Number(question('Digite o denominador da primeira fração: '))
const nume_fracao_2 = Number(question('Digite o numerador da segunda fração: '))
const denominador_fracao_2 = Number(question('Digite o denominador da segunda fração: '))
//processamento
const denominador_da_soma = denominador_fracao_1 * denominador_fracao_2
const numerador_da_soma = (nume_fracao_1 * denominador_fracao_2) + (nume_fracao_2 * denominador_fracao_1)
const soma_da_fracao = 0
//saída
console.log(`A soma da fração [${nume_fracao_1}/${denominador_fracao_1}] mais a fração [${nume_fracao_2}/${denominador_fracao_2}] é igual a: [${numerador_da_soma}/${denominador_da_soma}]`)
//a soma não vai ter como ser simplificada porque eu usei uma forma diferente de usar o MMC 