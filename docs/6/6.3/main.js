const result = document.getElementById('result')

const matrix = math.matrix([
  [1, 1, 1, 1],
  [1, 2, 4, 8],
  [1, 3, 9, 27],
  [1, 4, 16, 64],
])

result.innerHTML += `\t\t\`${matrix}^-1 = ${math
  .inv(matrix)
  .map((v) => +v.toFixed(2))}\``
