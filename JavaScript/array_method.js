// Array Methods are listed below 

// Filter 
// Find 
// Foreach
// Map
// reduce 


// FILTER ARRAY METHODS 
let studentList =  [
    { name: 'Caro' , age: 21 , gender: 'Male' , exam_score: 45 },
    { name: 'Shade' , age: 26 , gender: 'Female' , exam_score: 45 },
    { name: 'John' , age: 25 , gender: 'Male' , exam_score: 25 },
    { name: 'Ope' , age: 22 , gender: 'Female' , exam_score: 65 },
    { name: 'kelvin' , age: 21 , gender: 'Male' , exam_score: 55 },
    { name: 'Marcus' , age: 19 , gender: 'Male' , exam_score: 62 },
    { name: 'Angelina' , age: 31 , gender: 'Female' , exam_score: 75 },
    { name: 'Lanre' , age: 28 , gender: 'Male' , exam_score: 35 },
    { name: 'Cynthia' , age: 27 , gender: 'Female' , exam_score:58 },
];

let studentscoreBelow50 = studentList.filter((student)=>{
    return student.exam_score <= 50
});
console.log(studentscoreBelow50);


let studentscoreAbove50 = studentList.filter((student)=>{
    return student.exam_score >= 50
})

console.log(studentscoreAbove50);


let femaleStudent =  studentList.filter((student)=>{
    return student.gender == 'Female'
})

console.log(femaleStudent);


// FIND ARRAY METHODS

let studentLists =  [
    { id: 1, name: 'Caro' , age: 21 , gender: 'Male' , exam_score: 45 },
    { id: 2, name: 'Shade' , age: 26 , gender: 'Female' , exam_score: 45 },
    { id: 3, name: 'John' , age: 25 , gender: 'Male' , exam_score: 25 },
    { id: 4, name: 'Ope' , age: 22 , gender: 'Female' , exam_score: 65 },
    { id: 5, name: 'kelvin' , age: 21 , gender: 'Male' , exam_score: 55 },
    { id: 6, name: 'David' , age: 19 , gender: 'Male' , exam_score: 62 },
    { id: 7, name: 'Angelina' , age: 31 , gender: 'Female' , exam_score: 75 },
    { id: 8, name: 'Lanre' , age: 28 , gender: 'Male' , exam_score: 35 },
    { id: 9, name: 'Cynthia' , age: 27 , gender: 'Female' , exam_score:58 },
];

let student5 = studentLists.find((student)=>{
    return student.id == 5
})

console.log(student5);

let student6 = studentLists.find((student)=>{
    return student.id == 6 
})

console.log(student6);

let student9 = studentLists.find((student)=>{
    return student.name == 'Lanre'
})

console.log(student9);



// FOREACH ARRAY METHODS 

