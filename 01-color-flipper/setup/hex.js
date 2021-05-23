const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const myButton = document.getElementById("btn");
const color = document.querySelector(".color");

myButton.addEventListener("click",function () {
    console.log("testing");
    let hexValue = '#';
    for(let i=0;i<6;i++) {
        hexValue += hex[getRandomNumber()];
        console.log(hexValue);
    }

    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;
}
)

function getRandomNumber (){
    return Math.floor(Math.random()*hex.length);
}