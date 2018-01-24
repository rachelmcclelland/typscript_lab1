//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag)

//number
let num: number = 5;
console.log ("The number is: " + num)

//string
let str: String = "Hello World";
console.log(str)

//array
let list: number[] = [1, 2, 3];
for(let i = 0; i < list.length;i++){
console.log("Number "+(i+1)+" is: "+list[i]+".");
}

//tuple
let x: [string, number];
x = ["hello", 10];
console.log("Tuple example: "+x[0].substr(1))

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is: "+colorName);
console.log("Enum: Value of c is: "+c);
console.log("Enum: Name of c is: " + Color[c]);