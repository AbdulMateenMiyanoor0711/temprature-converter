function changetemp() {
  let value = document.getElementById("teminput").value;
  if (value === "") {
    return alert("Enter Temperature Unit.");
  }

  let fromUnit = document.getElementById("selectdegree").value;
  let toUnit = document.getElementById("tempchange").value;

  let result;

  if (fromUnit === toUnit) {
    result = Number(value); 
  } else if (fromUnit === "°C" && toUnit === "°F") {
    result = ((Number(value) * 9) / 5 + 32);
  } else if (fromUnit === "°F" && toUnit === "°C") {
    result = (((Number(value) - 32) * 5) / 9);
  }

  document.getElementById("displaydegree").innerHTML = toUnit;
  document.getElementById("displaytemp").innerHTML = result.toFixed(3);
}