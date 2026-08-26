1. What is the difference between var, let, and const?
ans: var dia same name use koria different different vale set kora jay. let use koria same name 2 ta value set  jay na but let or value change kora jy. const o 1 bar value set korle ar change kora jay na 


2. What will this output?

let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);
ans: true, false 


3. What are the primitive data types in JavaScript?
ans: number, string, boolean, undefined, null 

4. What will this output?

let a = 10;

if (a > 5) {
  let b = 20;
}

console.log(b);
ans: error/undefined


5. What is the difference between null and undefined?
ans: unfefined dile pore value set kora jay. null mane kunu value nai 


6. What will this output?

console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

ans: number, string, boolean, undefined, object 


7. Write a function that takes two numbers and returns their sum.
ans: 


8. Write a function that receives a number and returns "Even" if it's even and "Odd" if it's odd.

ans: 

const odd= (num)=> {
   if(num %2 ===0){
  
   return console.log("Even")
}
else{
   return console.log("odd")
} 
}
odd(16)

Part 2 — Arrays & Objects
9. Create an array containing:

Apple, Banana, Mango, Orange
Then print the third item.
ans: let a=["Apple", "Banana", "Mango", "Orange"]
console.log(a[2])


10. What will this output?
const numbers = [10, 20, 30, 40];


console.log(numbers[0]);
console.log(numbers.length);

ans: 10, 4

11. Create an object representing a student with:

name

age

department

semester

Then print the student's department.

ans: let a= {
    name:"arpon",

age:17,

department:"science"

semester:2026
}
console.log(a.department)



12. What will this output?

const student = {
  name: "Rahim",
  age: 20
};

console.log(student.name);
console.log(student["age"]);
ans: Rahim
    20

13. Write code to add "Python" to the end of:

const languages = ["JavaScript", "Java", "C++"];
ans: languages.push("python")
14. Write code to remove the last element from an array.

ans: languages.pop()

Part 3 — ES6
15. let and const
What is wrong with this code?

const name = "Rahim";

name = "Karim";
How would you fix it if the name needs to change?

ans: const o 1 bar value set korle ar change kora jay na. jodi nam or value change kora lage te const or jagat let use korte hobe.

16. Template Literals
Convert this into a template literal:

const name = "Rahim";
const age = 20;


console.log("My name is " + name + " and I am " + age + " years old.");

ans: console.log(`my name is ${name}, and i am ${age} years old`)


17. Arrow Functions
Convert this function to an arrow function:

function multiply(a, b) {
  return a * b;
}
Then make it a one-line arrow function.

18. Default Parameters
What will this output?

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
greet("Rahim");
Then write your own function using a default parameter.
ans: hello guest , hello rahim 

function buyChips(){
    console.log("go to the shop and buy it")
}
buyChips()

Part 4 — Destructuring
19. Array Destructuring
What will this output?

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
ans: 10 , 20, 30

20. Object Destructuring
What will this output?

const student = {
  name: "Rahim",
  age: 21,
  department: "CSE"
};

const { name, department } = student;

console.log(name);
console.log(department);

ans: Rahim , CSE


21. Destructuring Challenge
What will this output?

const user = {
  name: "Suhad",
  address: {
    city: "Moulvibazar",
    country: "Bangladesh"
  }
};

const {
  name,
  address: { city }
} = user;

console.log(name);
console.log(city);
ans: Suhad, Moulvibazar



Part 5 — Array Methods
22. map()
What will this output?

const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);




23. filter()
Create a new array containing only numbers greater than 50.

const numbers = [20, 60, 40, 80, 90, 30];
Expected result:

[60, 80, 90]
ans:  const numbers = [20, 60, 51, 80, 90, 70];
      result:[60, 51 ,70, 80, 90]

4. find()
Find the student whose name is "Karim".

const students = [
  { name: "Rahim", age: 20 },
  { name: "Karim", age: 22 },
  { name: "Hasan", age: 21 }
];
ans: console.log(students[1])

25. map() + Objects
Create an array containing only the names:

const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 70 },
  { name: "Hasan", marks: 90 }
];
Expected:

["Rahim", "Karim", "Hasan"]
Part 6 — Spread Operator ...
This is the main section.
ans: 


26. Basic Array Spread
What will this output?

const a = [1, 2, 3];
const b = [...a, 4, 5];

console.log(b);

ans: 1,2,3,4,5


27. Combine Arrays
Using the spread operator, combine:

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];
Expected:

["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
Do not use concat().

ans: frontend. push("Node.js")
    frontend. push("MongoDB")


28. Copy an Array
Create a copy of this array using spread:

const numbers = [10, 20, 30, 40];
Then change the first element of the copied array.

Explain whether the original array changes.
ans: const age = [...numbers];
    console.log(...age)

29. Spread + Objects
What will this output?

const user = {
  name: "Rahim",
  age: 20
};

const updatedUser = {
  ...user,
  age: 21
};
console.log(updatedUser);

ans:{ name: 'Rahim', age: 21 }


30. Object Update Challenge
Given:

const student = {
  name: "Rahim",
  age: 20,
  department: "CSE"
};
Create a new object where:

age = 21
department = EEE
Do not modify the original object.

ans: const student = {
  name: "Rahim",
  age: 21,
  department: "EEE"
};
console.log(student)

31. Add a Property
Using spread, create a new object:

const user = {
  name: "Rahim",
  age: 20
};
Add:

city: "Dhaka"

ans: const add= {
  ...user, 
  city: "Dhaka"
}
console.log(add)


32. Spread Challenge
What will this output?

const user = {
  name: "Rahim",
  age: 20
};

const newUser = {
  ...user,
  name: "Karim",
  city: "Dhaka"
};

console.log(newUser);
Ask him why name becomes "Karim".

ans: { name: 'Karim', age: 20, city: 'Dhaka' }


Part 7 — Real Understanding
33. Predict the Output
const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a);
console.log(b);
Then:

const a = [1, 2, 3];

const b = [...a];

b.push(4);

console.log(a);
console.log(b);
Ask:

Why are the results different?

34. Spread + Function
What will this output?

function add(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];

console.log(add(...numbers));
Then ask:

What does ...numbers do here?

35. Final Challenge
Give him this: 

const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 45 },
  { name: "Hasan", marks: 70 },
  { name: "Sakib", marks: 35 }
];
Ask him to produce:

[
  { name: "Rahim", marks: 80 },
  { name: "Hasan", marks: 70 }
]
using filter().

Then create a new array containing only:

["Rahim", "Hasan"]
using map().