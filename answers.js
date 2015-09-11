//a function that takes returns the first character of a string
function firstChar(aString){
    if (aString != undefined) {
    return aString.charAt(0);
}
    else {
        return "null";
    }
};
console.log(firstChar("Kayla"));
console.log(firstChar(""));
console.log(firstChar());