// let age = 20;
// let hasvoter = 'Yes';

// if(age >= 18 && hasvoter == 'Yes'){

//     alert("You can vote");

// }

// else if(hasvoter == 'No'){
//     alert('you cannot vote, you do not have voter card')
// }

// else if(age < 18){
//     alert("You can't vote, you do not pass the age limit");
// }
// let color = "Red";


// if(color == 'Red'){
//     console.log('Stop');


// }else if( color == "Yellow"){
//     console.log('rev');

// }else if(color == "Green"){
//     console.log('go');

// }
// let isLoggedin = 1;


// let option = isLoggedin == 1 ? "Logout" : "Login";

//       document.writeln(option);



// 1 to 100 sum


// let counter = 1;

// let sum = 0;


// while(counter <= 100 ){

//     if(counter % 2 == 0){
//         sum = sum + counter;
//     }
//     counter++;
// }
//  document.writeln(sum);



// Today Learn India write down 10 time

// let counter = 0;

// while(counter <= 10){

//     document.writeln('Today Learn India');

//     document.writeln('<br>');

//     counter++;

// }


// Type Conversion

// let type = "32";

// console.log(typeof type);

// let NewType = Number(type);

// console.log(NewType);

// console.log(typeof NewType);

// let type = "hello";
// console.log(typeof type);

// let NewType = Number(type);

// console.log(NewType);

// console.log(typeof NewType);

// let type = false;

// console.log(typeof type);

// let NewType = Number(type);

// console.log(NewType);

// console.log(typeof NewType);

// string mainupulation

// let str = "rahulkumar";

// if("Rahulkumar" == str){

//        console.log("Equal");

// }else{
//        console.log("Not Equal");
// }


// concate or marg

// let str1 = "rajeshraj";

// let str2 = "kumar";

// let str3 = str1.concat(" ", str2);

// console.log(str3);


//Array under Array

// let book = ["Maths", "Physics", "Bio", "computer science"];

// let bookWithPages = [
//        ["Maths", ["300", "400"]],
//        ["Physics", "550"],
//        ["Bio", "450"],

// ];

// let fetch = bookWithPages[0][1][1];

// console.log(fetch);



// let books = ["Maths", "Physics", "Bio", "computer science"];

// let bookslength = books.length;

// let i = 0;

// for(i = 0; i < bookslength; i++){

//        console.log(`Element ${i} is ${books[i]} \n `);

// }


// function on array

// let book = ["Maths", "Physics", "Bio", "computer science"];

// book.forEach(myfu);

// function myfu(value){

//        console.log(value);
// }

// table print repeat task

// function MulTable(num){

//        for(i=1; i<=10; i++){

//               document.writeln(`${num} x ${i} = ${num*i}`);
//               document.writeln("<br>");
//        }
//        document.writeln("<br><br>");

// }
// MulTable(8);
// MulTable(16);


// let j = 0;
// for(j=1; j<=10; j++){

//        // document.writeln("*");
//        if(j == 5){
//               document.writeln("  ");
//        }else{
//               document.write("*");
//        }
// }

// document.writeln("<br><br>");

// let k = 0;

// for(k=1; k<=10; k++){
//        // document.writeln("$");
// if(k == 6){
//        document.writeln("  ");

// }else{
//        document.write("$");
// }

// }

// document.writeln("<br>");


// let pass = "ABC";

// let uPass =  prompt("Give password");

// if(pass == uPass){
//        window.location.href = "script.html";
// }

// window.location.href = "google.com"

// faulty calculater

let random = Math.random()

let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {

              "+": "-",

              "*": "+",

              "-": "/",

              "/": "**",
       }

       if(isNaN(a) || isNaN(b)){
              alert("Not a number");
       }
       if(c == "+" || c =="*" || c == "-" || c =="/" ){
               c = obj[c]
       alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
       }else{
              alert("This is not correct operator.")
       }

// if (random > 0.1) {

//        // perform correct calculation

//        console.log(random)
//        console.log(`The result is ${a} ${c} ${b}`)
//        alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }

// else {
       // perform wrong calculation
      

