
let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);

let string = "";

buttonArray.forEach(btn => {

    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = "";
            display.value = string;


        } else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
            string = "0";
            
        } else if (e.target.innerHTML == '%'){
            string += " * 100 /";
            display.value = string;
        }
          else {
            string += e.target.innerHTML;
            display.value = string;
        }

        
    })
})