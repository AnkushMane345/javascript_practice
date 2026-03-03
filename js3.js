console.log("Primitives:nn bb ss u");
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Ansh";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

console.log("objects in JS / non-primitive datatype");

const item = {
  Ansh: true,
  Shubham: false,
  Abhi: 45,
  atharv: undefined,
};
console.log(item["Ansh"]);
console.log(item["sdf"]);
console.log(item["atharv"]);
console.log(item["Shubham"]);
