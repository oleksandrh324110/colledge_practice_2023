// ----------------------------- 1.4 -----------------------------
print('1.4: ')

// ----------------------------- tg x  -----------------------------
print('\t`tg x`: ')
let tgx = [
  0.0031277, 0.0389668, 0.34789651, 0.46789115, 1.57213379, 3.5698437, 4.53321,
  8.235234, 9.123523, 10.52326
]

for (const x of tgx) {
  const y = Math.tan(x)
  printxy(x, y)
}

// ----------------------------- ctg x  -----------------------------
print('\t`ctg x`: ')
let ctgx = tgx

for (const x of ctgx) {
  const y = 1 / Math.tan(x)
  printxy(x, y)
}
