const numberContainer = document.querySelector(".enterNum");
const extraContainer = document.createElement("div");
const answerContainer = document.createElement("div");
const addButton = document.querySelector("#addition");
const subButton = document.querySelector("#subtraction");
const divideButton = document.querySelector("#division");
const multiplicationButton = document.querySelector("#multiplication");
numberContainer.appendChild(extraContainer);
numberContainer.appendChild(answerContainer);
let arrayContainer = [];
let addMarker = false;
let subMarker = false;
let multMarker = false;
let divMarker = false;




function addText(text) {
    const numberOnScreen = document.createTextNode(text);
    extraContainer.id = "num"
    extraContainer.appendChild(numberOnScreen);
    arrayContainer.push(text);
    console.log(arrayContainer);
}

addButton.addEventListener("click", function turnOnAdd(){
    if(addMarker === false)
    {
        addMarker = true
        console.log(addMarker)
    }
})

subButton.addEventListener("click", function turnOnSub(){
    if(subMarker === false)
    {
        subMarker = true
        console.log(subMarker)
    }
})

divideButton.addEventListener("click", function turnOnDivide(){
    if(divMarker === false)
    {
        divMarker = true
        console.log(divMarker)
    }
})

multiplicationButton.addEventListener("click", function turnOnMulti(){
    if(multMarker === false)
    {
        multMarker = true
        console.log(multMarker)
    }
})



function removeElement() {
    const elementrev = document.getElementById("num");
    while(elementrev.firstChild)
    {
        elementrev.removeChild(elementrev.firstChild);
    }

    const answerrev = document.getElementById("ans");
    while(answerrev.firstChild)
    {
        answerrev.removeChild(answerrev.firstChild);
    }

    arrayContainer = []
    console.log(arrayContainer);

    addMarker = false;
    subMarker = false;
    multMarker = false;
    divMarker = false;

    console.log(addMarker)

}

function operate() {
    const arrayJoin = arrayContainer.join("");

    if(addMarker === true)
    {
        const arraySplitAddition = arrayJoin.split('+');
        const number1 = arraySplitAddition[0];
        const number2 = arraySplitAddition[1];

         let addDisplay = add(Number(number1), Number(number2));
         const answerOnScreen = document.createTextNode(String(addDisplay));
         answerContainer.id = "ans"
         answerContainer.appendChild(answerOnScreen);
         


    }

    if(subMarker === true)
    {
        const arraySplitSubtraction = arrayJoin.split('-');
        const number1 = arraySplitSubtraction[0];
        const number2 = arraySplitSubtraction[1];

        let subDisplay = subtract(Number(number1), Number(number2));
        const answerOnScreen = document.createTextNode(String(subDisplay));
        answerContainer.id = "ans"
        answerContainer.appendChild(answerOnScreen);
    }

    if(multMarker === true)
    {
        const arraySplitMultiplication = arrayJoin.split('*');
        const number1 = arraySplitMultiplication[0];
        const number2 = arraySplitMultiplication[1];

        let multDisplay = multiply(Number(number1), Number(number2));
        const answerOnScreen = document.createTextNode(String(multDisplay));
        answerContainer.id = "ans"
        answerContainer.appendChild(answerOnScreen);
    }

    if(divMarker === true)
    {
        const arraySplitDivision = arrayJoin.split('/');
        const number1 = arraySplitDivision[0];
        const number2 = arraySplitDivision[1];

        let divDisplay = divide(Number(number1), Number(number2));
        const answerOnScreen = document.createTextNode(String(divDisplay));
        answerContainer.id = "ans"
        answerContainer.appendChild(answerOnScreen);


    }
    
    
    
}


function add(number1, number2)
{
    return number1 + number2;
}

function subtract(number1, number2)
{
    return number1 - number2
}

function multiply(number1, number2)
{
    return number1 * number2
}

function divide(number1, number2)
{
    return number1 / number2
}

