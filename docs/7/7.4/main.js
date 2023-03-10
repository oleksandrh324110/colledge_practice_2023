const result = document.getElementById('result')

let leftMatrix = math.matrix([
  [1, 2, 0],
  [2, 5, -2],
  [0, -2, 5]
])

const rightMatrix = math.matrix([
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 0]
])

leftMatrix = math.inv(leftMatrix)

result.innerHTML += `\tЗараз ми маємо рівняння виду \`A * X = C\`, де \`X = A^-1*C\`
   \n\t\t\`[[1, 2, 0],[2, 5, -2], [0, -2, 5]]^-1 = ${leftMatrix}\`
   \n\t\t\`X = ${leftMatrix} * ${rightMatrix} = ${math.multiply(
  leftMatrix,
  rightMatrix
)}\``
