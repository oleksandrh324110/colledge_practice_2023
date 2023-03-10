const result = document.getElementById('result')

const a = math.matrix([1, -2, 3])
const b = math.matrix([0, -1, 2])
const c = math.matrix([3, -4, 5])

const ab = math.subtract(b, a)
const ac = math.subtract(c, a)

result.innerHTML += `
    \t\`vec (AB) = ${matrixToVector(b)} - ${matrixToVector(a)} = ${matrixToVector(ab)}\`
    \t\`vec (AC) = ${matrixToVector(c)} - ${matrixToVector(a)} = ${matrixToVector(ac)}\`
                     
           \t\`cos (hat (vec (AB), vec (AC))) = (vec (AB) * vec (AC))/(abs(vec (AB)) * abs(vec (AC))) = 
              ${math.multiply(ab,ac)}/(${math.norm(ab) * math.norm(ac)}) = -1\`
           \t\`alpha = 180^circ\``

function matrixToVector(vec) {
  return vec.toString().replaceAll('[', '(').replaceAll(']', ')')
}
