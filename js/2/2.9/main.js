// ----------------------------- 2.6 -----------------------------

functionPlot({
  target: '#plot1',
  width: 600,
  height: 300,
  yAxis: { domain: [-10, 10] },
  xAxis: { domain: [-20, 20] },
  grid: false,
  data: [
    {
      r: 'a*theta',
      range: [0, 100],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})


functionPlot({
  target: '#plot2',
  width: 600,
  height: 300,
  yAxis: { domain: [-1000, 1000] },
  xAxis: { domain: [-2000, 2000] },
  grid: false,
  data: [
    {
      r: 'a*theta^2',
      range: [0, Math.PI * 30],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
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
      r: 'a/theta',
      range: [-Math.PI * 10, Math.PI * 10],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
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
      r: 'a/sqrt(theta)',
      range: [0.000001, Math.PI * 30],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
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
      r: 'E^theta',
      range: [-Math.PI * 10, Math.PI * 10],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
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
      r: 'a * sqrt(theta)',
      range: [0, Math.PI * 30],
      scope: {
        a: 1,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot9',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: 'a * sin(2 * theta)',
      range: [0, Math.PI * 2],
      scope: {
        a: 3,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot10',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: 'a * cos(2 * theta)',
      range: [0, Math.PI * 2],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot7',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: 'a * sin(3 * theta)',
      range: [0, Math.PI],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot8',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: 'a * cos(3 * theta)',
      range: [0, Math.PI],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot11',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: '1 - cos(theta)',
      range: [-Math.PI, Math.PI],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot12',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: 'a * sqrt(2 * cos(2 * theta))',
      range: [-Math.PI / 4, Math.PI / 4],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})

functionPlot({
  target: '#plot13',
  width: 600,
  height: 300,
  grid: false,
  data: [
    {
      r: '2^(E/PI)',
      range: [-Math.PI, Math.PI],
      scope: {
        a: 2,
        phi: Math.PI
      },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
})