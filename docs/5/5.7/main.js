const result = document.getElementById('result')

const a = math.matrix([3, -5, -2])
const b = math.matrix([4, -1, 3])
const c = math.matrix([2, -1, 0])

const leftSide = math.add(
  math.subtract(math.multiply(a, 3), b),
  math.multiply(2, c)
)
const rightSide = math.add(math.subtract(math.multiply(2, a), b), c)

result.innerHTML += `\t\`(3 vec a - vec b + 2 vec c, 2 vec a - vec b + vec c) = 
(${matrixToVector(math.multiply(a, 3))} - ${matrixToVector(b)} + ${matrixToVector(math.multiply(2, c))}) *\`
\t\t\t\t\t\t\t\t\`(${matrixToVector(math.multiply(2, a))} - ${matrixToVector(b)} + ${matrixToVector(c)}) = 
${matrixToVector(leftSide)} * ${matrixToVector(rightSide)} = ${math.multiply(leftSide, rightSide)}\``

function matrixToVector(vec) {
  return vec.toString().replaceAll('[', '(').replaceAll(']', ')')
}
