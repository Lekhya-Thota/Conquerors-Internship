const display = document.getElementById('display');

const buttonConfig = [
    { text: 'C', action: 'clearDisplay()', class: '' },
    { text: '⌫', action: 'deleteLast()', class: '' },
    { text: '%', action: "appendValue('%')", class: '' },
    { text: '÷', action: "appendValue('/')", class: 'operator' },
    
    { text: '7', action: "appendValue('7')", class: '' },
    { text: '8', action: "appendValue('8')", class: '' },
    { text: '9', action: "appendValue('9')", class: '' },
    { text: '×', action: "appendValue('*')", class: 'operator' },
    
    { text: '4', action: "appendValue('4')", class: '' },
    { text: '5', action: "appendValue('5')", class: '' },
    { text: '6', action: "appendValue('6')", class: '' },
    { text: '−', action: "appendValue('-')", class: 'operator' },
    
    { text: '1', action: "appendValue('1')", class: '' },
    { text: '2', action: "appendValue('2')", class: '' },
    { text: '3', action: "appendValue('3')", class: '' },
    { text: '+', action: "appendValue('+')", class: 'operator' },
    
    { text: '0', action: "appendValue('0')", class: '' },
    { text: '.', action: "appendValue('.')", class: '' },
    { text: '=', action: 'calculateResult()', class: 'operator', style: 'grid-column: span 2;' }
];

function createButtons() {
    const buttonsContainer = document.getElementById('buttons');
    buttonConfig.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.onclick = () => eval(btn.action);
        if (btn.class) {
            button.className = btn.class;
        }
        if (btn.style) {
            button.style.cssText = btn.style;
        }
        buttonsContainer.appendChild(button);
    });
}

// Generate buttons when page loads
document.addEventListener('DOMContentLoaded', createButtons);

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }


    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            if (/^[0-9+\-*/%.]+$/.test(display.value)) {
                display.value = eval(display.value);
            } else {
                alert('Invalid input!');
            }
        } catch (error) {
            alert('Error in calculation!');
        }
    }