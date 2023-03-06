// ----------------------------- 2.6 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      fn: '((E^x) - (E^(-x))) / 2',
      graphType: 'polyline',
      derivative: {
        fn: '((E^x) + (E^(-x))) / 2',
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
      fn: '((E^x) + (E^(-x))) / 2',
      graphType: 'polyline',
      derivative: {
        fn: '(E^x - E^-x)/2',
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
      fn: '(((E^x) - (E^(-x))) / 2)/(((E^x) + (E^(-x))) / 2)',
      graphType: 'polyline',
      derivative: {
        fn: '1/(((E^x) + (E^(-x))) / 2)^2',
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
      fn: '1 / (((E^x) - (E^(-x))) / 2)/(((E^x) + (E^(-x))) / 2)',
      graphType: 'polyline',
      derivative: {
        fn: '-1/(((E^x) - (E^(-x))) / 2)^2',
        updateOnMouseMove: true
      }
    }
  ]
})
