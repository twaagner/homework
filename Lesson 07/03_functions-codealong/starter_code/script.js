// Let's create 4 functions!
// 0. Add 4 to a number

function addFour(inputNumber) {
    let outputNumber = inputNumber + 4;
    return outputNumber;
}

console.log(addFour(4));
console.log(addFour(-1));
console.log(addFour(37));



// is param a number
function amIANumber(myParam){
    if(typeof myParam == 'number'){
        return true
    }else{
        return false;
    }

}

console.log(amIANumber(addFour(66));
console.log(amIANumber("three's a good number"));
console.log(amIANumber('Gouda is a good"good" word'));


function addFour(myValue) {
    let outputNumber = myValue + 4;
    return outputNumber;
}
// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)


function squaredNumber(inPut){
   outPut = inPut * inPut;
   return outPut;
}
console.log(squaredNumber(4))
console.log(squaredNumber(7))


function squared(numberTosquare){

    let numberTosquare = numberTosquare*numberTosquare;
    // or
    return numberTosquare * numberTosquare;            
}
// tuesday revisit //
function squared(inputNumber) {
    let outputNumber = inputNumber * inputNumber;
    return outputNumber; 
}

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(yarn){
    return yarn.length;
  }

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// tuesday revisit //
function stringLength(yarn){

    let theOutput= yarn.length;
// or
    return yarn.length;
}

console.log(stringLength('youCanNotHaveThis'))
console.log(stringLength('umpqua'))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

// tuesday revisit//

function addNumbers(t,w){
    return t + w;
}

console.log(addNumbers(50, 1))
console.log(addNumbers(-3, 4))
console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

// tuesday revisit //

function sayHello(name){
    return "Hello, " + name;
}
// or
    

console.log(sayHello('Travis'))
console.log(sayHello('Mr Milo Sir'))
console.log(sayHello('sensei miagi'))
// console.log(sayHello("Paul"));