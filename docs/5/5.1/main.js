const result = document.getElementById('result')

const arr = math.matrix([
  [0, 1, 2],
  [1, 0, 1],
  [-1, 2, 4],
])

const x = math.matrix([-2, 4, 7])

const A = math.matrix(arr)

result.innerHTML = '\tДля перевірки складемо з векторів матрицю:'
result.innerHTML += `\n\n\t\t\`A = ${A}\``

result.innerHTML += '\n\n\tЗнайдемо визначник матриці:'
result.innerHTML += '\n\n\t\t`det A = ' + math.det(A) + '`'

result.innerHTML +=
  '\n\n\tВизначник не рівний нулю, тому робимо висновок, що вектори утворюють базис в просторі.'
result.innerHTML += '\n\n\tТепер знайдемо зворотню матрицю:'
result.innerHTML += `\n\n\t\t\`A^-1 = ${math.inv(A)}\``

const invArray = math.inv(A)

result.innerHTML +=
  '\n\n\tЗнайдемо координати вектора `x` відностно нового базису:'
result.innerHTML += `\n\n\t\t\`x = ${invArray} = [[-11], [-32], [15]] = (-11, -32, 15)\``
