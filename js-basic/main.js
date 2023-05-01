let cash = 1000;
let current = 500;
let cfr = cash / current;
console.log(cfr);
//
let revenues = 1000;
let expenses = 500;
let netinc = revenues - expenses;
console.log(netinc);

//

let liabilities = 1000;
let equity = 500;
let totalassets = liabilities + equity;
console.log(totalassets);
//

let profit = 1000;
let sales = 500;
let net = profit * sales;
console.log(net);

//
let n1 = 7;
let n2 = 9;
let n3 = 2;
let av = (n1 + n2 + n3) / 3;
console.log(av);

//

let price = 150;
let disc = 0.3;
let discount = price - price * disc;
console.log(discount);

//
let age = 20;
let lessage = 18;
let oldage = 30;
console.log(age >= lessage && age <= oldage);

//
let number1 = 2;
let number2 = 3;
console.log(number1 ** number2);

let num1 = 10;
let num2 = 4;
console.log(num1 % num2);

// 2. Find the output for these expressions and justify the output according to JavaScript interpretation:
console.log(typeof 100);
console.log(typeof 73.9);
console.log(typeof NaN);
console.log(typeof "water");
console.log(typeof false);
console.log(typeof (9 != 11));
console.log(typeof ("orange" + "e"));
console.log("orange" + "e");
console.log(typeof ("orange" - "s"));
console.log("orange" - "s");
console.log(typeof ("4" + "8"));
console.log("4" + "8");
console.log(typeof ("4" - "8"));
console.log("4" - "8");
console.log(typeof ("name" + 3));
console.log("name" + 3);
console.log(typeof ("name" - 3));
console.log("name" - 3);
console.log(typeof (82 * "word"));
console.log(82 * "word");
console.log(typeof (1 + "hello"));
console.log(1 + "hello");
console.log(typeof ("hello" + 1));
console.log("hello" + 1);
console.log(typeof (1 + true));
console.log(1 + true);
console.log(typeof ("hello" + true));
console.log("hello" + true);
console.log(typeof Infinity);
console.log(typeof (1 == "1"));
console.log(1 == "1");
console.log(typeof (1 === "1"));
console.log(1 === "1");

// strings
let str = "Welcome to Orange";
let add = " Jordan";
console.log(str.toUpperCase());
console.log(str.toUpperCase().slice(8, 11));
console.log(str.replace("Welcome", "Hello").replace("to", "from"));
console.log(str.toLowerCase());
console.log(str.length);
console.log('Welcome to "Orange"');
console.log(str + add);
let char = "cactus";
console.log("c"+char.slice(1).replace(/c/g,"*"))


// is statement
// 1
let agea=27;
if (agea>18){
    console.log("You are an adult");
}
// 2
let score=45;
if (score<=50){
    console.log("You failed the test");
}
// 3
let name="john"
if (name=="john"){
    console.log(`Hello, ${name}`)
}
// 4
let day="Monday"
if(day!=="Sunday" && day!=="Saturday"){
    console.log("It's a weekday")
}
// 5
let num=4;
if (num%2===0){
    console.log("The number is even");
}
// 6
const chara = 'a';

if (/[a-zA-Z]/.test(chara)) {
  console.log("It's a letter");
}
// 7
let list=[1, 2, 3]
if(Array.isArray(list)){
    console.log("It's an array")
}
// 8
let x=5;
if (x>0){
    console.log(`${x} is a positive number`)
}
// 9
let y=-5;
if (y<0){
    console.log(`${y} is a negative number`)
}
// 10
let z=9;
if (z%3===0){
    console.log(`${z} is a multiple of 3`)
}
// 11
let gpa=3.5;
if(gpa>=3.5){
    console.log("Congratulations, you have a good gpa")
}
// 12
let password ="mypawwww"
if (password.length>=8){
    console.log("your password is strong")
}
// 13
let myage=30;
if(myage>=18 && myage<=65){
    console.log("YOu are of working age")
}

// 14
let color="red";
if (color==="red" || color==="blue" || color==="green"){
    console.log(`${color} is a primary color`)
}
// 
let ex15a=11;
if (Number.isNaN(ex15a)!==true) {
    console.log(`${ex15a} is a valid number`)
}else{
    console.log(`${ex15a} is not a number`)
}

let ex15b="19";
if (Number.isNaN(ex15b)!==true) {
    console.log(`${ex15b} is a valid number`)
}else{
    console.log(`${ex15b} is not a number`)
}


let ex15c="xyz";
if (Number.isNaN(ex15c)==true) {
    console.log(`${ex15c} is a valid number`)
}else{
    console.log(`${ex15c} is not a number`)
}


let ex15d="17.5";
if (Number.isNaN(ex15d)!==true) {
    console.log(`${ex15d} is a valid number`)
}else{
    console.log(`${ex15d} is not a number`)
}


let ex15e="21F";
if (Number.isNaN(ex15e)) {
    console.log(`${ex15e} is a valid number`)
}else{
    console.log(`${ex15e} is not a number`)
}