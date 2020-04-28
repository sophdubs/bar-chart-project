// Selector to grab the root element which will be used to access and update CSS variables to customize bar chart.
let root = document.documentElement;

//Helper function to determine the max value in the input dataset
const findMaxValue = function(data) {
  let max = 0;
  for (let i = 0; i < data.barData.length; i++) {
    for (let j = 0; j < data.barData[0].length; j++) {
      if (data.barData[i][j] > max) {
        max = data.barData[i][j];
      }
    }
  }
  return max;
};

//Helper function to determine the max value on the Y axis.
//If user provided tick spacing, it will be the closest multiple of the provided tick spacing greater or euqal than the max val.
//If no tick spacing is provided, the max value on the Y axis will be the Max value in the dataset.
const findMaxHeight = function(maxValue, tickSpacing) {
  if (tickSpacing) {
    return Math.ceil(maxValue / tickSpacing) * tickSpacing;
  } else {
    return maxValue;
  }
};

// Fuction sets width and height of bar chart based on customized values passed in by the user.
const generateBlankGraph = function(height, width) {
  root.style.setProperty('--height', `${height}px`);
  root.style.setProperty('--width', `${width}px`);
};

// Function that adds ticks to the Y axis with custom spacing specified by the user.
// If no spacing is provided, no ticks are added to the graph's Y axis.
const addCustomTicks = function(tickSpacing, maxHeight, height) {
  if (!tickSpacing) {
    return;
  } else {
    let tickPixels = height / (maxHeight / tickSpacing);
    let sum = maxHeight;
    while (sum > 0) {
      $('.ticks').append(`<li class="tick"></li>`);
      $('.tick-nums').append(`<li class="tick-num">${sum}</li>`);
      sum -= Number(tickSpacing);
    }
    root.style.setProperty('--tickPixels', tickPixels + 'px');
    return;
  }
};

// Add bars to graph and customize them to user input. Bar width is id dependent on total amout of values passed in.
// Customization include position of values within the bars, valueColour and spacing between bars
const addCustomBars = function(data, specs) {
  // Destructure values from specs object to easily access them
  const {height, width, maxHeight, barSpacing, valueColour}  = specs;
  //Creating bars in bar chart from input data
  //Setting height of bars inline based on data inputs

  for (let i = 0; i < data.barData.length; i++) {
    let str = '';
    let zIndex = 3;
    for (let j = 0; j < data.barData[0].length; j++) {
      let barHeight = (data.barData[i][j] * height) / maxHeight;
      str += `<li class="bar" style="height:${barHeight}px; z-index: ${zIndex}; background: ${data.barColors[j]}"><p class="value">${data.barData[i][j]}</p><p class="bar-label">${data.barLabels[i]}</p></li>`;
      zIndex --;
    }
    $('.bar-list').append('<div class="barDiv"><ul class="bar-ul">' + str + '</ul></div>');
  }

  // Default Settings for bar spacing and width of bars if user did not specify
  const numBars = data.barData.length;
  let barMargin = (Math.floor(Number(width) / numBars) * 0.20) / 2;
  let barWidth = Math.floor(Number(width) / numBars) - (barMargin * 2);
  // // Override default settings if user provided barSpacing
  if (barSpacing) {
    const space = Number(barSpacing.substring(0, barSpacing.length - 2));
    const diff = width - (numBars * space);
    barMargin = space / 2;
    barWidth = diff / numBars;
  }
  // Set bar spacing and bar width
  root.style.setProperty('--barWidth', `${barWidth}px`);
  root.style.setProperty('--barMargin', `${barMargin}px`);
  // Set custom colour for bars and bar values if customization was provided
  if (valueColour) {
    root.style.setProperty('--valueColour', valueColour);
  }
};

// If users prodive legend information in the data object (in the case of a stacked bar chart), this function will generate a custom legend.
const addCustomLegend = function(data) {
  if (data.legend) {
    const legend = data.legend;
    const colors = data.barColors;
    for (let i = 0; i < legend.length; i++) {
      $('.legend-list').append(`<li><div class="legend-square" style="background: ${colors[i]}"></div><span>${legend[i]}</span></li>`);
    }
    $('.legend-list').css('border', '1px solid black');
  }
};

// If user provides a title, this function will add it to the page header displayed above the bar graph.
// Title colour and font size is customized if the user provides desired specifications.
const addCustomTitle = function(specs) {
  const {title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize} = specs;
  if (title) {
    $('header').append(`<h1 class="title">${title}</h1>`);
    if (titleColour) {
      root.style.setProperty('--titleColour', titleColour);
    }
    if (titleFontSize) {
      root.style.setProperty('--titleFontSize', titleFontSize);
    }
  }
  if (subtitle) {
    $('header').append(`<h2 class="subtitle">${subtitle}</h2>`);
    if(subtitleColour) {
      root.style.setProperty('--subtitleColour', subtitleColour);
    }
    if (subtitleFontSize) {
      root.style.setProperty('--subtitleFontSize', subtitleFontSize);
    }
  }
};

// If user provided x-axis and y-axis subtitles, they are added to the graph.
const addCustomAxes = function(yAxis, xAxis) {
  if (yAxis) {
    $('.y-axis').append(`<p>${yAxis}</p>`);
  }
  if(xAxis) {
    $('.x-axis').append(`<p>${xAxis}</p>`);
  }
};

// If user provides a custom colour for the labels, function sets the label to that colour.
const customizeLabels = function(labelColour) {
  if(labelColour) {
    root.style.setProperty('--labelColour', labelColour);
  }
};

const drawBarChart = function(data, options, element){
  // Destructuring options for use in helper functions
  const {height, width, tickSpacing, barSpacing, valueColour, title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize, yAxis, xAxis, labelColour} = options;
  const maxValue = findMaxValue(data);
  const maxHeight = findMaxHeight(maxValue, tickSpacing);
  // Setting width and height of bar chart based on passed in options.
  generateBlankGraph(height, width);
  // Adding ticks to graph's Y axis based on custom tickSpacing passed in by user
  addCustomTicks(tickSpacing, maxHeight, height);
  // Add bars to graph and customize them to user input
  // Customization include position of values within the bars, valueColour and spacing between bars
  addCustomBars(data, {height, width, maxHeight, barSpacing, valueColour});
  //Creates custom legend to identify which colors represents which data in a stacked bar chart
  addCustomLegend(data);
  //Sets title/subtitle and title/subtitle customizations if user provides title, subtitlem custom colours and fonts sizes.
  addCustomTitle({title, titleColour, titleFontSize, subtitle, subtitleColour, subtitleFontSize});
  // Adds bar chart axes if user provides them
  addCustomAxes(yAxis, xAxis);
  // label colour can be customized if user specifies desired colour
  customizeLabels(labelColour);
};
