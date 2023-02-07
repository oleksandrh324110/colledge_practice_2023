// ----------------------------- 1.3 -----------------------------
print('1.3: ')

// ----------------------------- arcsin  -----------------------------
print('\tarcsin x: ')
const arcsinx = [
  -0.3114562, -0.036338, 0.34616644825, 0.0468565, 0.87434732, 0.99876,
  0.989943, 0.876543, 0.765412,
]

for (const x of arcsinx) {
  const y = Math.asin(x)
  print('\t\tx: ' + x + ';   \ty: ' + y.toFixed(8))
}

// ----------------------------- arccos  -----------------------------
print('\tarccos x: ')
const arccos = arcsinx

for (const x of arccos) {
  const y = Math.acos(x)
  print('\t\tx: ' + x + ';   \ty: ' + y.toFixed(8))
}
