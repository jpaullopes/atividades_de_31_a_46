/*Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1,para
uma quantia solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas
de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da
quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição
ótima.*/
import { question } from "readline-sync"
console.log('DESTRIBUIÇÃO ÓTIMA - CAIXA ELETRÔNICO')
//entrada
const quantia_de_dinheiro = Number.parseInt(question('Digite a quantia de retirada[valor inteiro]: '))
//processamento
const notas_200 = Number.parseInt(quantia_de_dinheiro / 200)
let resto_notas = quantia_de_dinheiro % 200
const notas_100 = Number.parseInt(resto_notas / 100)
resto_notas = resto_notas % 100
const notas_50 = Number.parseInt(resto_notas / 50)
resto_notas = resto_notas % 50
const notas_20 = Number.parseInt(resto_notas / 20)
resto_notas = resto_notas % 20
const notas_10 = Number.parseInt(resto_notas / 10)
resto_notas = resto_notas % 10
const notas_5 = Number.parseInt(resto_notas / 5)
resto_notas = resto_notas % 5
const moedas_1 = Number.parseInt(resto_notas / 1)
//saída
console.log(`A destribuição de notas para R${quantia_de_dinheiro} será de:
R$200 => ${notas_200}
R$100 => ${notas_100}
R$50 => ${notas_50}
R$20 => ${notas_20}
R$10 => ${notas_10}
R$5 => ${notas_5}
R$1 => ${moedas_1}`)
