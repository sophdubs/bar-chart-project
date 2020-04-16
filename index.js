const drawBarChart = function(data, options, element){
  let root = document.documentElement;
  root.style.setProperty('--height', options.height);
  root.style.setProperty('--width', options.width);
};

const chartData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chartOptions = {
  height: '400px',
  width: '600px'
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
