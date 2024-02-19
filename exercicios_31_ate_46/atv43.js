/*Um sistema de equações lineares do tipo [ax + by = c], [dx + ey = f], , pode ser resolvido
segundo mostrado abaixo x = [(ce - bf) / (ae - bd)], y = [(af - cd) / (ae - bd)] , Escreva um
algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.*/
import { question, questionPath } from "readline-sync"

//entrada
const valor_a = Number(question('Digite o valor de A: '))
const valor_b = Number(question('Digite o valor de B: '))
const valor_c = Number(question('Digite o valor de C: '))
const valor_d = Number(question('Digite o valor de D: '))
const valor_e = Number(question('Digite o valor de E: '))
const valor_f = Number(question('Digite o valor de F: '))
//processamento
const denominador  = valor_a * valor_e - valor_b * valor_d
const valor_x = (valor_c * valor_e - valor_b * valor_f) / denominador
const valor_y = (valor_a * valor_f - valor_c * valor_d) / denominador
//saída
console.log(`Os valores de X e Y são:
X => [${valor_x.toFixed(2)}]
Y => [${valor_y.toFixed(2)}]`)