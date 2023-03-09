// let score = 1.00
// if(score <= 5.00){
//     console.log('First class');
// }else{
//     console.log('it is a below mark');
// }


// let mark = 3.5
// if(mark <= 4.49){
//     console.log('second class');
// }else{
//     console.log('it is a below mark');
// }

// var point = 2.40
// if(point <= 3.49){
//     console.log('second class lower division');
// }else{
//     console.log('it is a below mark');
// }

// const standardScore = 1.50
// if(standardScore <= 2.39){
//     console.log('Third class');
// }else{
//     console.log('it is a below mark');
// }

// let pass = 1.49
// if(pass >= 1.00){
//     console.log('pass degree');
// }else{
//     console.log('Failed');
// }


// grade = 3.44;
// console.log(grade >= 4.50);

// if (grade >= 4.50){
//     console.log('First Class');
// } else if (grade < 4.50 && grade >= 3.50){
//     console.log('Second Class Honours (Upper Division)');
// } else if (grade < 3.50 && grade >= 2.40){
//     console.log('Second Class Honours (Lower Division)');
// } else if (grade < 2.40 && grade >= 1.50){
//     console.log('Third Class Honours');
// } else if (grade < 1.50){
//     console.log('Pass Degree');
// } else {
//     console.log('Invalid Input!');
// }


// function grades(grade) {
//     if (grade >= 70){
//         console.log('First Class');
//     } else if (grade < 70 && grade >= 60){
//         console.log('Second Class Honours (Upper Division)');
//     } else if (grade < 60 && grade >= 50){
//         console.log('Second Class Honours (Lower Division)');
//     } else if (grade < 50 && grade >= 40){
//         console.log('Third Class Honours');
//     } else if (grade < 40){
//         console.log('Pass Degree');
//     } else {
//         console.log('Invalid Input!');
//     }
// }

// grades(100);
// grades(90);
// grades(80);
// grades(70);
// grades(60);
// grades(50);
// grades(40);
// grades(30);
// grades(20);
// grades(10);




// point = 1.00

// if (point >= 4.50){
//     console.log('First Class');
// } else if (point < 4.50 && point >= 3.50){
//     console.log('Second Class Honours (Upper Division)');
// } else if (point < 3.50 && point >= 2.40){
//     console.log('Second Class Honours (Lower Division)');
// } else if (point < 2.40 && point >= 1.50) {
//     console.log('Third Class Honours');
// } else if (point < 1.50 && point >= 1.00){
//     console.log('Pass degree');
// } else{
//     console.log('This is is cheat meen');
// }



let evenNumbers = []
let oddNumbers = []

let i

for(i = 1 ; i <=10 ; i++){
    // console.log(i);
    if (i % 2 == 0){
        console.log(i, 'is an even number');
    }else if(i % 2 !== 0){
        console.log(i, 'is an odd number');
    
    }
}

// const count = 10;
// var counts = 20;
// let counts = 4;

// for(i = 0 ; i <=count ; i++){
//     console.log(i);
   
//     }

// for(i = 0 ; i < 10 ; i++){
//     if (i === 5){
//         break;
//     }
//     console.log(i);
// }

let score = [1,2,3,4,5,6,7,8,9,10];

for(j = 0 ; j < score.length ; j++){
    if(score[j] ===5){
        continue;
    }
    console.log(score[j]);
}

// let score = [20,30,50,24,31,45];
// let j
// for(j = 0 ; j < score.length -4 ; j++) {
//     console.log(score[j]);
// }




// EXAMPLES

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3 || numbers[i] === 7) {
//     continue; // Skip numbers 3 and 7
//   }
//   if (numbers[i] === 9) {
//     break; // Exit the loop when the number 9 is found
//   }
//   console.log(numbers[i]); // Log each number to the console
// }



// Micah.askToProm('Hannah');
// if (Hannah.answer=='Yes'){
//     Micah.mood='Happy'
// }






// let Hannah = {
//     answer: ''
//   };
  
//   let Micah = {
//     mood: ''
//   };
  
//   Micah.askToProm = function(name) {
//     console.log("Micah asks " + name + " to prom.");
//   };
  
//   Hannah.answer = 'Yes'; // or 'No', depending on Hannah's response
  
//   if (Hannah.answer === 'Yes') {
//    console.log() Micah.mood = 'Happy';
//   }
  


const shape = {
    circleArea: function(radius) {
      return Math.PI * Math.pow(radius, 2);
    },
    triangleArea: function(base, height) {
      return 0.5 * base * height;
    },
    squareArea: function(sideLength),
}
