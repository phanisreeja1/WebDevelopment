function convertToCelsius() {
    const celsiusInput = document.getElementById('celsius').value;
    const celsius = parseFloat(celsiusInput);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result-text').textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        document.getElementById('result-text').textContent = 'Please enter a valid number.';
    }
}
