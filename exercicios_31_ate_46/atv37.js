//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
//CONSIDERAÇÕES => ANO = 365.25 DIAS  MÊS = 30.44 DIAS
import { question } from "readline-sync"
console.log('CONVERSOR DE IDADE EM DIAS PARA ANOS E MESES')
//entrada
const idade_em_dias = Number.parseInt(question('Digite a sua idade em dias: '))
//processamento
const idade_anos = Math.floor(idade_em_dias / 365)
const idade_meses = Math.floor((idade_em_dias % 365) / 30)
const resto_dos_dias = Math.floor((idade_em_dias % 365) % 30)
//saída
console.log(`A sua idade de ${idade_em_dias} dias convertida é de:
Anos: ${idade_anos}
Meses: ${idade_meses}
Dias: ${resto_dos_dias}`)