// ----------------------------- 1.7 -----------------------------
print('1.7: ')
// ----------------------------- arctg x  -----------------------------
print('\t`arctg x`: ')
let arctgx = [
  3.789, 0.0368, 1.3465,
  2.67345, 4.414671,
  3.567, 6.123876, 9.3254,
  2.17654, 2.95431,
  1.37778, 1.972111
]

for (const x of arctgx) {
  const y = Math.atan(x)
  printxy(x, y)
}

// ----------------------------- arcctg x  -----------------------------
print('\t`arc ctg x`:')
let arcctgx = arctgx

for (const x of arcctgx) {
  const y = Math.PI / 2 - Math.atan(x)
  printxy(x, y)
}
