const result = document.getElementById('result')

const matrix = math.matrix([
  [1, 2, 3, 4],
  [7, 14, 20, 27],
  [5, 10, 16, 19],
  [3, 5, 6, 13],
])

const extraMatrix = math.matrix([[0], [0], [-2], [5]])

result.innerHTML +=
  '\tВипишемо всі коефіцієнти в матрицю: `[[1, 2, 3, 4, |, 0], [7, 14, 20, 27, |, 0], [5, 10, 16, 19, |, -2], [3, 5, 6, 13, |, 5]]`'
result.innerHTML += `\n\n\tЗнайдемо обернену матрицую для матриці \`${matrix}\`:`

const inv = math.inv(matrix).map((v) => +v.toFixed(2))
result.innerHTML += `\n\n\t\t\`${matrix}^-1 = ${inv}\``

result.innerHTML += `\n\n\t\t\`X = ${inv} * ${extraMatrix} = ${math
  .multiply(inv, [[0], [0], [-2], [5]])
  .map((v) => +v.toFixed(2))}\``
