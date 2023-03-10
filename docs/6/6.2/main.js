const result = document.getElementById('result')

const matrix = math.matrix([
  [20, 43, 2, 5, 11],
  [1, 30, 10, 3, 2],
  [3, 71, 2, 51, 9],
  [5, 5, 7, 9, 34],
  [7, 4, 6, 8, 23],
])

result.innerHTML += `\t\t\`det ${matrix} = ${math.det(matrix)}\``
