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
    console.log(barHeight);
    $('.bar-list').append(`<li style="height: ${barHeight}px">${data[i]}</li>`);
  }

  // Setting width of bars based on data inputs
  const numBars = data.length;
  const barMargin = Math.floor(Number(options.width) / numBars) * 0.15;
  const barWidth = Math.floor(Number(options.width) / numBars) - barMargin;
  root.style.setProperty('--barWidth', `${barWidth}px`);
  root.style.setProperty('--barMargin', `${Math.floor(barMargin / 2)}px`);


};

const chartData = [1, 2, 3, 4, 5, 6, 7];
const chartOptions = {
  height: '400',
  width: '600'
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
