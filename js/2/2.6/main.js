// ----------------------------- 2.6 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: 'asin(x)',
      derivative: {
        fn: '1/sqrt(1-x^2)',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot2',
  width: 600,
  height: 300,
  yAxis: { domain: [-1, 4] },
  grid: false,
  data: [
    {
      fn: 'acos(x)',
      derivative: {
        fn: '-1/sqrt(1-x^2)',
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
      fn: 'atan(x)',
      derivative: {
        fn: '1/(x^2+1)',
        updateOnMouseMove: true
      }
    }
  ]
})


functionPlot({
  target: '#plot4',
  width: 600,
  height: 300,
  yAxis: { domain: [-1, 4] },
  grid: false,
  data: [
    {
      fn: 'PI/2 - atan(x)',
      graphType: 'polyline',
      derivative: {
        fn: '-1/(x^2+1)',
        updateOnMouseMove: true
      }
    }
  ]
})
