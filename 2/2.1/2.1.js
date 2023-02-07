// ----------------------------- 2.1 -----------------------------
document.getElementById('result').innerHTML +=
  '<b>2.1.2: `y = x`</b> <div id="plot1"></div> <b>2.1.6: `y = -abs(x)`</b> <div id="plot2"></div> <b>2.1.1: `y = sqrt(x^2)/x`</b> <div id="plot3"></div>'
// ----------------------------- 2.1.2 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'x',
      derivative: {
        fn: '1',
        updateOnMouseMove: true,
      },
    },
  ],
})

// ----------------------------- 2.1.6 -----------------------------

functionPlot({
  target: '#plot2',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '-abs(x)',
      derivative: {
        fn: '-x/abs(x)',
        updateOnMouseMove: true,
      },
    },
  ],
})

// ----------------------------- 2.1.11 -----------------------------

functionPlot({
  target: '#plot3',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'sqrt(x^2)/x',
    },
  ],
})
