// javascript Arrays
// 1 in file 3-in1
let array = ["Coding", "Academy", "By", "Orange"];
array.push("Jordan");
console.log(array.slice(0, 2));
let array2 = ["Welcome", "To"];
let array3 = ["Coding", "Academy", "By", "Orange"];
console.log(array2.concat(array3));
let array4 = ["Coding", "Academy", "By", "Orange"];
let shiftt = array4.shift();
console.log(array4);
let array5 = ["Coding", "Academy", "By", "Orange"];
const string = array5.toString();
console.log(string);
let array6 = ["Coding", "Academy", "By", "Orange"];
let spli = array6.splice(1, 2);
console.log(array6);

// 2 Using these two arrays write the JavaScript code that performs these operations on them:
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetable = ["carrot", "tomato", "pepper", "lettuce"];
let fruit1 = vegetable.pop();
console.log(vegetable);
let shift2 = fruit.shift();
console.log(fruit);
console.log(fruit[1].length);
console.log(fruit);
let fruit2 = ["banana", "apple", "orange", "watermelon"];
let pushv = fruit2.push(6);
console.log(fruit2);
let fruite = ["banana", "apple", "orange", "watermelon"];
console.log(fruite.length);

// main array file

// 1
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (numbers) {
  console.log(numbers);
});

// 2
let array22 = [1, 2, 3, 4, 5];
let array22a = array22.map((n) => n * 2);
console.log(array22a);

// 3
let array33 = [1, 2, 3, 4, 5];
let array33a = array33.filter((n) => n % 2 === 0);

console.log(array33a);

// 4
let array44 = [1, 2, 3, 4, 5];
let array44a = array44.reduce((sum, n) => sum + n, 0);
console.log(array44a);

// 5
let array55 = ["banana", "apple", "cherry"];
let array55a = array55.sort();
console.log(array55a);

// 6
let array66 = ["banana", "apple", "cherry"];
let array66a = array66.reverse();
console.log(array66a);

// 7

let array77 = [1, 2, 3];
let array78 = [4, 5, 6];
let merged = array77.concat(array78);
console.log(merged);

// 8

let array88 = [1, 2, 3, 4, 5, 6];
console.log(array88.slice(2, 4));

// 9

let array99 = [1, 2, 3, 4, 5];
let array99a = array99.splice(2, 4);
console.log(array99);
console.log(array99a);

// 10

let arrayindex = [1, 2, 3, 4, 5];
let arrayindexa = arrayindex.indexOf(3);
console.log(arrayindexa);

// 11

let arrayJoin = [1, 2, 3, 4, 5];
let arrayJoina = arrayJoin.join(",");
console.log(arrayJoina);

// 12
let arraySplit = "1 2 3 4 5";
let arr12 = arraySplit.split();

console.log(arr12);

// 13

let arrayLength = [1, 2, 3, 4, 5];
console.log(arrayLength.length);

// 14

let arrayFor = [1, 2, 3, 4, 5];
for (let element of arrayFor) {
  console.log(element);
}
// 15

let arrIn = [1, 2, 3, 4, 5];

for (let index in arrIn) {
  console.log(index);
}

// 16
let array16 = [1, 3, , 4, 5];
console.log(Array.isArray(array16));

// 17

let array17 = { 0: "a", 1: "b", 2: "c", length: 3 };
let array17a = Array.from(array17);
console.log(array17a);

// 18

console.log(Array.of(1, 2, 3));

// 19

let array19 = [1, 2, 3, 4, 5];
console.log(array19.fill(0, 0, 3));

// 20
let array20=[1, 2, 3, 4, 5];
array20.copyWithin(1, 0, 2);
// array20.copyWithin(2, 1, 2);
console.log(array20);
