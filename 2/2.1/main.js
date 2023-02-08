// ----------------------------- 2.1 -----------------------------
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
        updateOnMouseMove: true
      }
    }
  ]
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
        updateOnMouseMove: true
      }
    }
  ]
})

// ----------------------------- 2.1.11 -----------------------------

functionPlot({
  target: '#plot3',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'sqrt(x^2)/x'
    }
  ]
})
