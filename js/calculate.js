// ---- triangle calculation ------
// function triangleValue() {
//     const triangleFieldWidth = document.getElementById('triangle-width');
//     const triangleInputValue = triangleFieldWidth.value;
//     const width = parseFloat(triangleInputValue);

//     const triangleFieldHeight = document.getElementById('triangle-height');
//     const triangleHeightValue = triangleFieldHeight.value;
//     const height = parseFloat(triangleHeightValue);

// const triangleArea = 0.5 * width * height;

//     const triangleValue = document.getElementById('area-result');
//     triangleValue.innerText = triangleArea;
// }
// ---- rectangle calculation ------
// function rectangleValue() {
//     const rectangleFieldWidth = document.getElementById('rectangle-width');
//     const rectangleInputValue = rectangleFieldWidth.value;
//     const rectWidth = parseFloat(rectangleInputValue);

//     const rectangleFieldHeight = document.getElementById('rectangle-length');
//     const rectangleHeightValue = rectangleFieldHeight.value;
//     const rectLength = parseFloat(rectangleHeightValue);

//     const rectangleArea = rectWidth * rectLength;

//     const rectangleValue = document.getElementById('rectangle-span');
//     rectangleValue.innerText = rectangleArea;
// }


// ---- triangle calculation new ------
function triangleCalculation() {
    const triangleWidth = getInputValue('triangle-width');
    const triangleHeight = getInputValue('triangle-height');

    if (isNaN(triangleWidth) || isNaN(triangleHeight)) {
        alert('Invalid Number');
        return;
    }

    const triangleArea = 0.5 * triangleWidth * triangleHeight;
    setElementInnerText('triangle-span', triangleArea);


}
// ----- rectangle calculation new ------
function rectangleCalculation() {
    const rectWidth = getInputValue('rectangle-width');
    const rectLength = getInputValue('rectangle-length');
    // ------validate----
    if (isNaN(rectWidth) || isNaN(rectLength)) {
        alert('Invalid Number');
        return;
    }
    // -------set element------
    const rectangleArea = rectWidth * rectLength;
    setElementInnerText('rectangle-span', rectangleArea);
}
// ----- parallelogram calculation -----
function parallelogramCalculation() {
    const parallelogramWidth = getInputValue('parallelogram-base');
    const parallelogramHeight = getInputValue('parallelogram-height');
    // ------validate----
    if (isNaN(parallelogramWidth) || isNaN(parallelogramHeight)) {
        alert('Invalid Number');
        return;
    }
    // -------set element------
    const parallelogramArea = parallelogramWidth * parallelogramHeight;
    setElementInnerText('parallelogram-span', parallelogramArea);
}
// -----rhombus calculation-----
function rhombusCalculation(){
    const rhombusWidth = getInputValue('rhombus-width');
    const rhombusHeight = getInputValue('rhombus-height');
      // ------validate----
      if (isNaN(rhombusWidth) || isNaN(rhombusHeight)) {
        alert('Invalid Number');
        return;
    }
    // -------set element------
    const rhombusArea = 0.5 * rhombusWidth * rhombusHeight;
    setElementInnerText('rhombus-span', rhombusArea);
}
// -----pentagon calculation-----
function pentagonCalculation(){
    const pentaWidth = getInputValue('penta-width');
    const pentaHeight = getInputValue('penta-height');
      // ------validate----
      if (isNaN(pentaWidth) || isNaN(pentaHeight)) {
        alert('Invalid Number');
        return;
    }
    // -------set element------
    const pentaArea = 0.5 * pentaWidth * pentaHeight;
    setElementInnerText('pentagon-span', pentaArea);
}
// -----ellipse calculation-----
function ellipseCalculation(){
    const major = getInputValue('ellipse-major');
    const minor = getInputValue('ellipse-minor');
      // ------validate----
      if (isNaN(major) || isNaN(minor)) {
        alert('Invalid Number');
        return;
    }
    // -------set element------
    const ellipseArea = 3.14 * major * minor;
    setElementInnerText('ellipse-span', ellipseArea);
}

// ---- reusable function ----
function getInputValue(fieldId) {
    const inputFieldId = document.getElementById(fieldId);
    const inputValueText = inputFieldId.value;
    const inputValue = parseFloat(inputValueText);
    inputFieldId.value = "";
    return inputValue;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}