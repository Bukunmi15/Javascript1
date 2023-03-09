// Array Method

let student_names = ['Emmanuel','Pelumi','Grace','Zion','Peter'];
console.log(student_names);

// 1. toString() Method
// Converts An array to string
// It is comma separated string

console.log('1.',student_names.toString());

// 2. join() Method
// Converts An array to string With a specified separator

console.log('2.',student_names.join(' = '));

// 3. pop() Method
// removes the last item from an array
console.log('3.',student_names.pop(),'Was removed from the list!');
console.log(student_names);

// student = student_names.pop()
// console.log(student)

// 4. push() Method
// adds a new element to the end of the array and returns the new length of the array
console.log('4.',student_names.push('John'));

console.log(student_names);

// 5. shift() Method
// removes the first element and shift other elements to a lower index.
console.log('5.', student_names.shift());
console.log(student_names);

// 6. unshift() Method
// Adds new array at the beginning of the array
console.log('6.',student_names.unshift('Tobi'));
console.log(student_names);

// Changing Elements
// Array elements changed using their index number:
student_names[3] = 'David';
console.log(student_names);

// The length property provides an easy way to append a new element to an array:
student_names[5] = 'James';
console.log(student_names);

// console.log(student_names.length);

student_names[student_names.length] = 'Feranmi';
console.log(student_names);

// 7. delete() Method
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

delete student_names[2]
console.log(student_names);

// 8. concat() Method
// The concat() method creates a new array by merging (concatenating) existing arrays:

// let firstname = 'Samuel'
// let Lastname = 'Adetomi'

// let fullname = firstname.concat(Lastname);
// console.log(fullname);

// The concat() method can take any number of array arguments:

let new_students = ['Feranmi', 'Ade', 'Ayo', 'Ope', 'Ajayi']
let old_students = ['Bayo', 'John', 'Frank', 'Joy', 'Prince']
let all_students = new_students.concat(old_students, student_names)
console.log('8.',all_students)

for (let index = 0; index < all_students.length; index++) {
    const element = all_students[index];
    console.log(element);    
}

// console.log(new_students.length)
for (let index = 0; index < new_students.length; index++) { 
    // const element = array[index];
    console.log(index);
    
}












/*
// converting arrays to strings 

// toString  ==  converts an array to a string of (comma separated) array values === as a comma separated string:g 

let fruits =['Banana' , 'Pineapple' ,  'Mango' ,  'Watermelon' , ' Orange'] 
console.log(fruits.toString());

//join ===  joins all array elements into a string
var fruit = ['Banana' , 'Pineapple' ,  'Mango' ,  'Watermelon' , ' Orange']
console.log(fruit.join('*'));



//pop
//pop == removing last element from array

const foods = ['Banana' , 'Pineapple' ,  'Mango' ,  'Watermelon' , ' Orange']
// let food = foods.pop()
console.log(foods.pop( ));


//push
//method returns the new array length
const vitamins =  ['Banana' , 'Pineapple' ,  'Mango' ,  'Watermelon' , ' Orange']
console.log(vitamins.push('Apple'));*/