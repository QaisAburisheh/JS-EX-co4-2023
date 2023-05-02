//1 Write a function that makes each word in a string an element of an array.
function stringToArray(str) {
  let words = str.split(" ");
  return words;
}
let str = "Orange Jordan";
let arr = stringToArray(str);
console.log(arr);

// phone number
function hidePhoneNumber(phoneNumber) {
  var firstSevenDigits = phoneNumber.substring(0, 7);

  var asterisks = "*".repeat(firstSevenDigits.length);

  var hiddenPhoneNumber = asterisks + phoneNumber.substring(7);

  return hiddenPhoneNumber;
}
let phoneNumber = "0776807777";
let hiddenPhoneNumber = hidePhoneNumber(phoneNumber);
console.log(hiddenPhoneNumber);

// Write a function that converts an email address to a hidden form
/* function hideEmail(email) {

    var parts = email.split("/");
    var username = parts[0];
    var domain = parts[1];

    var truncatedUsername = username.substring(0, 4);
   
    var hiddenEmail = truncatedUsername + "...@" + domain.replace(/^[^.]+/, "orange");
   
    return hiddenEmail;
  }
var email = "orange_academy@orange.jo";
var hiddenEmail = hideEmail(email);
console.log(hiddenEmail);*/

// 4 Write a function that turns the first letter of every word in a string to the upper case.
let str4 = "coding academy by orange";

// 6
// Regular function for reversing the number
function reverseNumber(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(reverseNumber(92485));
//   7

// 1-JavaScript Functions
// 1.Create a function that will display the smallest value in the array.

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

// 2

function reversString(strex2){
  return 
}

// function alphaOrder(str) {
//   let arr = str.split("");
//   arr.sort();
//   let sortedStr = arr.join("");
//   return sortedStr;
// }
// console.log(alphaOrder("hello"));

// 3

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(8));

// 4
function oddEven(number4) {
  if (number4 % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddEven(9));
// 5

function evenNum(array5) {
  let even = [];
  for (let i = 0; i < array5.length; i++) {
    if (array5[i] % 2 === 0) {
      even.push(array5[i]);
    }
  }
  return even;
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 6

function numbersOnly(array6) {
  let numbers6 = [];
  for (let i = 0; i < array6.length; i++) {
    if (typeof array6[i] === "number") {
      numbers6.push(array6[i]);
    }
  }
  return numbers6;
}
console.log(numbersOnly(["Ayham", 3, 7, "Alaa", 13, "coding"]));

// 7

function addUp(number) {
  let sum = 0;
  for (let i = number; i >= 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(addUp(8));

// 8
function minMaxLengthAverage(array8) {
  let min = array8[0];
  let max = array8[0];
  let sum = 0;
  let length = array8.length;

  for (let i = 0; i < length; i++) {
    if (array8[i] < min) {
      min = array8[i];
    }
    if (array8[i] > max) {
      max = array8[i];
    }
    sum += array8[i];
  }

  let average = sum / length;

  return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));


// 9

  function integer_to_roman(num) {
  if (typeof num !== 'number') 
  return false; 
  
  var digits = String(+num).split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  roman_num = "",
  i = 3;
  while (i--)
  roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
  return Array(+digits.join("") + 1).join("M") + roman_num;
  }
  
  console.log(integer_to_roman(1989));


  // 10
  function getCount(str) 
  {
    return str.split(' ').filter(function(num) {return num != ''}).length;
   }
   console.log(getCount('hello from CodingAcademy'));

  //  11 Create function to Multiply all elements in an array by it's length
  function multiplyByLength(array11) {
    const scalar = array11.length;
    const result = array11.map(element => element * scalar);
    return result;
  }
  console.log(multiplyByLength([4, 2, 5]));

  // 12
  function checkEnding(string1, string2){
    if (string1.endsWith() === string2.endsWith())
    return true;
  }
  console.log(checkEnding("CodingSchool", "Ac"))



  function endsWith(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    if (len2 > len1) {
      return false;
    }
    const suffix = str1.slice(len1 - len2);
    return suffix === str2;
  }
