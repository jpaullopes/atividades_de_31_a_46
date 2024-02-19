//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import { question } from "readline-sync"
console.log('CONVERTOR DE IDADE DE ANOS E MESES EM DIAS')
//entrada
const idade_anos = Number.parseInt(question('Digite quantos anos você tem: ')) 
const idade_meses = Number.parseInt(question('Digite a quantidade de meses: '))
const idade_dias = Number.parseInt(question('Digite o número de dias: '))
//processamento
const idade_total_dias = (idade_anos * 365) + (idade_meses * 30) + idade_dias
//saída
console.log(`A conversão de ${idade_anos} anos, ${idade_meses} meses e ${idade_dias} dias é igual a: ${idade_total_dias} dias de idade. `)