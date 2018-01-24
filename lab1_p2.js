//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number
var num = 5;
console.log("The number is: " + num);
//string
var str = "Hello World";
console.log(str);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
}
//tuple
var x;
x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
