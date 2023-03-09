/*let score = [1,2,3,4,5,6,7,8,9,10];
let x = []
let i
for(i = 0 ; i < 10 ; i++)
x.push(score[i] *2)

console.log(x)*/

// let i;

// for (i = 1; i <= 10; i++) {
//     console.log(i * i);
// }
// console.log(i);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)


// console.log(fruits.toString());

// console.log(fruits.join('$'));


// console.log(fruits.pop(), 'was removed from this list');

// console.log(fruits.push('watermelon'));
// console.log(fruits)


// console.log(fruits.shift())
// console.log(fruits);

// console.log(fruits.unshift('Pineapple'));
// console.log(fruits);

// fruits[2] = 'mango'
// console.log(fruits);


// fruits[fruits.lenght] = 'cashew'
// console.log(fruits);

// delete fruits[2]
// console.log(fruits);


// concat
// let new_fruits = ['Strawberries', 'Tangerine', 'Papaya', 'Cucumber'];
// let old_fruits = ['Coconut', 'Guava', 'Olive' , 'Dragonrfruit', 'Jenipapo'];
// let all_fruits = new_fruits.concat(old_fruits,fruits)
// console.log(all_fruits);

// for(let index = 0 ; index < all_fruits; index++);{
//     let element = all_fruits[index];{
//         console.log(element);
//     }
// }



// 1. Calculate the area of a circle 

// console.log(Math.PI);

// function myFunction(radius , PI) {
//     console.log(radius * radius * PI);
// }

// var area = myFunction(4 , 3.1412)



// function calculateArea = (r)=>{
//     let pie = 3.14
//     return = pie*r*r
// }


// function calculateCircleArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     return area;
//   }

//   // Example usage
//   const radius = 5;
//   const area = calculateCircleArea(radius);
//   console.log(area); // Output: 78.53981633974483 



function calculateCircleArea(radius) {        // parameter
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}


const result = calculateCircleArea(5);     // Argument 
console.log(result); 


function calculateTrianglearea(base, height){
    const are = 1/2 * base * height
    return are;
}

const answer = calculateTrianglearea(6,4)
console.log(answer);


function calculateSquarearea(area) {
    const square =  Math.pow(area, 2)
    return square;
}

const solution = calculateSquarearea(5)
console.log(solution);



function calculateRectanglearea(length , width) {
    const rec = width * length
    return rec;
}

const proceed = calculateRectanglearea(10 , 20)
console.log(proceed);


