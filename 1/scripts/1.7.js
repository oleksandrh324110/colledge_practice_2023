// ----------------------------- 1.7 -----------------------------
print('1.7: ')
// ----------------------------- arctg x  -----------------------------
print('\t`arctg x`: ')
let arctgx = [
  37.541, 13.0368, 4.3465, 1.42365, 1.591171, 3.145567, 4.675892, 6.542311,
  7.452399, 0.123721, 0.76547, 0.21415,
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
