const numberContainer = document.querySelector(".enterNum");
const extraContainer = document.createElement("div");
numberContainer.appendChild(extraContainer);
let arrayContainer = [];




function addText(text) {
    const numberOnScreen = document.createTextNode(text);
    extraContainer.id = "num"
    extraContainer.appendChild(numberOnScreen);
    arrayContainer.push(numberOnScreen);
    console.log(arrayContainer);
}

function removeElement() {
    const elementrev = document.getElementById("num");
    while(elementrev.firstChild)
    {
        elementrev.removeChild(elementrev.firstChild);
    }

    arrayContainer = []
    console.log(arrayContainer);

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

