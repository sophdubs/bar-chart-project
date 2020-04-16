const drawBarChart = function(data, options, element){
  console.log(data);
  console.log(options);
  console.log(element);
};

const chartData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chartOptions = {
  height: '500px',
  width: '700px'
};
const chartElement = $(".bar-chart");


drawBarChart(chartData, chartOptions, chartElement);
