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