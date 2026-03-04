// let a = prompt("he whats your age");
a = "24";
console.log(typeof a);
a = Number.parseInt(a); //conerting a string into a number
console.log(typeof a);

//if statement
if (a > 0) {
  //if its true it will work
  alert("This is a valid age");
}

//if-else statement
if (a > 0) {
  //if its true it will work
  alert("This is a valid age");
} else {
  alert("this is invalid age");
}

//if-elseif statement
if (a > 0) {
  //if its true it will work
  alert("This is a valid age");
}

//if-else statement
let a = prompt("he whats your age");
if (a < 0) {
  //if its true it will work
  alert("this is invalid age");
} else if (a < 9) {
  alert("you are a kid and can't drive");
} else if (a < 18 && a >= 9) {
  alert("you are a teen and you can think to drive");
} else {
  alert("you can drive above 18");
}

//Ternary operator
let a = prompt("he whats your age");
console.log("you can", a < 18 ? "not Drive" : "Drive");
