const div = document.getElementById('result')

function print(s) {
  div.innerHTML += s + '\n'
}

function printxy(x, y) {
  const t = '\t\t'
  print('\t\t`x`: ' + x + t + '`y`: ' + y.toFixed(8))
}
