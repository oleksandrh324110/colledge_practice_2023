const result = document.getElementById('result')

const a = math.matrix([-2, 1, 0])
const b = math.matrix([1, 0, -1])
let c = math.evaluate(`${a.toString()} + 2 * ${b.toString()}`)
let d = math.evaluate(`-${a.toString()} - 3 * ${b.toString()}`)

let multiply
let absSum
let cos

result.innerHTML +=
  `\t\`vec c = ${matrixToVector(c)}, vec d = ${matrixToVector(d)}\`` +
  '\n\n\tДля нормалізації вектора, треба кожну його кординату поділити на величину вектора:' +
  `\n\n\t\t\`vec c = ${matrixToVector((c = vecNormalize(c)))}, vec d = ${matrixToVector(
    (d = vecNormalize(d))
  )}\`` +
  '\n\tТепер, ми можемо виразити кут між векторами за формулою `cos alpha = (vec a * vec b)/(abs(vec a) * abs(vec b))`:' +
  `\n\t\t\`cos alpha = ${(multiply = +math
    .multiply(c, d)
    .toFixed(4))}/${(absSum = +(vecAbs(c) * vecAbs(d)).toFixed(4))} = ${(cos =
    multiply / absSum)}\`` +
  `\n\n\t\t\`arccos cos alpha = ${math.acos(cos) * (180 / math.pi)}&deg;\``

function vecAbs(vec) {
  return Math.sqrt(
    vec.toArray().reduce((abs, v) => {
      return v ** 2 + abs
    }, 0)
  )
}

function vecNormalize(vec) {
  return math.matrix(vec.toArray().map((v) => +(v / vecAbs(vec)).toFixed(4)))
}

function matrixToVector(vec) {
  return vec.toString().replaceAll('[', '(').replaceAll(']', ')')
}
