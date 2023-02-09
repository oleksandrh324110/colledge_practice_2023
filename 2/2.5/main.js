// ----------------------------- 2.5 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'sin(x)',
      derivative: {
        fn: 'cos(x)',
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
      fn: 'cos(x)',
      derivative: {
        fn: '-sin(x)',
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
      fn: 'tan(x)',
      derivative: {
        fn: '1/(cos(x)^2)',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot4',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '1/tan(x)',
      graphType: 'polyline',
      derivative: {
        fn: '-1/(sin(x)^2)',
        updateOnMouseMove: true
      }
    }
  ]
})

functionPlot({
  target: '#plot5',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '1/cos(x)',
      graphType: 'polyline',
      derivative: {
        fn: '1/cos(x) * tan(x)',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot6',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'sin(abs(x))',
      graphType: 'polyline',
      derivative: {
        fn: '(x*cos(abs(x)))/abs(x)',
        updateOnMouseMove: true
      }
    }
  ]
})
