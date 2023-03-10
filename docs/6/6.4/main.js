const result = document.getElementById('result')

const matrix = [
  [53, 51, 12, 34, 37],
  [33, 11, 32, 14, 31],
  [66, 22, 64, 28, 62],
  [21, 41, 15, 16, 25],
  [22, 14, 13, 51, 34],
]

result.innerHTML += `\t\t\`rank ${matrix} = ${matrixRank(matrix)}\``

function matrixRank(A) {
  let m = A.length,
    n = A[0].length,
    k = m < n ? m : n,
    r = 1,
    rank = 0
  while (r <= k) {
    let B = []
    for (let i = 0; i < r; i++) B[i] = []
    for (let a = 0; a < m - r + 1; a++) {
      for (let b = 0; b < n - r + 1; b++) {
        for (let c = 0; c < r; c++) {
          for (let d = 0; d < r; d++) B[c][d] = A[a + c][b + d]
        }
        if (math.det(B) != 0) rank = r
      }
    }
    r++
  }
  return rank
}
