// Use this file to create your custom Bar Chart
// Fill in the following with your own data and preferences
// Required fields are indicated
// If you have no customization for a field that is not required, simply leave as null and default settings will be used.

const chartData = {
  'barData': [[1010, 8979, 28379], [1195, 9729, 30106], [1310, 10560, 31927], [1470, 11207, 33383], [1587, 11843, 35056], [1690, 12586, 36831], [1834, 13188, 38422], [1974, 13986, 40190], [2146, 14761, 42110], [2302, 15541, 43888]],
  'barLabels': [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  'barColors': ['#f59898', '#a8f3f7', '#d1c9c9'],
  'legend': ['Deaths', 'Recoveries', 'Cases']
};

const chartOptions = {

  height: '400',
  width: '700',
  barSpacing: '25px',
  valueColour: '#000000',
  labelColour: '#000000',
  title: 'Covid-19 Progression in Canada',
  titleColour: '#000000',
  titleFontSize: '40px',
  subtitle: 'Ten Day Report from April 15th to April 24th 2020',
  subtitleColour: '#000000',
  subtitleFontSize: '22px',
  xAxis: 'Dates in April 2020',
  yAxis: 'Number of People',
  tickSpacing: '10000'
};

const chartElement = $(".bar-chart");

drawBarChart(chartData, chartOptions, chartElement);





