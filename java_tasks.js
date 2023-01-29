/*var min = function(list){
    let m = Math.min.apply(Math, list);
    return m;
}

var max = function(list){
    let n = Math.max.apply(Math, list);
    return n;
}
console.log(min([6,8,3,2]));
function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }
  console.log(grow([4,6,7,8]));

  let a = 5 + 2 + 3;
document.getElementById("demo").innerHTML = a;

let b = "John" + " " + "Doe";
document.getElementById("demo").innerHTML = b;

let c = "Volvo" + 16 + 4;
document.getElementById("demo").innerHTML = c;*/

//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
