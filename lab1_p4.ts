function numOfChars(value) {
    let num: number = value.replace(/\s+/, "").length;
    return num;

}
var value = "test 1";
console.log("Number of characters in the string (excluding spaces) is: " + numOfChars(value));
