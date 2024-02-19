/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do 
distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de 
fábrica de um carro e escreva o custo ao consumidor.*/
import { question } from "readline-sync"
console.log('PREÇO DO CARRO PARA O CONSUMIDOR')
//entrada
const custo_de_fabrica = Number(question('Digite o custo de fábrica do carro[R$]: '))
const porcentagem_destribuidor = Number(question('Digite a porcentagem do destribuidor[%]: ')) / 100
const impostos = Number(question('Difite a porcentagem dos impostos[%]: ')) / 100

//processamento

const custo_para_consumidor = custo_de_fabrica + (custo_de_fabrica * porcentagem_destribuidor) +(custo_de_fabrica * impostos)
//saída
console.log(`O preço de um carro com custo de fábrica de R$ ${custo_de_fabrica} repassado ao consumidor vai ser de R$ ${custo_para_consumidor.toFixed(2)}.`)