// Necessary HTML Tags or Buttons
const preview = document.getElementById('preview');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// All Functions
for (let button of buttons) {
    button.addEventListener('click', function (e) {
        let myInput = e.target.innerText;
        if (myInput == 'AC') {
            preview.innerText = '';
            result.innerText = '';
        } else if (myInput == '⌫') {
            const previousNumber = preview.innerText;
            preview.innerText = previousNumber.substring(0, previousNumber.length - 1);
            result.innerText = '';
        } else if (myInput == '%') {
            alert('This is under construction!!! \n' +
            'Please try divide option to get percentage');
        } else if (myInput == '×') {
            myInput = '*';
            preview.innerText += '*';
        } else if (myInput == '÷') {
            myInput = '/';
            preview.innerText += '/';
        } else if (myInput == '=') {
            var evalConvert = eval(preview.innerText);
            result.innerText = evalConvert;
        } else {
            preview.innerText += myInput;
        }
    });
};