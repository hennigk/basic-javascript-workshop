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