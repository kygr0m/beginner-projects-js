const newColorBtn = document.getElementById('new-color');
const currentColorText = document.getElementById('current-color');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const NUMBER_HEX_DIGITS = 6;


function generateHex() {
    let tempString = '';
    for(let index = 1; index <= NUMBER_HEX_DIGITS; index++ )
    {
        tempString += hexValues[randomNumber(0, 15)];
    }
   return tempString;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


newColorBtn.addEventListener('click', function() {
    let newColor = '#' + generateHex();
    document.body.style.backgroundColor = newColor; 
    currentColorText.textContent = newColor;
}) 

