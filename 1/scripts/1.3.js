// ----------------------------- 1.3 -----------------------------
print('1.3: ')

// ----------------------------- arcsin s -----------------------------
print('\t`arcsin x`: ')
let arcsinx = [
  -0.3114562, -0.036338, 0.34616644825, 0.0468565, 0.87434732, 0.99876,
  0.989943, 0.876543, 0.765412
]

for (const x of arcsinx) {
  const y = Math.asin(x)
  printxy(x, y)
}

// ----------------------------- arccos s -----------------------------
print('\t`arccos x`: ')
let arccos = arcsinx

for (const x of arccos) {
  const y = Math.acos(x)
  printxy(x, y)
}
