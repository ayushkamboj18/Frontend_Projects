function GetRandomNumber(max) {
    return Math.floor(Math.random()*max);   
}

function generateRandomColor(){
    let hexCharacters = ['0','1','2','3','5','6','7','8','9','a','b','c','d','e','f'];
    let color = "#";
    for(let i=0; i<6; i++){
        let randomNumber = GetRandomNumber(16);
        color = color + hexCharacters[randomNumber];
    }
    return color;
}

let parentBox = document.querySelector(".boxes");


for (let i = 0; i < 190; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = "4rem";
    box.style.height = "4rem";
    box.style.display = "inline-block";
    box.style.border = "solid 1px black";
    let h3 = document.createElement("h3");
    let randomNo = GetRandomNumber(500);
    h3.innerText = randomNo;
    box.append(h3);
    parentBox.append(box);
}
let allBoxes = document.querySelectorAll(".box");
function handleMouseMove() {
    allBoxes.forEach((box) => {
        box.style.backgroundColor = generateRandomColor();  
        box.querySelector('h3').innerText = GetRandomNumber(500);
    });
}

parentBox.addEventListener("mouseover",handleMouseMove);


