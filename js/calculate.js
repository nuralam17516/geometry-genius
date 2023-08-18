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
function triangleCalculation(){
    const triangleWidth = getInputValue('triangle-width');
    const triangleHeight = getInputValue('triangle-height');
    const triangleArea = 0.5 * triangleWidth * triangleHeight;
    setElementInnerText('triangle-span', triangleArea);

}
// ----- parallelogram calculation -----
function parallelogramCalculation() {
    const parallelogramWidth = getInputValue('parallelogram-base');
    const parallelogramHeight = getInputValue('parallelogram-height');
    const parallelogramArea = parallelogramWidth * parallelogramHeight;
    setElementInnerText('parallelogram-span', parallelogramArea);

}

// ---- reusable function ----
function getInputValue(fieldId) {
    const inputFieldId = document.getElementById(fieldId);
    const inputValueText = inputFieldId.value;
    const InputValue = parseFloat(inputValueText);
    return InputValue;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}