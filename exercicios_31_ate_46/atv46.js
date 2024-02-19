/**Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior
ou igual a cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis.
Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais
a R$ 90,00; se o valor da mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações
são iguais a R$ 100,00.Escreva um algoritmo que receba o valor da mercadoria e forneça o valor
da entrada e das duas prestações, de acordo com as regras acima. */
import { question } from "readline-sync"
//entrada
const valor_do_produto = Number(question('Informe o valor do produto[R$]: '))
const valor_da_entrada = Number(question(`Informe o valor da entrada[maior ou igual à R$${(valor_do_produto * (1/3)).toFixed(2)}]: `))

//processamento
const valor_parcelas = (valor_do_produto - valor_da_entrada) / 2
//saída
console.log(`Quando a entrada do produto for R$${valor_da_entrada}, o valor de cada parcela vai ser R$${valor_parcelas.toFixed(2)}.`)