const result = document.getElementById('result')

const leftMatrix = math.matrix([
  [1, 2, 1],
  [2, 1, 2],
  [1, 2, 3],
])
const rightMatrix = math.matrix([
  [4, 1, 1],
  [-4, 2, 0],
  [1, 2, 1],
])

const mul = math.matrix(math.multiply(leftMatrix, rightMatrix))

result.innerHTML += `\t\t\`${leftMatrix} * ${rightMatrix} = ${mul}\``
