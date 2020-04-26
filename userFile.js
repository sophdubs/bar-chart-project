// Use this file to create your custom Bar Chart
// Fill in the following with your own data and preferences
// Required fields are indicated
// If you have no customization for a field that is not required, simply leave as null and default settings will be used.

// const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];

const chartOptions = {

  height: '300',
  width: '600',
  barColour: '#eb4034',
  barSpacing: '30px',
  valuePos: 'top',
  valueColour: '#000000',
  labelColour: 'blue',
  title: 'This is the title',
  titleColour: '#eb4034',
  titleFontSize: '40px',
  subtitle: 'This is the subtitle',
  subtitleColour: '#000000',
  subtitleFontSize: '20px',
  xAxis: 'x axis label',
  yAxis: 'y axis label',
  tickSpacing: '3'
};

const chartData = {
  'barData': [[11899, 513], [15475, 295], [22141, 1408], [41495, 2757], [44450, 3024], [57298, 445], [81518, 3305], [85195, 7340], [101739, 11591], [164274, 3040]],
  'barLabels': ['Belgium', 'Switzerland', 'United Kingdom', 'Iran', 'France', 'Germany', 'Mainland China', 'Spain', 'Italy', 'United States'],
  'barColors': ['red', 'grey'],
  'legend': ['Cases', 'Deaths']
};

const chartData2 = {
  'barData': [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]],
  'barLabels': ['Belgium', 'Switzerland', 'United Kingdom', 'Iran', 'France', 'Germany', 'Mainland China', 'Spain', 'Italy', 'United States'],
  'barColors': ['red', 'grey'],
  'legend': ['Cases', 'Deaths']
};

const chartElement = $(".bar-chart");

drawBarChart(chartData, chartOptions, chartElement);

// data = {
//   'bars': {
//     'Belgium': {'cases': 11899, 'deaths': 513 },
//     'Switzerland': {'cases': 15475, 'deaths': 295 },
//     'United Kingdom': {'cases': 22141, 'deaths': 1408 },
//     'Iran': {'cases': 41495, 'deaths': 2757 },
//     'France': {'cases': 44450, 'deaths': 3024 },
//     'Germany': {'cases': 57298, 'deaths': 455 },
//     'Mainland China': {'cases': 81518, 'deaths': 3305 },
//     'Spain': {'cases': 85195, 'deaths': 7340 },
//     'Italy': {'cases': 101739, 'deaths': 11591 },
//     'United States': {'cases': 164274, 'deaths': 3040 }
//   },
//   'barColors': {
//     'cases': 'red',
//     'deaths': 'grey'
//   }
// };




// const chartData = [['first', 1], ['second', 2], ['third', 3], ['fourth', 4], ['fifth', 5], ['sixth', 6], ['seventh', 7], ['eighth', 8]];

