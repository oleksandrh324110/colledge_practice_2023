const result = document.getElementById('result')

const matrix = math.parse([['a ^ 2', 'a ^ 3'], ['ab', 'ab ^ 2']])

const t = math.matrix(math.transpose(matrix))

result.innerHTML += `\t\t\`[[a^2, a^3], [ab, ab^2]]^T = ${t}\``
