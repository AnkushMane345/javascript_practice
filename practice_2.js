//chapter 2 Q1
let age = prompt("what isyour age");
if (age > 10 && age < 20) {
  console.log("Your age is lies between 10 to 20");
} else {
  console.log("Your age is not lies between 10 to 20");
}

//Q2 Switch case statement
let age1 = prompt("what isyour age");
age = Number.parseInt(age1);
switch (age1) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
    break;
}

//Q3
let num = prompt("what isyour age");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}

//Q4
let num1 = prompt("what isyour age");
num = Number.parseInt(num1);
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("Your number is divisible by 2 and 3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}

//Q5
let age2 = 13;
let a = age2 > 18 ? "you can drive" : "You can't Drive";
console.log(a);
