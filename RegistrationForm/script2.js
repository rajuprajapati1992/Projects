console.log("script2.js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector (".container").children

function getRandomColor(){
    let val1 = Math.ceil( 0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
    // return `rgb(200, 170, 165)`
}

let arr = Array.from(boxes);

for(let i = 0 ; i < boxes.length ; i++){
     boxes[i].style.backgroundColor = getRandomColor()
}


// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })

console.log(arr)