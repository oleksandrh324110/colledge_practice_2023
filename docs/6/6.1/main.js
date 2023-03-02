const result = document.getElementById('result')

const res = math.matrix(math.multiply([[1, 2, 1], [2, 1, 2], [1, 2, 3]], [[4, 1, 1], [-4, 2, 0], [1, 2, 1]]))

result.innerHTML += `\t\t\`[
    [1, 2, 1], 
    [2, 1, 2], 
    [1, 2, 3]
  ] * [
    [4, 1, 1], 
    [-4, 2, 0], 
    [1, 2, 1]
  ] = ${res}\``