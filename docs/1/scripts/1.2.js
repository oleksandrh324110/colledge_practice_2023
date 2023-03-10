// ----------------------------- 1.2 -----------------------------
print('1.2: ')

// ----------------------------- ex let -----------------------------
print('\t`e^x`: ')
let exx = [
  0.654, 0.2458, 0.36576, 0.465, 1.463, 2.376, 4.0785, 1.332, 1.4356, 1.9821,
  0.99832, 2.1112354, 0.786549834
]

for (const x of exx) {
  const y = Math.exp(x)
  printxy(x, y)
}

// ----------------------------- log4x -----------------------------
print('\t`log_4 x`: ')
let log4x = exx

for (const x of log4x) {
  const y = Math.log(x) / Math.log(4)
  printxy(x, y)
}
