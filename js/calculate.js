function triangleValue() {
    const triangleFieldWidth = document.getElementById('triangle-width');
    const triangleInputValue = triangleFieldWidth.value;
    const width = parseFloat(triangleInputValue);

    const triangleFieldHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleFieldHeight.value;
    const height = parseFloat(triangleHeightValue);

    const triangleArea = 0.5 * width * height;

    const triangleValue = document.getElementById('area-result');
    triangleValue.innerText = triangleArea;
}