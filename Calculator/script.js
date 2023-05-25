let display = document.querySelector(".editor");

let initialValue = "";

display.innerText = initialValue;

let keys = document.querySelector(".keys");

keys.addEventListener("click", function (event) {
  display.innerText = display.innerText + event.target.innerText;
  if (event.target.classList.contains("equal-key")) {
    display.innerText = eval(display.innerText);
  }
  if(event.target.classList.contains("clear")){
    display.innerText = initialValue;
  }
});