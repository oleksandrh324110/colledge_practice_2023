const result = document.getElementById('result')

const matrix = math.matrix([
  [1, 1, -3, 1],
  [2, 5, -10, -3],
  [1, -2, 3, 4],
  [4, 4, 1, -5]
])

const extraMatrix = math.matrix([[3], [0], [6], [11]])

result.innerHTML += '\tВипишемо всі коефіцієнти в матрицю: `[[1, 1, -3, 1, |, 3], [2, 5, -10, -3, |, 0], [1, -2, 3, 4, |, 6], [4, 4, 1, -5, |, 11]]`'
result.innerHTML += '\n\n\tЗнайдемо обернену матрицую для матриці \`[[1, 1, -3, 1], [2, 5, -10, -3], [1, -2, 3, 4], [4, 4, 1, -5]]\`:'

const inv = math.inv(matrix).map(v => +v.toFixed(2))
result.innerHTML += `\n\n\t\t\`[[1, 1, -3, 1], [2, 5, -10, -3], [1, -2, 3, 4], [4, 4, 1, -5]]^-1 = ${inv}\``

result.innerHTML += `\n\n\t\t\`X = ${inv} * [[3], [0], [6], [11]] = ${math.multiply(inv, extraMatrix).map(v => +v.toFixed(2))}\``