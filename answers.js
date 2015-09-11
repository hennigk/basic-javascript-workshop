//a function that takes returns the first character of a string
function firstChar(aString){
    if (aString != "") {
    return aString.charAt(0);
}
    else {
        return "empty string!";
    }
};
console.log(firstChar("Kayla"));
console.log(firstChar(""));

//a function that takes returns the last character of a string
function lastChar(lastString){
    if (lastString != "") {
    return lastString.charAt((lastString).length - 1);
}
    else {
        return "empty string!";
    }
};
console.log(lastChar("Kayla"));
console.log(lastChar(""));

/*function that takes a string and a number, and returns the 
character at the position represented by the number*/

function numChar(charString, charNum){
    if (charString != "") {
        if (charNum > (charString.length - 1) ) {
            return "Your number exceeds the length of the string!";
        }
        else {
            return charString.charAt(charNum);
       }
    }
    else {
        return "empty string!";
    }
}

console.log(numChar("Kayla", 4));
console.log(numChar(" ", 3));
console.log(numChar("", 0));

/*a function that takes two numbers and adds them together*/
/*if you pass a string rather than a number, the function will
return the two paramaters in a single string.*/

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(8, 4));
console.log(add("Kayla", 4));

/*a function that takes two numbers and multiplies them together*/
/*if you pass a string rather than a number, the function will
return Not a Number.*/

function multiply(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')) {
        return "One of the parameters is not a number!";
    }
    else {
    return num1 * num2;
    }
}

console.log(multiply(8, 4));
console.log(multiply("Kayla", 4));


/*a function that takes two numbers and subtracts them*/
function subtract(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')) {
        return "One of the parameters is not a number!";
    }
    else {
    return num1 - num2;
    }
}
console.log(subtract(8, 4));
console.log(subtract("Kayla", 4));

/*a function that takes two numbers and divides them*/
function division(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')) {
        return "One of the parameters is not a number!";
    }
    else {
    return num1 / num2;
    }
}

console.log(division(8, 4));
console.log(division("Kayla", 4));


/*a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. 
If the string is ‘div’, 
return the ratio. Otherwise return 0*/

function operator(num1, num2, aString){
    switch (aString) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'mult':
            console.log(multiply(num1, num2));
            break;
        case 'div':
            console.log(division(num1, num2));
            break;
        default:
            console.log("you did not enter a proper operator");
    }
}

operator(5,2, "add");
operator(5,2, "subtract");
operator(5,2, "mult");
operator(5,2, "div");
operator(5,2, "boom");

/*a function that takes a string and a number, 
and returns the string repeated that many number of times*/

function repeatString(string, number){
    var stringString = "";
    if (typeof string == 'number') {
        string = string.toString();
    }
    for (var i = 0; i < number; i++) {
        stringString += string;
    }
    return stringString;
}
console.log(repeatString("Kayla", 2));
console.log(repeatString("Kayla", 1));
console.log(repeatString(2, 5));

/*a function that takes a string, and returns the reverse of that string*/
function reverseString(string){
    if (typeof string != 'string') {
        return "The paramater is not a string! :(";
    }
    var placeHolder = "";
    for (var i = string.length -1; i>= 0; i--) {
        placeHolder += string.charAt(i);
    }
    return placeHolder;
}

console.log(reverseString("Kayla"));
console.log(reverseString(""));
console.log(reverseString(2));

/*a function that takes a number and returns the factorial of a number*/
function factorial(factNum){
    if (factNum < 0) {
        return "negative numbers are not valid for factorials";
    }
    var factAnswer = 1;
    for (var i=1; i<= factNum; i++){
        factAnswer *= i; 
    }
    return factAnswer;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-2));

/*a function that takes a phrase as a string, 
and returns the longest word in that phrase*/

function longPhrase(phrase){
    var wordHolder = ""
    var wordLong = ""
    for (var i=0; i<=phrase.length; i++) {
        if (phrase.charAt(i) == " ") {
            if (wordHolder.length > wordLong.length) {
                wordLong = wordHolder
            }
        wordHolder = "" }
        else {wordHolder += phrase.charAt(i)}
    }
    return wordLong;
}

console.log(longPhrase("This is a test LONGWORDISREALLYBIG"));