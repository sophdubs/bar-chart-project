let root = document.documentElement;
const drawBarChart = function(data, options, element){
  // Setting width and height of bar chart based on passed in options.
  root.style.setProperty('--height', `${options.height}px`);
  root.style.setProperty('--width', `${options.width}px`);

  //Creating bars in bar chart from input data
  //Setting heigh of bars inline based on data inputs
  const maxHeight = options.height * 0.9;
  const maxVal = Math.max(...data);
  console.log(maxVal);

  for (let i = 0; i < data.length; i++) {
    const barHeight = (data[i] * maxHeight) / maxVal;
    $('.bar-list').append(`<div class="barDiv"><li class="${options.valuePos}" style="height: ${barHeight}px"><p class="value">${data[i]}</p></li></div>`);
  }

  // Setting width of bars based on data inputs
  const numBars = data.length;
  const barMargin = Math.floor(Number(options.width) / numBars) * 0.20;
  const barWidth = Math.floor(Number(options.width) / numBars) - barMargin;
  root.style.setProperty('--barWidth', `${barWidth}px`);
  root.style.setProperty('--barMargin', `${Math.floor(barMargin / 2)}px`);

  // Set colour of bars based on passed in options
  root.style.setProperty('--barColour', options.barColour)
};

const chartData = [1, 2, 3, 4, 5, 6, 7, 8];
const chartOptions = {
  height: '400',
  width: '600',
  valuePos: 'top',
  barColour: '#eb4034'
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
