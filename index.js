let root = document.documentElement;
const drawBarChart = function(data, options, element){
  // Setting width and height of bar chart based on passed in options.
  root.style.setProperty('--height', `${options.height}px`);
  root.style.setProperty('--width', `${options.width}px`);

  //Creating bars in bar chart from input data

  for (let i = 0; i < data.length; i++) {
    $('.bar-list').append(`<li>${data[i]}</li>`);
  }

  // Setting width and height of bars based on data inputs
  const numBars = data.length;
  // console.log(numBars);
  const barMargin = Math.floor(Number(options.width) / numBars) * 0.15;
  console.log(barMargin);
  const barWidth = Math.floor(Number(options.width) / numBars) - barMargin;
  console.log(barWidth);
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
