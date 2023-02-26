// ----------------------------- 1.5 -----------------------------
print('1.5: ')

// ----------------------------- root3 x  -----------------------------
print('\t`root(3)(x)`: ')
let cubeRootx = [
  0.0058, 0.0118, 0.2315, 0.4785, 1.389, 3.142553, 6.1213, 8.965437, 25.875948,
  635.2315499, 7845.5423, 23199.434356
]

for (const x of cubeRootx) {
  const y = Math.cbrt(x)
  printxy(x, y)
}

// ----------------------------- minusSeconfPower x  -----------------------------
print('\t`x^-2`: ')
let minusSeconfPower = cubeRootx

for (const x of minusSeconfPower) {
  const y = x ** -2
  printxy(x, y)
}
