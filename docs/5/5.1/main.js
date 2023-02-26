const result = document.getElementById('result')

const arr = [
  [0, 1, 2],
  [1, 0, 1],
  [-1, 2, 4],
]

const x = [-2, 4, 7]

const A = math.matrix(arr)

result.innerHTML = '\tДля перевірки складемо з векторів матрицю:'
result.innerHTML += `\n\n\t\t\`A = ${A}\``

result.innerHTML += '\n\n\tЗнайдемо визначник матриці:'
result.innerHTML += '\n\n\t\t`det A = ' + math.det(A) + '`'

result.innerHTML +=
  '\n\n\tВизначник не рівний нулю, тому робимо висновок, що вектори утворюють базис в просторі.'
result.innerHTML += '\n\n\tТепер знайдемо зворотню матрицю:'
result.innerHTML += `\n\n\t\t\`A^-1 = ${math.inv(A)}\``

const invArray = math.inv(A).toArray()

result.innerHTML +=
  '\n\n\tЗнайдемо координати вектора `x` відностно нового базису:'
result.innerHTML += `\n\n\t\t\`x = [
  [(${invArray[0][0]} * ${x[0]}) + (${invArray[0][1]} * ${x[1]}) + (${invArray[0][2]} * ${x[2]})], 
  [(${invArray[1][0]} * ${x[0]}) + (${invArray[1][1]} * ${x[1]}) + (${invArray[1][2]} * ${x[2]})], 
  [(${invArray[2][0]} * ${x[0]}) + (${invArray[2][1]} * ${x[1]}) + (${invArray[2][2]} * ${x[2]})]] = [[-11], [-32], [15]] = (-11, -32, 15)\``
