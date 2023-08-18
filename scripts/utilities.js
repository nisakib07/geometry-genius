function getInputValue(fieldId) {
  const fieldElement = document.getElementById(fieldId);
  const fieldValueString = fieldElement.value;
  const fieldValueNum = parseFloat(fieldValueString);
  if (isNaN(fieldValueNum)) {
    fieldElement.value = "";
  }
  return fieldValueNum;
}

function setResultInnerText(areaId, area) {
  const resultArea = document.getElementById(areaId);
  resultArea.innerText = area;
}

function addToLog(shape, area) {
  console.log("adding soon");

  const elementEntry = document.getElementById("elementEntry");

  const count = elementEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-6");
  p.innerHTML = `${
    count + 1
  }. ${shape} ${area} cm<sup>2</sup> <button class="btn btn-primary">Convert</button>`;

  elementEntry.appendChild(p);
}
