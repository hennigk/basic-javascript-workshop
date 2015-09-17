//a function that takes returns the first character of a string
function firstChar(inputString){
    if (inputString !== "") {
    return inputString.charAt(0);
}
    else {
        return "empty string!";
    }
}
console.log(firstChar("Kayla"));
//console.log(firstChar(""));

//a function that takes and returns the last character of a string
function lastChar(lastString){
    if (lastString !== "") {
    return lastString.charAt((lastString).length - 1);
}
    else {
        return "empty string!";
    }
}
console.log(lastChar("Kayla"));
//console.log(lastChar(""));

/*function that takes a string and a number, and returns the 
character at the position represented by the number*/

function numChar(charString, charNum){
    try {
        if (!charString) throw "not valid string"; 
        if (charNum > charString.length - 1) throw "number too long";
        if (charNum < 0) throw "number too low";
    }
    catch(error) {
        console.log("Error: " + error);
    }
    return charString.charAt(charNum);
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

function operator(num1, num2, inputString){
    switch (inputString) {
        case 'add':
            return(add(num1, num2));
        case 'subtract':
            return(subtract(num1, num2));
        case 'mult':
            return(multiply(num1, num2));
        case 'div':
            return(division(num1, num2));
        default:
            return("you did not enter a proper operator");
    }
}

console.log(operator(5,2, "add"));
console.log(operator(5,2, "subtract"));
console.log(operator(5,2, "mult"));
console.log(operator(5,2, "div"));
console.log(operator(5,2, "boom"));

/*a function that takes a string and a number, 
and returns the string repeated that many number of times*/

function repeatString(stringToRepeat, repeatTimes){
    var stringString = "";
    if (typeof stringToRepeat == 'number') {
        stringToRepeat = stringToRepeat.toString();
    }
    for (var i = 0; i < repeatTimes; i++) {
        stringString += stringToRepeat;
    }
    return stringString;
}
console.log(repeatString("Kayla", 5));
console.log(repeatString("Kayla", 0));
console.log(repeatString(2, 5));

/*a function that takes a string, and returns the reverse of that string*/
function reverseString(backwardsString){
    if (typeof backwardsString != 'string') {
        return "The paramater is not a string! :(";
    }
    var placeHolder = "";
    for (var i = backwardsString.length -1; i>= 0; i--) {
        placeHolder += backwardsString.charAt(i);
    }
    return placeHolder;
}

console.log(reverseString("Kayla"));
console.log(reverseString("Kayla likes javascript"));
console.log(reverseString("will this line print in reverse?"));
console.log(reverseString(""));
console.log(reverseString(2));

/*a function that takes a number and returns the factorial of a number*/
function factorialLong(factNum){
    if (factNum < 0) {
        return "negative numbers are not valid for factorials";
    }
    var factAnswer = 1;
    for (var i=1; i<= factNum; i++){
        factAnswer *= i; 
    }
    return factAnswer;
}

function factorialShort(factNum) {
    if (factNum < 0) {
        return "negative numbers are not valid for factorials";
    }
    if (factNum === 0) {
        return 1;
    }
    else {
        return (factNum * factorialShort(factNum-1));
    }
}
console.log(factorialLong(5));
console.log(factorialLong(0));
console.log(factorialLong(-2));

console.log(factorialShort(5));
console.log(factorialShort(0));
console.log(factorialShort(-2));


/*a function that takes a phrase as a string, 
and returns the longest word in that phrase*/

function longPhrase(phrase){
    var wordHolder = "";
    var wordLong = "";
    for (var i=0; i<=phrase.length; i++) {
        if (phrase.charAt(i) == " ") {
            if (wordHolder.length > wordLong.length) {
                wordLong = wordHolder;
            }
        wordHolder = "";
        }
        else {wordHolder += phrase.charAt(i)}
    }
    if (wordHolder.length > wordLong.length) {
        wordLong = wordHolder }
    return wordLong;
}

console.log(longPhrase("This is a test LONGWORDISREALLYBIG"));

/*a function that takes a phrase, 
and returns the same phrase with every word capitalized
goes through each character in phrase. wordStart keeps tract of the
start of the word. if there is a space then it goes back and
capitalizes the letter at word start and pushes the remaining word
to the variable phraseHolder*/

function capitalize(phrase){
    var phraseHolder = "";
    var charHolder = "";
    var wordStart = 0;
    var lowerPhrase = phrase.toLowerCase();
    for (var i=0; i<=lowerPhrase.length; i++) {
        if (lowerPhrase.charAt(i) == " " || lowerPhrase.length == i) {
            charHolder = lowerPhrase.charAt(wordStart);
            charHolder = charHolder.toUpperCase();
            phraseHolder += charHolder;
            for (var j = wordStart + 1; j<=i; j++) {
                phraseHolder += lowerPhrase.charAt(j);
            }
            wordStart = i + 1;
            }
    }
    return phraseHolder;
}

console.log(capitalize("Hello my NAME is KAYLA"));

/*a function that takes an array and returns the 
largest number of the array*/

function largestArray(largeArray){
    var arrayHolder = 0;
    for (var i = 0; i <=largeArray.length; i++) {
        if (largeArray[i] > arrayHolder) {
            arrayHolder = largeArray[i];
        }
    }
    console.log("the largest number in the array is:")
    return arrayHolder;
}

console.log(largestArray([2, 6, 34, 99]));

/*function that takes an array, and returns a filtered array. 
The filtered array should only contain the truthy 
values from the initial array*/

function truthy(arrayValue){
    if (arrayValue != null && arrayValue != false && arrayValue != 0 && arrayValue != "" && arrayValue != undefined) {
        return arrayValue;
    }
}

function truthyArray(arrayInput){
        var filteredArray = arrayInput.filter(truthy);
        return filteredArray;
}

console.log(truthyArray([2, 6, null, 6, 8, undefined, 10, 2323, "", "Kayla"]));

/* a function that takes an array of numbers, 
and returns the sum of all the numbers in the array*/

function sumArray(arrayToSum){
    //var ArraySumTruthy = truthyArray(arrayToSum)
    var sumOfArray = 0;
    for (var i = 0; i< arrayToSum.length; i++){
        sumOfArray += arrayToSum[i];
        //console.log(arrayToSum[i]);
        //console.log(typeof arrayToSum[i]);
    }
    return sumOfArray;
}

console.log(sumArray([2, 5, 9, 2, 90, 100]));
console.log(sumArray([2, 6, null, 6, 8, undefined, 10, 2323, "", "Kayla"]));

/*a function that takes two arrays, and returns an array of all elements 
that are only in one array. 
For example, with [1,2,3] and [1,2,4,5] the function should 
return [3,4,5]
1. combine all elements in one array
2. make new array with just uniq elements*/

function uniqArray(array1, array2){
    var filteredArray = [];
    var duplicateArray =[];
    for (var i = 0; i <array2.length; i++) {
        array1.push(array2[i]);
    }
    var array1Length = array1.length
    for (var j=0; j<array1Length; j++){
    if (array1.indexOf(array1[j], j+1) < 0) {
        filteredArray.push(array1[j]);
    }
    array1.push(array1[j]);
    }
    return filteredArray;
}

console.log(uniqArray([2, 5, 2, 'b', 'kayla', 4, 6, "e"], [6, 7, 4, "b", "e"]));

/*a function that takes an array and a function as arguments. 
The function should return a new array that maps every 
element of the input array by passing it through the function you received. 
not using map
created a function called GreaterThan to test the mapping array. 
MapArray takes an array and function as input. it then sends 
each element of the array to the given function to be tested and pushes the
returned value to a new array only if the returned value is not undefined*/

function greaterThan(passedNumber, testValue){
    var filteredArray =[];
    if (testValue === undefined) {testValue = 10}
    if (Array.isArray(passedNumber)) {
        for (var i = 0; i < passedNumber.length; i++) {
            if (passedNumber[i] > testValue) {
                filteredArray.push(passedNumber[i]);
            }
        }
        return filteredArray;
    }
        if (passedNumber > testValue) {
            return passedNumber;
        }
}

console.log(greaterThan(20, 2));
console.log(greaterThan([2, 9, 5, 10, 49, 47, 25, 11, 28], 15));

function mapArray(arrayToMap, mapFunction){
    var mappedArray = [];
    for (var i = 0; i < arrayToMap.length; i++){
        if (mapFunction(arrayToMap[i]) !== undefined){
        mappedArray.push(mapFunction(arrayToMap[i]));
        }
    }
    return mappedArray;
}

console.log(mapArray([2, 9, 5, 10, 49, 47, 25], Math.sqrt));
console.log(mapArray([2, 7, 10, 26, 90], greaterThan));


