function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("input").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (inputValue * 9/5) + 32; // Convert Celsius to Fahrenheit
    } else {
        result = (inputValue - 32) * 5/9; // Convert Fahrenheit to Celsius
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)}° ${unit.toUpperCase()}`;
}