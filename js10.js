// let naam = "Ansh";
// console.log(naam.length); //string length method

// console.log(naam.toUpperCase()); //upper case method
// console.log(naam.toLowerCase()); //lower case method
// console.log(naam.slice(2, 3)); // Slicing method
// console.log(naam.replace("Ansh", "Ankush")); //replace method

// let friend = "Ankush";
// console.log(naam.concat(" is a friend of ", friend, " Ok")); //concatination method
// let friend2 = "      nohhaa    ";
// console.log(friend2);
// console.log(friend2.trim());

// let fr = "rushikesh";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// // fr[4]="$" //this is not possible beacuse strings are immutable
// console.log(fr);

// //Printing string using a standard for loop
// let str = "stranger";

// for (let i = 0; i < str.length; i++) {
//   console.log(
//     str[0] + str[1] + str[2] + str[3] + str[4] + str[5] + str[6] + str[7],
//   );
// }

let sentense = "I am a Boy name Ankush!";
let index = 5;
console.log(
  `the index of ${index} returns a the character ${sentense.at(index)}`, //at method
); //at method
console.log(`the index of ${5} returns a the character ${sentense.at(5)}`);
console.log(sentense.endsWith("Ankush!"))
console.log(sentense.endsWith("Ankush"))
console.log(sentense.endsWith("Ankush",22)) //endswith method


