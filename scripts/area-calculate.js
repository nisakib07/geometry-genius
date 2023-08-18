function triangleArea() {
  const base = getInputValue("triangleBase");
  const height = getInputValue("triangleHeight");
  if (isNaN(height) || isNaN(base)) {
    alert("Input Numeric Value");
    return;
  }
  const area = 0.5 * base * height;
  setResultInnerText("triangleResult", area);

  addToLog("Triangle", area);
}
function rectangleArea() {
  const width = getInputValue("rectangleWidth");
  const length = getInputValue("rectangleLength");
  if (isNaN(length) || isNaN(width)) {
    alert("Input Numeric Value");
    return;
  }

  const area = width * length;
  setResultInnerText("rectangleResult", area);

  addToLog("Rectangle", area);
}

function parallelogramArea() {
  const base = getInputValue("parallelogramBase");

  const height = getInputValue("parallelogramHeight");
  if (isNaN(height) || isNaN(base)) {
    alert("Input Numeric Value");
    return;
  }

  const area = base * height;
  setResultInnerText("parallelogramResult", area);

  addToLog("Parallelogram", area);
}

function rhombusArea() {
  const d1 = getInputValue("rhombusd1");
  const d2 = getInputValue("rhombusd2");

  if (isNaN(d1) || isNaN(d2)) {
    alert("Input Numeric Value");
    return;
  }

  const area = 0.5 * d1 * d2;
  setResultInnerText("rhombusResult", area);

  addToLog("Rhombus", area);
}

function pentagonArea() {
  const perimeter = getInputValue("pentagonPerimeter");
  const apothem = getInputValue("pentagonApothem");

  if (isNaN(perimeter) || isNaN(apothem)) {
    alert("Input Numeric Value");
    return;
  }

  const area = 0.5 * perimeter * apothem;
  setResultInnerText("pentagonResult", area);
  addToLog("Pentagon", area);
}

function ellipseArea() {
  const firstRadius = getInputValue("ellipseFirstRadius");
  const secondRadius = getInputValue("ellipseSecondRadius");
  if (isNaN(secondRadius) || isNaN(firstRadius)) {
    alert("Input Numeric Value");
    return;
  }

  const area = (Math.PI * firstRadius * secondRadius).toFixed(3);
  setResultInnerText("ellipseResult", area);

  addToLog("Ellipse", area);
}
