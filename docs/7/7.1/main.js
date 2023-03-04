const result = document.getElementById('result')

const matrix = math.matrix([
  [1, 1, -3, 1],
  [2, 5, -10, -3],
  [1, -2, 3, 4],
  [4, 4, 1, -5]
])

const extraMatrix = math.matrix([3, 0, 6, 11])

result.innerHTML += 'Випишемо всі коефіцієнти в матрицю: `[[1, 1, -3, 1, |, 3], [2, 5, -10, -3, |, 0], [1, -2, 3, 4, |, 6], [4, 4, 1, -5, |, 11]]`'
