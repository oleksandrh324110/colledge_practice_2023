// ----------------------------- 1.1 -----------------------------
print('1.1: ')

// ----------------------------- sin x -----------------------------
print('\t`sin x`: ')
let sinx = [0.0037, 0.0368, 0.3465, 0.465, 0.571, 0.64382]

for (const x of sinx) {
  const y = Math.sin(x)
  printxy(x, y)
}

// ----------------------------- cos x -----------------------------
print('\t`cos x`: ')
let cosx = sinx

for (const x of cosx) {
  const y = Math.cos(x)
  printxy(x, y)
}
