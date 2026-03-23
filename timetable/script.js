class Calculator {
    constructor() {
        this.previousOperandElement = document.querySelector('.previous-operand');
        this.currentOperandElement = document.querySelector('.current-operand');
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = null;
        this.shouldResetScreen = false;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Number buttons
        document.querySelectorAll('[data-number]').forEach(button => {
            button.addEventListener('click', () => {
                this.appendNumber(button.dataset.number);
                this.updateDisplay();
                this.addRippleEffect(button);
            });
        });
        
        // Operation buttons
        document.querySelectorAll('[data-operation]').forEach(button => {
            button.addEventListener('click', () => {
                this.chooseOperation(button.dataset.operation);
                this.updateDisplay();
                this.addRippleEffect(button);
            });
        });
        
        // Action buttons
        document.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', () => {
                switch(button.dataset.action) {
                    case 'clear':
                        this.clear();
                        break;
                    case 'delete':
                        this.delete();
                        break;
                    case 'percentage':
                        this.percentage();
                        break;
                    case 'equals':
                        this.compute();
                        break;
                }
                this.updateDisplay();
                this.addRippleEffect(button);
            });
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    }
    
    handleKeyboard(e) {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            this.appendNumber(e.key);
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            const operationMap = {
                '+': '+',
                '-': '−',
                '*': '×',
                '/': '÷'
            };
            this.chooseOperation(operationMap[e.key]);
        } else if (e.key === 'Enter' || e.key === '=') {
            this.compute();
        } else if (e.key === 'Escape') {
            this.clear();
        } else if (e.key === 'Backspace') {
            this.delete();
        } else if (e.key === '%') {
            this.percentage();
        }
        this.updateDisplay();
    }
    
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = null;
    }
    
    delete() {
        if (this.currentOperand === '0') return;
        
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '' || this.currentOperand === '-') {
            this.currentOperand = '0';
        }
    }
    
    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '0';
            this.shouldResetScreen = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
        
        // Limit input length
        if (this.currentOperand.length > 12) {
            this.currentOperand = this.currentOperand.slice(0, 12);
        }
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '0' && this.previousOperand === '') return;
        
        if (this.previousOperand !== '') {
            this.compute(false);
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }
    
    percentage() {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        
        this.currentOperand = (current / 100).toString();
    }
    
    compute(resetOperation = true) {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.currentOperand = 'Error';
                    this.previousOperand = '';
                    this.operation = null;
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        // Format result
        this.currentOperand = this.formatNumber(computation);
        
        if (resetOperation) {
            this.operation = null;
            this.previousOperand = '';
            this.shouldResetScreen = true;
        } else {
            this.previousOperand = this.currentOperand;
        }
    }
    
    formatNumber(number) {
        if (number === undefined || number === null) return '0';
        
        // Handle very large or very small numbers
        if (Math.abs(number) >= 1e10 || (Math.abs(number) < 1e-10 && number !== 0)) {
            return number.toExponential(5);
        }
        
        // Round to avoid floating point errors
        const rounded = Math.round(number * 100000000) / 100000000;
        
        // Format with appropriate decimal places
        let formatted = rounded.toString();
        if (formatted.length > 12) {
            formatted = rounded.toPrecision(10);
        }
        
        return formatted;
    }
    
    updateDisplay() {
        this.currentOperandElement.textContent = this.currentOperand;
        
        if (this.operation != null) {
            this.previousOperandElement.textContent = 
                `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }
    
    addRippleEffect(button) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});
