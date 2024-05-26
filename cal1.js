let display=document.getElementById("display");

function appendTo(input) {

display.value += input;

}

function calculate(){

display.value=eval(display.value);

}

function clearDisplay(){

}

display.value="0