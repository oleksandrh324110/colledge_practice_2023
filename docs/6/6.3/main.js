const result = document.getElementById('result')

const matrix = math.matrix([[1, 1, 1, 1], [1, 2, 4, 8], [1, 3, 9, 27], [1, 4, 16, 64]])
let res = math.inv(matrix)

res = res.map(v => +v.toFixed(2))

result.innerHTML += `\t\t\`[[1, 1, 1, 1], [1, 2, 4, 8], [1, 3, 9, 27], [1, 4, 16, 64]]^-1 = ${res}\``