//program to add first n natural numbers
let sum = 0;
let n = prompt("Enter the Value of n: ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1, "+");
}
console.log("sum of First " + n + " Natural Numbers is :" + sum);
//console.log(i) //its not run because we use let for i

//For In loop
let obj = {
  harry: 56,
  ansh: 78,
  shubh: 67,
  yogi: 68,
  sahil: 88,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

//for-of loop
for (let b of "Ansh") {
  console.log(b);
}
