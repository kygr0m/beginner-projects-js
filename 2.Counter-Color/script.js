const counterDisplayElement = document.querySelector('#counterDisplay');
const addButton = document.querySelector('#counterAdd');
const subButton = document.querySelector('#counterSub');



let initNumber = 1;
let numberColor = 33;



addButton.addEventListener('click', function() {
    switch (initNumber) {
        case 1:
            changeFirstBackground(numberColor);
            numberColor = 66;
            initNumber += 1;
            break;
    
        case 2:
            changeFirstBackground(numberColor);
            numberColor = 99;
            initNumber += 1;
            break;

            case 3:
                changeFirstBackground(numberColor);
            numberColor = 33;
            initNumber += 1;
                break;
   case 4:
            changeSecondBackground(numberColor);
            numberColor = 66;
            initNumber += 1;
            break;
    
        case 5:
            changeSecondBackground(numberColor);
            numberColor = 99;
            initNumber += 1;
            break;

            case 6:
                changeSecondBackground(numberColor);
            numberColor = 33;
            initNumber += 1;
                break;

                   case 7:
            changeThirdBackground(numberColor);
            numberColor = 66;
            initNumber += 1;
            break;
    
        case 8:
            changeThirdBackground(numberColor);
            numberColor = 99;
            initNumber += 1;
            break;

            case 9:
                changeThirdBackground(numberColor);
            numberColor = 33;
            initNumber += 1;
                break;

    }
  if (initNumber < maxNumber) {
    initNumber += 1;
    updateCounterDisplay(); }
})

subButton.addEventListener('click', function() {
 
 

})



function updateCounterDisplay() {
    counterDisplayElement.textContent = initNumber.toString();
}



function changeFirstBackground (numberInside) {
document.body.style.backgroundColor = `#${numberInside}0000`;
}

function changeSecondBackground (numberInside) {
document.body.style.backgroundColor = `#00${numberInside}00`;
}

function changeThirdBackground (numberInside) {
document.body.style.backgroundColor = `#0000${numberInside}`;
}

