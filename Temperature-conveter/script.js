function convertTemperature() {
    const input = document.getElementById("temperatureInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultBox = document.getElementById("result");

    if (input === "" || isNaN(input)) {
        resultBox.innerHTML = "⚠ Please enter a valid number!";
        resultBox.style.color = "#ff4d4d";
        return;
    }

    const temp = parseFloat(input);
    let output = "";

    if (unit === "celsius") {
        const f = (temp * 9/5) + 32;
        const k = temp + 273.15;
        output = `${temp}°C = ${f.toFixed(2)}°F | ${k.toFixed(2)}K`;
    }

    else if (unit === "fahrenheit") {
        const c = (temp - 32) * 5/9;
        const k = c + 273.15;
        output = `${temp}°F = ${c.toFixed(2)}°C | ${k.toFixed(2)}K`;
    }

    else if (unit === "kelvin") {
        const c = temp - 273.15;
        const f = (c * 9/5) + 32;
        output = `${temp}K = ${c.toFixed(2)}°C | ${f.toFixed(2)}°F`;
    }

    resultBox.innerHTML = output;
    resultBox.style.color = "#00ffcc";
}
