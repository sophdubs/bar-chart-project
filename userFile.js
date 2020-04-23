// Use this file to create your custom Bar Chart
// Fill in the following with your own data and preferences
// Required fields are indicated
// If you have no customization for a field that is not required, simply leave as null and default settings will be used.

const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];

const chartOptions = {

  height: '300',
  width: '600',
  tickSpacing: '3',
  valuePos: 'top',
  valueColour: '#000000',
  barSpacing: '30px',
  barColour: '#eb4034',
  title: 'This is the title',
  titleColour: '#eb4034',
  titleFontSize: '40px',
  subtitle: 'This is the subtitle',
  subtitleColour: '#000000',
  subtitleFontSize: '20px',
  xAxis: 'x axis label',
  yAxis: 'y axis label',
  labelColour: 'blue'
};

const chartElement = $(".bar-chart");

drawBarChart(chartData, chartOptions, chartElement);
