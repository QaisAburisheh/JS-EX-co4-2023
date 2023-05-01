//ex1
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
let n = 2;
while (n <= 50) {
  console.log(n);
  n += 2;
}

// ex2

// ex3
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}
let n3 = 1;
while (n3 <= 50) {
  console.log(n3);
  n3 += 2;
}

// 4 fizz buzz!
let fizz = "Fizz";
let buzz = "Buzz";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${fizz}${buzz}`);
  } else {
    console.log(i);
  }
}

// 5 function call
let fizz5 = "Fizz";
let buzz5 = "Buzz";
function fizzBuzz(i) {
  if (i % 3 === 0) {
    console.log(fizz5);
  } else if (i % 5 === 0) {
    console.log(buzz5);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${fizz5}${buzz5}`);
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  fizzBuzz(i);
}

//   6 recursive
let fizz6 = "Fizz";
let buzz6 = "Buzz";
function fizzBuzz6(i) {
  if (i % 3 === 0) {
    console.log(fizz6);
  } else if (i % 5 === 0) {
    console.log(buzz6);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${fizz6}${buzz6}`);
  } else {
    console.log(i);
  }

  if (i < 100) {
    fizzBuzz6(i + 1);
  }
}

fizzBuzz6(1);

//   7

// 8
function countString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
const string = "Coding academy by orange";
//
const letterToCheck = "o";
const result = countString(string, letterToCheck);
console.log(result);
/*
function countString(str, letter) {
  let count = 0;
  const lowercaseStr = str.toLowerCase();
  const lowercaseLetter = letter.toLowerCase();
  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr.charAt(i) == lowercaseLetter) {
      count += 1;
    }
  }
  return count;
}

 */

// 9
// a
for (let i = 0; i<=20; i++){
    console.log(i);
}
// b
for (let i=3; i<=29;i+=2){
    console.log(i)
}

// c
for (let i=12; i>=-14; i-=2){
    console.log(i)
}
// d
for (let i=50;i>=20;i--){
    if(i%3===0){
        console.log(i)
    }
}

// 10
let array=[7, 500, 'KH404', 'black', 36];
for(let i=0; i<=array.length;i++){
    console.log(array[i])
}
let oca = "CodingAcademy";
for (let i = oca.length - 1; i >= 0; i--) {
    console.log(oca[i]);
}

// 11
let array11=[7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let even=[]
let odd=[]
for(let i=0; i<array11.length;i++){
    if(array11[i]%2===0){
        even.push(array11[i]);
    }
    else{
        odd.push(array11[i])
    }
}
console.log(even);
console.log(odd);


// 12


