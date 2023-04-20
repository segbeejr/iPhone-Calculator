const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'delete') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id === '÷') { // change division symbol to "÷"
            display.innerText += '/';
        } else if (item.id === '.') {
            display.innerText += '.';
        } else if (display.innerText !== '' && item.id === 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '' && item.id === 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    });
});

const switchButton = document.querySelector('.switchTheme');
const body = document.body;

switchButton.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
