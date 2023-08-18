function triangleArea() {
  const base = getInputValue("triangleBase");
  if (isNaN(base)) {
    alert("Input Numeric Value");
    return;
  }
  const height = getInputValue("triangleHeight");
  if (isNaN(height)) {
    alert("Input Numeric Value");
    return;
  }
  const area = 0.5 * base * height;
  setResultInnerText("rectangleResult", area);
}
function rectangleArea() {
  const width = getInputValue("rectangleWidth");
  if (isNaN(width)) {
    alert("Input Numeric Value");
    return;
  }
  const length = getInputValue("rectangleLength");
  if (isNaN(length)) {
    alert("Input Numeric Value");
    return;
  }

  const area = width * length;
  setResultInnerText("rectangleResult", area);
}

function parallelogramArea() {
  const base = getInputValue("parallelogramBase");
  if (isNaN(base)) {
    alert("Input Numeric Value");
    return;
  }
  const height = getInputValue("parallelogramHeight");
  if (isNaN(height)) {
    alert("Input Numeric Value");
    return;
  }

  const area = base * height;
  setResultInnerText("rectangleResult", area);
}

function ellipseArea() {
  const firstRadius = getInputValue("ellipseFirstRadius");
  if (isNaN(firstRadius)) {
    alert("Input Numeric Value");
    return;
  }
  const secondRadius = getInputValue("ellipseSecondRadius");
  if (isNaN(secondRadius)) {
    alert("Input Numeric Value");
    return;
  }

  const area = (Math.PI * firstRadius * secondRadius).toFixed(3);
  setResultInnerText("ellipseResult", area);
}
