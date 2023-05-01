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
let str4 = 'coding academy by orange';

// 6
// Regular function for reversing the number
function reverseNumber(num) {
    return (
      parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    )                 
  }
  console.log(reverseNumber(92485));
//   7
