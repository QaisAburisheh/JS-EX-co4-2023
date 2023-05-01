// ex-1
let age =27
if (age >= 18){
    console.log("You are an adult")
}



// ex-2
let score = 45
if (score <= 50 ){
    console.log("You failed the test")
}



// ex-3
let name = "John"
if (name ==="John"){
    console.log("Hello, John")
}



// ex-4
let day = "Monday"
if (day != "Saturday" && day != "Sunday"){
    console.log("It's a weekday")
}



// ex-5
let num = 4
if (num%2===0){
    console.log("The number is even")
}



// ex-6
let char = 'a';
if (/^[a-zA-Z]$/.test(char)) {
  console.log("It's a letter");
}


// ex-7
let list =[1, 2, 3]
if (Array.isArray(list)){
    console.log("It's an array");
}



// ex-8
let x=5
if (x>0){
    console.log("x is a positive number")
}

// ex-9
let y=-5
if (y<0){
    console.log("y is a negative number")
}

// ex-10
let z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

// ex-11
let gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}

// ex-12
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

// ex-13
let age1 = 30;
if (age1 >= 18 && age1 <= 65) {
  console.log("You are of working age");
}

// ex-14
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

// ex-15
function isNumber(value){
  return typeof value === 'number' && isFinite(value);
}

console.log(isNumber(11))
console.log(isNumber(19)) 
console.log(isNumber('xyz'))
console.log(isNumber(17.5))
console.log(isNumber('21F'))
