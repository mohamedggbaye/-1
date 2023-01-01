let buttonClickMe = document.getElementById("My button");
let h1Text = document.getElementById("hello-h1");
let num = 0;

buttonClickMe.innerText = "اضغطني";
buttonClickMe.addEventListener("click", mouseOver);

function mouseOver() {

    ++num;
    h1Text.innerText = num;
}
console.log("Beta 1.0 game")
