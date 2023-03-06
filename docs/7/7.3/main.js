const result = document.getElementById('result')

const matrix = math.matrix([
  [1, 2, 4, -3],
  [3, 5, 6, -4],
  [4, 5, -2, 3],
  [3, 8, 24, -19]
])

const extraMatrix = math.matrix([3, 0, 6, 11])

result.innerHTML += '\tВипишемо всі коефіцієнти в матрицю: `[[1, 2, 4, -3, |, 0], [3, 5, 6, -4, |, 0], [4, 5, -2, 3, |, 0], [3, 8, 24, -19, |, 0]]`'
result.innerHTML += `\n\n\tЗнайдемо обернену матрицую для матриці \`${matrix}\`:`

try {
  const inv = math.inv(matrix).map(v => +v.toFixed(2))
  result.innerHTML += `\n\n\t\t\`${matrix}^-1 = ${inv}\``

  result.innerHTML += `\n\n\t\`X = ${inv} * [[3], [0], [6], [11]] = ${math.multiply(inv, [[0], [0], [0], [0]]).map(v => +v.toFixed(2))}\``
} catch (e) {
  result.innerHTML += `\n\n\tПри спробі знайти обернену матрицю, ми зустрілися з тим, що детермінант = 0, отже система не може бути вирішина`
}
