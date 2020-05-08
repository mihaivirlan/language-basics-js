     //Objects
// var var1 = {
//     name: 'Max',
//     lastname: 'Smith',
//     age: 50
// };
// console.log(var1.name + " " + var1.lastname + " " + var1.age);


    //Variables
// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//   }
// });

// var var1 = 5;
// console.log(typeof var1);
// var var1;

// var condition = true;
// console.log(typeof condition);


    //Functions
// function calc() {
//     console.log('Inside function');
// }
// console.log(typeof calc);

// function calc() {
//     console.log('Inside function');
// }
// var anotherFn = calc;
// anotherFn();

// function myFunction() {
//     document.getElementById('demo').innerHTML = "Hello World";
//     console.log("Hello World");
// }

// function calc() {
//     console.log('Inside function');
// }
// var anotherFn = calc();
// console.log(anotherFn);

// function calc() {
//     return 'Inside function';
// }
// var returned = calc();
// console.log(returned);

// function calc() {
//     var stringVar = 'Inside function';
//     return stringVar;
// }
// var returned = calc();
// console.log(returned);

// function calc(number1, number2, number3) {
//     return number1 + number2 + number3;
// }
// var returned = calc(10, 8, 6);
// console.log(returned);

// function calc(number1, number2, number3) {
//     return number1 + number2 + number3;
// }
// var calculator = calc;
// console.log(calculator(15,2,4));


    //Control Structures - If Statements
// var condition = true;
// if (condition) {
//     console.log('Executed');
// } else {
//     console.log('Not executed');
// }

// var condition = false;
// if (condition) {
//     console.log('Executed');
// } else {
//     console.log('Not executed');
// }

// var condition = false;
// var anotherCondition = true;
// if (condition) {
//     console.log('Executed');
// } else if (anotherCondition) {
//     console.log('Still executed');
// } else {
//     console.log('Not executed'); 
// }

// var condition = false;
// var anotherCondition = false;
// if (condition) {
//     console.log('Executed');
// } else if (anotherCondition) {
//     console.log('Still executed');
// } else {
//     console.log('Not executed'); 
// }


    //Control Structures - If Statements Advanced
// var condition = 1;
// var anotherCondition = false;
// if (condition) {
//     console.log('Executed');
// } else if (anotherCondition) {
//     console.log('Still executed');
// } else {
//     console.log('Not executed'); 
// }
// console.log(2 == true);

// var condition = null;
// var anotherCondition = false;
// if (condition) {
//     console.log('Executed');
// } else if (anotherCondition) {
//     console.log('Still executed');
// } else {
//     console.log('Not executed'); 
// }


    //Control Structures - Switch
// var mihaiNumber = 7;
// switch (mihaiNumber) {
//     case 1:
//         console.log('Is 1');
//         break;
//     case 2:
//         console.log('Is 2');
//         break;
//     default:
//         console.log('Default');
//         break;
// }


    //Control Structures - For Loop
// for (var i = 0; i <= 5; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 2; j++) {
//         console.log(i * j);
//     }
// }



    //Control Structures - Controlling Loops with break & continue
// for (var i = 0; i < 5; i++) {
//     if (i == 1) {
//         console.log('1');
//     }
// }

// for (var i = 0; i < 5; i++) {
//     if (i == 1) {
//         break;
//     }
//     console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//     if (i == 1) {
//         continue;
//     }
//     console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//     for ( var j = 0; j < 2; j++) {
//         if (i == 1) {
//             continue;
//         }
//         console.log('inside inner loop, j = ' + j);
//     }
//     console.log(i);
// }

// for (var i = 2; i > 1; i--) {
//     console.log(i);
// }



    //Control Structures - Looping through Arrays
// var array = [1, 2, 3, 4, 5];
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }



    //Control Structures - While Loop
// var number = 5;
// while (number <= 7) {
//     console.log(number);
//     number++;
// }

// var number = 5;
// while (condition) {
//     console.log(number);
//     number++;
// }

// var condition = true;
// var i = 2;
// while (condition) {
//     if (i == 3) {
//         condition = false;
//     }
//     console.log(i);
//     i++;
// }

