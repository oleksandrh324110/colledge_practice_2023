// ----------------------------- 2.2 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'nthRoot(x, 4)^3',
      derivative: {
        fn: '3/(4*nthRoot(x, 4))',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot2',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '-x^2',
      derivative: {
        fn: '-2x',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot3',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '-x^3',
      derivative: {
        fn: '-3x^2',
        updateOnMouseMove: true
      }
    }
  ]
})
