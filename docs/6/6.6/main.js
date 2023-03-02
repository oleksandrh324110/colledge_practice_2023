const result = document.getElementById('result')

const A = [[2, -1, 3], [8, -7, -6], [-3, 4, 2]]
const B = [[2, -1, -2], [3, -5, 4], [1, 2, 1]]

const resMatrix1 = math.matrix(math.multiply(A, B))
const resMatrix2 = math.matrix(math.multiply(B, A))

result.innerHTML += `\t\t\t\`[[2, -1, 3], [8, -7, -6], [-3, 4, 2]] * [[2, -1, -2], [3, -5, 4], [1, 2, 1]] = ${resMatrix1}\``
result.innerHTML += `\n\n\t\t\t\`[[2, -1, -2], [3, -5, 4], [1, 2, 1]] * [[2, -1, 3], [8, -7, -6], [-3, 4, 2]] = ${resMatrix2}\``
