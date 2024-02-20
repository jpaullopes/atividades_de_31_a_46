/* Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais
a R$ 90,00; se o valor da mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações
são iguais a R$ 100,00.Escreva um algoritmo que receba o valor da mercadoria e forneça o valor
da entrada e das duas prestações, de acordo com as regras acima. */
import { question } from "readline-sync"
//entrada
const valor_do_produto = Number(question('Informe o valor do produto[R$]: '))
//processamento
const valor_parcelas = Number.parseInt(valor_do_produto / 3)
const valor_da_entrada = valor_parcelas + (valor_do_produto % 3)
//saída
console.log(`QO valor de entrada de um produto custando R$${valor_do_produto} é de R$${valor_da_entrada.toFixed(2)} e o valor das duas parcelas serão de R$${valor_parcelas.toFixed(2)}.`)
