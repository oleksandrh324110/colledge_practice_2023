// ----------------------------- 2.6 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  yAxis: { domain: [-1, 4] },
  grid: false,
  data: [
    {
      fn: 'x^x',
      graphType: 'polyline',
      derivative: {
        fn: 'x^x*(log(x)/log(E)+1)',
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
  xAxis: { domain: [-5, 10] },
  grid: false,
  data: [
    {
      fn: 'E^(-(x/3-1)^2)+1',
      graphType: 'polyline',
      derivative: {
        fn: '(2*(x/3-1)*E^(-(x/3-1)^2))/-3',
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
      fn: 'sin(1/x)',
      graphType: 'polyline',
      derivative: {
        fn: '-cos(1/x)/x^2',
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
      fn: 'sin(x)/x',
      graphType: 'polyline',
      derivative: {
        fn: '(x*cos(x)-sin(x))/x^2',
        updateOnMouseMove: true
      }
    }
  ]
})

functionPlot({
  target: '#plot5',
  width: 600,
  height: 300,
  yAxis: { domain: [-5, 15] },
  xAxis: { domain: [-20, 20] },
  grid: false,
  data: [
    {
      fn: 'abs(x)^sin(abs(x))',
      graphType: 'polyline'
    }
  ]
})
