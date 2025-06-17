// let counter = 1;

// while(counter <= 10){
//     // document.writeln('Today learn india \n');

//     if(counter % 2 == 0){
//         console.log("Even \n");
//     }else{
//         console.log("Odd \n");
//     }
//     counter++;

// }
// let input;
// do {
//   input = prompt("Enter a number greater than 10:");
// } while (input <= 10);
// console.log("You entered: " + input);
// // Explanation: The loop keeps asking for input until the user enters a number greater than 10.

// let num = 1;
// while (num <= 10) {
//   if (num % 2 == 0) {
//     num++;
//     continue; // Skip even numbers
//   }
//   console.log(num);
//   num++;
// }
// // Explanation: This loop skips even numbers and prints only odd numbers.


// let fruits = ["Apple", "Banana", "Cherry"];
// let index = 0;
// while (index < fruits.length) {
//   console.log(fruits[index]);
//   index++;
// }
// // Explanation: This loop iterates through the `fruits` array and prints each element.


let score = prompt("Enter your score (0-100):");

let grade;

if (score >= 90 && score <= 100 ) {
  grade = "A";
  

} else if (score >= 70 && score <= 89) {
  grade = "B";

}else if(score >= 60 && score <= 69){
    grade = "C";

  
}else if(score >= 50 && score <= 59){
    grade = "D";

}else if(score >= 0 && score <= 49){
    grade = "F";

}
console.log("according to your score, your grade is:", grade);


// let number = -1;

// if (number >= 0) {
//   if (number === 0) {
//     console.log("The number is zero.");
//   } else {
//     console.log("The number is positive.");
//   }
// } else {
//   console.log("The number is negative.");
// }


// let num = 77;

// if (num % 2 == 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }

// let password = "rajuprajapati126";

// if(password == "rajuprajapati123"){
    
//     console.log("Accses Granted");

// }else{
    
//     console.log("Accsess Denied.")
// }

// let a = 5;

// function factorial(number){
 
//     let arr = Array.from(Array(number+1).keys())
 
//     let c = arr.slice(1,).reduce((a, b)=> a*b)
 
//     return c 
// }

// function facFor(number){
    
//     let fac = 1;
    
//     for(let index = 1; index <= number; index++){
       
//         fac = fac * index
        
       
//     } 
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))

// let arr = [1, 13, 5, 7, 11];
// let newArr = [12, 34, 45]
// newArr[ 0 ]
// console.log(newArr[0]);
// arr.push(newArr[0]);
// arr.push(newArr[1]);
// arr.push(newArr[2]);

// for(let i = 0; i < newArr.length; i++){
//     arr.push(newArr[i]);
// }

// console.log(arr);
// for(let index = 0; index < newArr.length; index++){

    // const element = arr[index];
    // arr.push(newArr +"  "+)
// }
// console.log(newArr)


// // fibonacci series
// var a = 0;
//     b = 1;
 
     
//     for(var i=0; i<=10; i++){
//         console.log(a);
//         var temp = a + b;
//         a = b;
//         b = temp;
//     }

// Using an anonymous function as a callback
// setTimeout(function() {
    
//     console.log("Hello, world!");

// }, 5000);

// object Property "this" keyword 
   
// let person = {

//     firstName: 'Raju Prajapati',
//     lastName: 'Prajapati',

//     sayHello () {
//        console.log("Hello! i am " + this.firstName  + " and i have a " + car.brand + " car. ");
//     }
// };
// let car = {
//     brand: 'Tata',
//     model: 'Safari',
// }
// person.sayHello();

// Date object

// let x = new Date();

// console.log(x);

// Object constructor

// var student1 ={
//     firstName = "raju",
//     lastName = "prajapati",
//     age: 25,
//     class: 5
// }

// function Student(first, last, age, cls){

//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }
//     // Student.prototype.nationality = "Indian";
//     // Student.prototype.name = function(){
//         // return this.firstName +"  "+ this.lastName;
    

//     var student1 = new Student("raju", "prajapati", 25, 5);
//     student1.nationality = "Indian";
//     student1.name = function(){
//           return this.firstName +"  "+ this.lastName;
//     }
//     // var student2 = new Student("ajeet", "kumar", 25, 5);
//     console.log(student1.name());
