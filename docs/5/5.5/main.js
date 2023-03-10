const result = document.getElementById('result')

const c1 = math.evaluate('2 * [1, -2, 3] + 4 * [3, 0, -1]')
result.innerHTML += `\t\`vec c_1 = (2 * (1, -2, 3) + 4 * (3, 0, -1)) = ${matrixToVector(c1)}\``

const c2 = math.evaluate('3 * [3, 0, -1] - [1, -2, 3]')
result.innerHTML += `\n\t\`vec c_2 = (3 * (3, 0, -1) - (1, -2, 3)) = ${matrixToVector(c2)}\``

result.innerHTML +=
  '\n\n\tДані вектори не колінеарні, оскільки не виконується рівняння `vec c_1 = n * vec c_2`'

function matrixToVector(matrix) {
  return matrix.toString().replaceAll('[', '(').replaceAll(']', ')')
}
