// ----------------------------- 2.1 -----------------------------
// ----------------------------- 2.1.2 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  yAxis: { domain: [-1, 9] },
  grid: false,
  data: [
    {
      fn: '2^abs(x)',
      graphType: 'polyline',
      derivative: {
        fn: '(log(2)*x*2^abs(x))/abs(x)',
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
  yAxis: { domain: [-1, 9] },
  grid: false,
  data: [
    {
      fn: '(1/2)^(-abs(x))',
      graphType: 'polyline',
      derivative: {
        fn: '(log(2)*x*2^abs(x))/abs(x)',
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
      fn: '2.71828182846^x',
      graphType: 'polyline',
      derivative: {
        fn: '2.71828182846^x',
        updateOnMouseMove: true
      }
    }
  ]
})
