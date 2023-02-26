// ----------------------------- 2.3 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'log(abs (x))/log(10)',
      derivative: {
        fn: '1/(log(10)x)',
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
      fn: 'abs(log(x) / log(4))',
      derivative: {
        fn: 'log(x)/(log(4)*x*abs(log(x)))',
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
      fn: 'log(x) / log(2.7118281828)',
      derivative: {
        fn: '1/x',
        updateOnMouseMove: true
      }
    }
  ]
})
