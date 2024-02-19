/*Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos 
que ele fuma, o número de cigarros fumados por dia e o preço de uma carteira 
(1 carteira tem 20 cigarros). */
import { question } from "readline-sync"
console.log('VALOR TOTAL DOS CIGARROS FUMADOS')
//entrada
const anos_de_fumo = Number(question('Digite há quantos anos você fuma: '))
const cigarros_por_dia = Number(question('Quantos cigarros você fuma diariamente: '))
const preco_carteira = Number(question('Digite o preço da carteira de cigarro[20 cigarros]: '))
//processamento
const tempo_total = anos_de_fumo * 365
const preco_do_cigarro  = preco_carteira / 20
const total_de_cigarros = tempo_total * cigarros_por_dia
const preco_total = total_de_cigarros * preco_do_cigarro
//saída
console.log(`O valor total gasto com cigarros em ${anos_de_fumo} anos foi de R$ ${preco_total.toFixed(2)}`)