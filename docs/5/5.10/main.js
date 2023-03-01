const result = document.getElementById('result')

const a = math.matrix([5, 2, 5])
const b = math.matrix([2, -1, 2])

const projectionab = math.multiply(a, b) / vecAbs(b)

result.innerHTML +=
  '\tЗнаходимо проекцію вектора `vec a` на вектор `vec b` за формулою `pr_vec b vec a = (vec a * vec b)/abs(vec b)`:' +
  `\n\t\t\`pr_vec b vec a = ${math.multiply(a, b)}/${vecAbs(b)} = 6\``

function vecAbs(vec) {
  return Math.sqrt(
    vec.toArray().reduce((abs, v) => {
      return v ** 2 + abs
    }, 0)
  )
}
