/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que
calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão
(em kg), informada pelo usuário.*/
import { question } from "readline-sync"
console.log('CALCULADORA DE PESO DE ZINCO E COBRE DE UM LATÃO')
//entrada
const peso_do_latao = Number(question('Informe o peso do latão[Kg]: '))
//processamento
const cobre_do_latao = peso_do_latao * 0.70
const zinco_do_latao = peso_do_latao * 0.30
//saída
console.log(`Para se obter ${peso_do_latao} Kg de latão é preciso de ${cobre_do_latao.toFixed(2)} Kg de cobre e ${zinco_do_latao.toFixed(2)} Kg de zinco.`)