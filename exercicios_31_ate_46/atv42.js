/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano,
ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
D = ((x2 - x1)² + (y2 - y1)²) ** 1/2 */
import { question } from "readline-sync"

//entrada
const ponto1_x = Number(question('Digite o X do primeiro ponto cartesiano: '))
const ponto1_y = Number(question('Digite o Y do primeiro ponto cartesiano: '))
const ponto2_x = Number(question('Digite o X do segundo ponto cartesiano: '))
const ponto2_y = Number(question('Digite o Y do segundo ponto cartesiano: '))
//processamento
const dif_de_x = (ponto2_x - ponto1_x) ** 2
const dif_de_y = (ponto2_y - ponto1_y) ** 2
const distancia_pontos = Math.sqrt(dif_de_x + dif_de_y)
//saída
console.log(`A distância entre (${ponto1_x},${ponto1_y}) e (${ponto2_x},${ponto2_y}) no plano é de: ${distancia_pontos.toFixed(2)} .`)