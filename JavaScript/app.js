//strings
const name = 'David'
var lastname = 'Oluwabukunmi'
let email = 'oyeoluwabukunmi@gmail.com'
let age = 12
let address = '5 Hollywood california United state of America'
console.log(name);
console.log(lastname);
console.log(email);
console.log(age);
console.log(address);


//number
let salary = 300
let  bonus = 129
let total = salary + bonus 
console.log(total);

//Null
let home = null
console.log(home);

//Boolean
let isBoy = false
console.log(isBoy);


console.log(Math.sqrt(20));
console.log(Math.sqrt(4));

//Operators 

// 1 -- Arithmetics Operators

// Exponential 
let value = 5
let powerValue = value**3
console.log(powerValue);

// Multiplication
var multiple = 5*5
console.log(multiple);


// substraction 

const sub = 10 - 5
console.log(sub);



// Division 
let number = 20
let division = number/5
console.log(division);

// Modulus
let remainder = 10 % 4
console.log(remainder);

// 2 -- Assignment Operators 
let newValue = 2
let newvalue2 = 10
newValue += value
newvalue2 -= value
console.log(newValue);
console.log(newvalue2);




// 3 -- Comparison Operators 

let answer = 21 == 31
console.log(answer);

// let x = 8 == 10
// console.log(x);


let myName = 6
let yourAge = '6'
let isEqual = myName === yourAge

console.log('isEqaul value is   ' + isEqual);

// 4 -- Logical Operators 
// Examples of logical operators 
// AND(&&) and OR(||) 



// (&&)  AND
// I'm requesting for the  both item 




let ourName = 'David' 
let ourAge = 20 

if(ourName == 'David' && ourAge == 20 ){
    console.log('True');
}else{
    console.log('False');
}


// (||) OR 

if(ourName == 'David' || ourAge == 20){
    console.log('True');
}else{
    console.log('False');
}

console.log(typeof ourAge);


// let a = 10
// let x =(100 + 20) *a
// console.log(x);


// x = 10
// y = 5

// // x += y
// // console.log(x);

// let a = x * y
// console.log(a);


let x = 20 
x /= 5
console.log(x);


// 5 -- Conditional Operators 
// 6 -- Type Operators 

let nom = 'Oyeneye Oluwabukunmi Olajide'
console.log(nom.charAt(12));
console.log(nom.concat(' ' , 'Agbo', 'ola'));
console.log(nom.length);
console.log(nom.indexOf('a'));
console.log(nom.lastIndexOf('a'));


// Javascript in-built mathematics method 

console.log(Math.PI);      
console.log(Math.SQRT1_2);
console.log(Math.min(3,9));
console.log(Math.max(343,583));
console.log(Math.abs(-20));


// Date in javascript 

const date = new Date ()  // this give us the current date 
const date2 = new Date ('02/10/2023')
console.log(date)
console.log(date2);

console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getDate());
console.log(date.getMonth() +8);










const students = [
    { first_name: 'David', last_name: 'Alfred', age: 16 },
    { first_name: 'Thomas', last_name: 'John', age: 14 },
    { first_name: 'Fred', last_name: 'Allen', age: 17 },
    { first_name: 'Peter', last_name: 'Fredrick', age: 18 },
];

// console.log(students[0].first_name, students[0].last_name, students[0].age);

