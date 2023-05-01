// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 3
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 4
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 5
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 6
const array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {}
console.log(Math.max(...array1));

// 7
const array2 = [5, 4, 3, 2, 1];
for (let i = 0; i < array2.length; i++) {}
console.log(Math.min(...array2));

// 11
let array11 = [1, 2, 3, 4, 5];
let sum11 = 0;
for (let i = 0; i < array11.length; i++) {
  sum11 += array11[i];
}
let average = sum11 / array11.length;
console.log(average);

// 12
const factorialOf = (integer) => {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
};
console.log(factorialOf(5));

// 13
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= 7; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// 14prime number

// looping from lowerNumber to higherNumber
for (let i = 0; i <= 20; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

// 15
//creating a multiplication table
let number = 5;
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  console.log(`${number} * ${i} = ${result}`);
}

// 16
let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

// 17

let myArray1 =[1, 2, 3, 4, 5];
for (let i=0; i < myArray1.length; i++){
}
console.log(myArray1.reverse())

// 18
let myArray44 = [1, 2, 3, 4, 5];
let start = 2;

for (let i = start; i <= myArray44.length-1; i++) {
  console.log(myArray44[i]);
}
// 19
let myArray19 = [1, 2, 3, 4, 5];
// is best for rendering
let h=myArray19.length
for (let i = 0; i <= h; i++) {
  if (i%2==0){
    console.log(myArray19[i]);
  }
}

// 20
let array20=[1, 2, 3, 4, 5]
let n=4;
for (let i = 0; i<=array20.length; i++){
    if(array20[i]===n){
        console.log(true)
    }
}
// 21
let array21 =[1, 2, 1, 3, 2, 1];
let frequencyDistribution = array21 => {
   const map = {};
   for(let i = 0; i < array21.length; i++){
      if(array21[i]==1){
        map[array21[i]] = (map[array21[i]] || 0) + 1;
      }
   };
   return map;
};
console.log(frequencyDistribution(array21));

// or
