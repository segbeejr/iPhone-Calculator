const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');



buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'delete') {
            let string = display.innerText.tostring();
            display.innerText = string.substr(0, string.length = 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id =='equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})



const switchButton = document.getElementsByClassName('switchTheme');
const bodyOne = document.querySelector('body');
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
