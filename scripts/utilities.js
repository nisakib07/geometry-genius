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
