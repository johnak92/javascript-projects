//let names = ["Lena", "James", "Julio"];

//for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

//function printNames(names) {
 //   for (let i = 0; i < names.length; i++) {
 //       console.log(names[i]);
 //   }
//}

function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Lena", "James", "Julio"]);
console.log("---");
printArray(["orange", "apple", "pear"]);

function sayHello() {
    console.log("Hello, World!");
}
sayHello();
function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(5));

function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

function repeater(str) {
    let repeated = str + str;
    //console.log(repeated);
}

console.log(repeater('Bob'));


let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

///////////////////////////////////
let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
/////////////////////////////////
function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return reverse(str) === str;
}
console.log(isPalindrome("kayaks"))

function plusTwo(num) {
    return num + 2;
}

let a2 = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a2);
}

console.log(a2);