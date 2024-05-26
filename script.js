document.addEventListener('DOMContentLoaded', function () {
    const input1 = document.getElementById('input1');
    const calculateButton = document.getElementById('calculate');
    const result = document.getElementById('result');
    const clothesButton = document.getElementById('clothes');
    const shoesButton = document.getElementById('shoes');
    
    calculateButton.addEventListener('click', function () {
        const inputValue = parseFloat(input1.value);
        const selectedButton = document.querySelector('.calculation-button.selected');
        
        if (!selectedButton) {
            result.textContent = 'Выберите тип расчета';
            return;
        }
        
        const selectedCalculation = selectedButton.id;
        
        if (isNaN(inputValue)) {
            result.textContent = 'Введите число';
            return;
        }
    
        let calculation;
        if (selectedCalculation === 'clothes') {
            const increasedValue = inputValue * 1.05;
            calculation = (increasedValue * 14) + 1600;
        } else if (selectedCalculation === 'shoes') {
            const increasedValue = inputValue * 1.05;
            calculation = (increasedValue * 14) + 1900;
        }
        
        const roundedCalculation = calculation.toFixed(2);
        result.textContent = `Стоимость с доставкой🚚: ${roundedCalculation}₽`;
    });
    
    function selectButton(button) {
        clothesButton.classList.remove('selected');
        shoesButton.classList.remove('selected');
        button.classList.add('selected');
    }
    
    clothesButton.addEventListener('click', function () {
        selectButton(this);
    });
    
    shoesButton.addEventListener('click', function () {
        selectButton(this);
    });
input1.addEventListener('focus', function () {
    document.querySelector('.calculator').scrollIntoView({ behavior: 'smooth' });
});
});
