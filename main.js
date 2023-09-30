let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === '=') {
            display.value = eval(display.value);
        } else if (btn.id === 'c') {
            display.value = '';
        } else {
            display.value += btn.id;
        }
    })
})