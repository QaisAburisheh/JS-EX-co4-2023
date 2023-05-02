//  1.Create an object with properties name, age, and gender and print its values to the console.
const objectOne = {name : "adam", age: 25, gender: "male"};
console.log(objectOne.name, objectOne.age, objectOne.gender);

// 2. Create an object and add a new property to it using dot notation.
const objectTwo = {name : "Adam", age:25};
objectTwo.gender = "male"
console.log(objectTwo);

// 3 . Create an object and add a new property to it using bracket notation.
const objectThree = {name : "Adam", age: 25}
const myKeyThree ="gender"
objectThree[myKeyThree] = "male"
console.log(objectThree)

// 4 Access the value of a property in an object using dot notation.

const objectFour = {name : "Adam", age:25}
console.log(objectFour.name)

// 5 Access the value of a property in an object using bracket notation.
const objectFive = {name : "Adam", age:25}
const person = objectFive["name"]
console.log(person)

/* const objectFive = {name : "Adam", age:25}
console.log(objectFive['name']) */

// 6  Use a for-in loop to iterate through the properties of an object.

const objectSix={name: "Adam", age:25, gender:"male"}
for (const property in objectSix){
    console.log(`${property}:${objectSix[property]}`)
}

// 7 Use the Object.keys() method to get an array of an object's properties.
/*
let objectSeven = {name: "Adam", age: 25, gender:"male"};
console.log(object.keys(objectSeven))*/

const objectSeven = {
    name: 'Adam',
    age: 25,
    genedr: 'male'
  };
  
  console.log(Object.keys(objectSeven));

//   8 . Use the Object.values() method to get an array of an object's values.

const objectEight = {name: 'Adam', age: 25, gender: 'male'};

console.log(Object.values(objectEight));

// 9 Use the Object.entries() method to get an array of key-value pairs for an object.

const objectNine = { name: 'Adam', age: 25, gender: 'male',};
for (const [key, value] of Object.entries(objectNine)){
    console.log(`${key} : ${value}`)
}

// 10 Use the Object.assign() method to merge two objects.
const target={name: "Adam", age: 25};
const source={gender: "male"};
const assigned=Object.assign(target, source);
console.log(assigned);

// 11 11.Use the Object.freeze() method to prevent changes to an object.

const freezed={ name:"Adam", age:25}
Object.freeze(freezed);
freezed.age=50;
freezed.name="back";
console.log(freezed);

// 12 
const sealed={ name: "Adam", age: 25,}
Object.seal(sealed);
sealed.age=30;
console.log(sealed.age);
delete sealed.age; /* it cannot delete when sealed*/ 
console.log(sealed.age);

// freeze makes an object completely immutable, while Object. seal allows existing properties to be modified, but prevents the addition and deletion of new properties.se

//  Object excersises in  Exercises_-_3_in_1 file.

// ex1 in Exercises_-_3_in_1
function returnArray(object1){

return Object.keys(object1)
}
console.log(returnArray({ name: "Qais", address: "Shafabadran", number: 37}));

// ex2 in exercises_-_3_in_1


// ex3
function assignObject(ob1, ob2){
    
    return Object.assign(ob1, ob2)
}
console.log(assignObject({ name: "Qais", address: "Shafabadran"}, {number: 37}))

// ex4
