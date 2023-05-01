// 
let cash = 1000;
let current = 500;
let cashflow = cash / current;
console.log(cashflow);



// 
let revenues = 1000;
let expenses = 500;
let netincome1 = revenues - expenses;
console.log(netincome1);



// 
let liabilities = 1000;
let equity = 500;
let netincome2 = liabilities + equity;
console.log(netincome2);


// 
let profit = 1000;
let sales = 500;
let netincome3 = profit * sales;
console.log(netincome3);


// 
let n1 = 7;
let n2 = 9;
let n3 = 2;
let average = (n1 + n2 + n3)/3;
console.log(average);


// 
let price = 150;
let discountper = 0.3;
let dicount = price - (price*discountper)
console.log(dicount);


// 
let age1 = 18;
let age2 = 30;
console.log(20 > age1 && 20 < age2);
// 
let n11 = 2;
let n22 = 3;
console.log(n11**n22);


// 
let num1 = 10;
let num2 = 4;
console.log(num1%num2);

console.log(typeof(100));
console.log(typeof(null));
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log(typeof("orange" + "e"));
console.log(typeof("orange" - "s"));
console.log(typeof("4"+"8"));
console.log(typeof("4"-"8"));
console.log(typeof("name"+3));
console.log(typeof("name"-3));
console.log(typeof(82*"word"));
console.log(typeof(1+"hello"));
console.log(typeof("hello"+1));
console.log(typeof(1+true));
console.log(typeof("hello"+true));
console.log(typeof(Infinity));
console.log(typeof(1=='1'));
console.log(typeof(1==='1'));


// 
let str = "WELCOME TO ORANGE";
console.log(str.toUpperCase());
console.log(str.slice(8, 10));
console.log("Hello from " + str.slice(11));
console.log(str.toLowerCase());
console.log(str.length);
console.log(`Welcome to "${str.slice(11)}"`);
console.log(str + " Jordan");


// 
let char = "cactus"
console.log("c"+char.slice(1).replace(/c/g,"*"))