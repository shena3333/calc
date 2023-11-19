let symbols = ['C', '←', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.', 'MS', 'MR','M+', 'M-', 'MRC'];
// нужно создать переменную container и положить в нее через querySelector элемент, внутри которого будут создаваться кнопки
const container = document.querySelector('.buttons'); //мое
console.log (container);// мое

symbols.map((value) => {
    // создать переменую el и прописать создание кнопок через createElement
const el=document.createElement('button'); //мое
console.log(el); //мое
    // присвоить value свойству textContent переменой el
    el.textContent=value;//мое
    // добавить через метод appendChild (ВНИМАНИЕ! Именно appendChild, а не обычный append) переменул el в container
        container.appendChild(el);//мое
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


// создать переменную display и положить в нее контейнер с соответствующим id через метод getElementById
const display=document.getElementById('display');// мое
console.log (display); // мое
// создать пустую переменую memory (мы ее будем все время переназначать, поэтому подумайте она должна быть const или let)
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
