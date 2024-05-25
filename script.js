// script.js
document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const calculateButton = document.getElementById('calculate');
    const result = document.getElementById('result');
    
    calculateButton.addEventListener('click', function () {
        const inputValue = parseFloat(screen.value);
        
        if (isNaN(inputValue)) {
            result.textContent = 'Ошибка: введите число';
            return;
        }
        
 
	const increasedValue = inputValue * 1.05;
        // Умножение на 14 и добавление 1900
        const calculation = (increasedValue * 14) + 1900;
	const roundedCalculation = calculation.toFixed(2);
        result.textContent = `Цена с доставкой🚚: ${roundedCalculation}`;
    });
});