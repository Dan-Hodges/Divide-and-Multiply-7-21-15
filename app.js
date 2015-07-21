function byTen(num1) {
  return num1 / 10;
}
function byFive(num1) {
  return num1 / 5;
}
var mathBox = document.getElementById("mathBox");
function inputChecker() {
  var textField = document.getElementById('value').value;
  console.log("textField" + textField);
  if (textField === "") {
    alert("Please enter a number");
  }
  if(textField >= 1000) {
    mathBox.innerHTML = byTen(textField);
  }
  if(textField < 1000) {
    mathBox.innerHTML = byFive(textField);
  }
}