// var condition = false;
// do {
//     console.log('Executed');
// }
// while (condition);


    //Operators - Addition
// var a = 5;
// var b = 10;
// a += b;
// console.log(a);

// var a = 5;
// var b = 10;
// a++;
// console.log(a);

// var a = 5.2;
// var b = 4.2;
// console.log(a + b);

// var a = 'Join ';
// var b = 'us';
// console.log(a + b);

// var a = 12;
// var b = '1';
// console.log(a + b);

// var a = true;
// var b = ' join';
// console.log(a + b);

// var a = true;
// var b = true;
// console.log(a + b);

// var a = 12;
// var b = null;
// console.log(a + b);

// var a = 12;
// var b = undefined;
// console.log(a + b)

// var a = 12;
// var b = NaN;
// console.log(a + b)



    //Operators - Subtraction
// var a = 12;
// var b = 1;
// a -= b;
// console.log(a);

// var a = 12;
// var b = 1;
// a--;
// console.log(a);

// var a = 12;
// var b = '1';
// console.log(a - b);



    //Operators - Multiplication & Floating Point Problems
// var a = 12;
// var b = 2;
// a *= b;
// console.log(a);

// var a = 1.3;
// var b = 2.2;
// console.log(a * b);

// var a = 1.3;
// var b = 2.2;
// console.log(a * b);
// if (a * b == 2.86) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// var a = 1.3;
// var b = 2.2;
// console.log(a * b);
// if ((a * b).toFixed(2) == 2.86) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// var a = 2;
// var b = '2.2';
// console.log(a * b);


    //Operators - Division & Modulus
// var a = 12;
// var b = 2;
// a /= b;
// console.log(a);

// var a = 12;
// var b = '2';
// console.log(a / b);

// var a = 3.3;
// var b = 2.2;
// console.log(a / b);

// var a = 3.3;
// var b = 2.2;
// console.log((a / b).toFixed(2));

// var a = 10;
// var b = 3;
// console.log(a % b);

// var a = 10;
// var b = 0;
// console.log(a / b);

// var a = 10;
// var b = Infinity;
// console.log(a / b);



     //Operators - Comparing Values
// console.log(1 == 1);

// console.log(1 === 1);

// console.log(1 == '1');

// console.log(1 === '1');

// console.log(1 != 2);

// console.log(1 !== 2);

// console.log(1 !== '1');

// console.log(1 >= 1);

// console.log(1 >= '1');




     //Operators - Important Rules
// console.log(NaN == NaN);

// console.log(NaN != NaN);

// console.log(0 == null);

// console.log(null == undefined);

// console.log(0 == undefined);



     //Operators - Boolean
// if (1 == 1 && 2 == 2) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// if ((1 == 1 && 2 == 3)) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// console.log((1 == 1) && (2 == 3));

// console.log((1 == 1) || (2 == 3));

// console.log((1 == 1) || (2 == 3) || (4 == 5));

// console.log((1 == 2) || (2 == 3) || (4 == 5));

// console.log((1 == 1) || (2 == 3) && (4 == 5));

// console.log((1 == 1) && (2 == 3) || (4 == 5));

// console.log((1 == 1) && (2 == 3) || (4 == 4));

// console.log(((1 == 1) && (2 == 3)) || (4 == 4));

// console.log((1 == 1) && (2 == 3) || (4 == 5));

// var isTrue = true;
// console.log(isTrue);

// var isTrue = true;
// console.log(!isTrue);



     //Operators - Ternary Operator
// var a = 5;
// var b = 5;
// if (a == b) {
//     console.log('Equal');
// } else {
//     console.log('Not Equal');
// }

// var a = 5;
// var b = 5;
// console.log(a == b ? 'Equal' : 'Not Equal');



     //Operators - Precedence
// var a = 5;
// var b = 5;
// console.log(a + b * 2);

// var a = 5;
// var b = 5;
// console.log((a + b) * 2);

var a = 5;
var b = 5;
console.log(a + b .toExponential(a) * 2);
