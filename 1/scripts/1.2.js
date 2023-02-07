// ----------------------------- 1.2 -----------------------------
print('1.2: ')

// ----------------------------- ex  -----------------------------
print('\te<sup>x</sup>: ')
const exx = [
  0.654, 0.2458, 0.36576, 0.465, 1.463, 2.376, 4.0785, 1.332, 1.4356, 1.9821,
  0.99832, 2.1112354, 0.786549834,
]

for (const x of exx) {
  const y = Math.exp(x)
  print('\t\tx: ' + x + ';   \ty: ' + y.toFixed(8))
}

// ----------------------------- log4x -----------------------------
print('\tlog<sub>x</sub>x: ')
const log4x = exx

for (const x of log4x) {
  const y = Math.log(x) / Math.log(4)
  print('\t\tx: ' + x + ';   \ty: ' + y.toFixed(8))
}
