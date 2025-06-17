
console.log("hello");
let first = document.getElementById("first");
let second = document.getElementById("second");
const form = document.querySelector("form");
allInput = form.querySelectorAll("first input");

function next(){
    first.style.display = "none";
    second.style.display = "block";
}
function back(){
    first.style.display = "block";
    second.style.display = "none";
}