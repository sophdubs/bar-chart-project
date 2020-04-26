# Bar Chart Generator

 A simple API to generate a custom bar chart tailored to the user's specifications and render it on a demo page.

 ## Getting Started

 Clone this repo to your local machine from your terminal command line.
 ```
 $ git clone https://github.com/sophdubs/bar-chart-project.git
 $ cd bar-chart-project.git
 ```

Install the project dependencies 
```
$ npm install
```

## Usage

Open `userFile.js` in your favorite text editor.

At the bottom of the file, you will see the function signature as follows: 

```
drawBarChart(data, options, element);
```

- The **data** parameter is the data the chart will work from. 

- The **options** parameter is an object which has optional customizations for the bar chart. 

- The **element** parameter is a DOM element or jQuery element that the chart will get rendered into.

Format your data array as specified in the section below. If you decide to rename your data array, make sure to update the function signature accordingly.

The options object with all the required keys is provided in the `userFile.js` file. For keys that you wish to customize, simply replace the current value with your preferred value based on the specifications in the section below. If no customization for that key is desired, simply leave the value as `'null'` and the default settings will be applied. ***Do not edit any of the provided keys or  delete any key/value pairs from the options object.***

The element argument has been handled for you and you do not need to edit this parameter.

Save all your changes to the `userFile.js` file. Open the `index.html` file in your browser to view your custom bar chart on the demo page.

## Parameters

### Data 
Fill this out later

### Options
The options parameter is an object containing sixteen key-value pairs:
- **height**: Number representing the desired height of the bar chart in pixels. If no height is provided by the user, the default height is 400px. 
- **width**: Number representing the desired width of the bar chart in pixels. If no width is provided by the user, the default width is 600px.
- **barColour**: String with the HEX code for desired color for the bars on the bar chart. If no color is specified, the default bar color is grey.  
- **barSpacing**: Number representing the space between bars in pixels. If no spacing is provided by the user, a default spacing will be applied. 
- **valuePos**: String representing the position of the numeric values of each bar. Possible values include 'top', 'center' and 'bottom'. If no value is provided, the default position will be 'top'.
- **valueColour**: String with the HEX code of the desired color for the numeric values in the bars on the bar chart. If no color is specified, the default color is black. 
- **labelColour**: String with the HEX code of the desired color for the labels below each bar on the X-axis. If no color is specified, the default color is black. 
- **subtitle**: String of the subtitle for your bar chart. If no subtitle is provided, the bar chart will have no subtitle.
- **titleColour**: String with the HEX code of the desired color of the bar chart subtitle. If no color is specified, the default color is black.
- **titleFontSize**: Number representing the font size of the subtitle in pixels. If no font size is provided by the user, a default font size of 50px will be applied.
- **subtitle**: String of the subtitle for your bar chart. If no subtitle is provided, the bar chart will have no subtitle.
- **subtitleColour**: String with the HEX code of the desired color of the bar chart subtitle. If no color is specified, the default color is black.
- **subtitleFontSize**: Number representing the font size of the subtitle in pixels. If no font size is provided by the user, a default font size of 30px will be applied. 
- **xAxis**: String of the X-axis label for your bar chart. If no label is provided, the bar chart will have no X-axis label.
- **yAxis**: String of the X-axis label for your bar chart. If no label is provided, the bar chart will have no X-axis label.
- **tickSpacing**: Number representing the space between ticks on the Y-axis. If no spacing is provided by the user, no ticks will be added to the Y-axis. 

**Note:**
For parameters requiring HEX codes, you can follow this link to a color picker page and copy paste the HEX code for your desired color. 
https://www.google.com/search?q=color+picker 

### Element 





