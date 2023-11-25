let symbols = ['C', '←', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.', 'MS', 'MR','M+', 'M-', 'MRC'];
const container = document.querySelector('.buttons'); 
console.log (container);
symbols.map((value) => {
const el=document.createElement('button'); 
console.log(el); 
el.className = 'butStyle';
    el.textContent=value;
        container.appendChild(el);
    el.addEventListener('click', () => {
        switch (value) {
            case 'C': clearScreen();
            break;
            case '←': backspace();
            break;
            case '=': calculate();
            break;
            // MS (Memory save) - записывает в память число, которое на экране
            case 'MS': memoryStore();
            break;
            // MR (Memory read) - выводит число из памяти на экран.
            case 'MR': memoryRecall();
            break;
            // M+ (Memory plus) - прибавление числа на экране к числу, записанному в памяти.
            case 'M+': memoryAdd();
            break;
            // M- (Memory minus) - вычитание числа на экране из числа, записанного в памяти.
            case 'M-': memorySubtract();
            break;
            // MRC (Memory read-clear)- вывод числа из памяти на экран и обнуление памяти.
            case 'MRC': memoryReadClear();
            break;
            default:
            appendToDisplay(value);
        }
    })
})


const display=document.getElementById('display');
let memory

function appendToDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    display.value = memory;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    display.value = memory;
}

function memoryReadClear() {
    display.value = memory;
}
let button = document.querySelectorAll('.butStyle');
for (let i = 0; i <= button.length; i++) {
    button[i].addEventListener('mouseover', function () {
        button[i].setAttribute('class', 'butStyle1');
    });
    button[i].addEventListener('mouseout', function () {
        button[i].setAttribute('class', 'butStyle');
    })
}
