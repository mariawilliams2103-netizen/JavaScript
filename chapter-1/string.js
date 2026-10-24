 //String Variables
let university = "Limkokwing";
console.log(university)
let fullName = "Maria";
let faculty = "DICT";
let role = "student";


// 1. String Concatenation
console.log("**** PERSON INFORMATION ****");
console.log("University: " + university);
console.log("Person Name: " + fullName);
console.log("Role: " + role);
console.log("Faculty: " + faculty);

let sentence = "My name is Maria Williams. I am a student at Limkokwing University and i am in DICT"
console.log(sentence);


"my name is" + fullName + ". I am a student at" + university  + "and i am in " + faculty
console.log(sentence)

// String Length
let personName = "Maria Williams"
console.log(personName.length);

// Getting a Charater From a string by it index
console.log(personName [3]);
console.log(personName [7]);
console.log(personName [10]);
console.log(personName [11]);
console.log(personName [6]);


let str1 = "Maria Williams"
let str2 = "Gladys Metzger"
let str3 = "Leonard Coker"
let str4 = "Leonard Metzger"
let str5 = "Preston Metzger"

let abvr1 = str1[0] + str1[6]
let abvr2= str2[3] + str1[7]
let abvr3 = str3[2] + str1[4]
let abvr4 = str4[1] + str1[9]


//String Methods
let strVal = "Maria Williams"
console.log(strVal)

// Convert to uppercase
console.log(strVal.toUpperCase());
console.log(strVal.toLowerCase());


// String Formatting
console.log("\t Maria Williamms"); // \t is used to Tab
console.log("\n Maria WedDeveloper"); // \n is used to break to a new line

// Template Literals / string Literal
let num1 = 20;
let num2 = 13;
let num3 = 24;
let average = (num1 + num2 + num3) / 3;
console.log(average);
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);


// Checking if a value exists in a string
let email = "maRiawilliams2103@gmail.com"
console.log(email.includes("Maria"));

// Method Chaining
console.log(email.toLowerCase().includes("maRia")); // true















