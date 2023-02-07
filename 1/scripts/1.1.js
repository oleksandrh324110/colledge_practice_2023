// ----------------------------- 1.1 -----------------------------
print('1.1: ')

// ----------------------------- sin -----------------------------
print('\tsin x: ')
const sinx = [0.0037, 0.0368, 0.3465, 0.465, 0.571, 0.64382]

for (const x of sinx) {
  const y = Math.sin(x)
  print('\t\tx: ' + x + ';  \ty: ' + y.toFixed(8))
}

// ----------------------------- cos -----------------------------
print('\tcos x: ')
const cosx = sinx

for (const x of cosx) {
  const y = Math.cos(x)
  print('\t\tx: ' + x + ';  \ty: ' + y.toFixed(8))
}
