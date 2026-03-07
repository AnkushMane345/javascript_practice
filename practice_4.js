// practice set 4
//Q1
let str = 'har"';
console.log(str.length);

//Q2
const sentense = "THE quick BROWN fox jumps over the lazy dog.";
const word = "fox";
console.log(sentense.includes(word));
console.log(
  `The word "${word}" ${sentense.includes(word) ? "is" : "is not"} in the sentence`,
);

//Q3
console.log(sentense.toLowerCase());

//Q4
let str1 = "Please give Rs 1000";
let amount = Number.parseInt(str1.slice(15));
console.log(amount);
console.log(typeof amount)

//Q5
let friend = "Deepika"
friend[3]
console.log(friend) // it can't change bce string is immutable

