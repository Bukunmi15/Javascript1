let P = 'Adetoun';
let Q = 13;

// AND Example
// console.log('---- AND ----');
// console.log(P == 'Adetoun' && Q == 13);
// console.log(P == 'Adetou' && Q == 13);
// console.log(P == 'Adetoun' && Q == 3);
// console.log(P == 'Adeton' && Q == 3);

// if (P == 'Adetoun' && Q == 13){
//     console.log(P,'You are the right person')
// }else{
//     console.log('Sorry you are not the person', P);
// }

// // OR Example
// if (name == 'Ad' && age == 11){
//     console.log('True')
// }else{
//     console.log('False');
// }
// console.log('----------------');

// // NOT
// if (name != 'Ade'){
//     console.log('False');
// }else{
//     console.log('True')
// }

// console.log('---- OR ----');
// console.log(P == 'Adetoun' && Q == 13);
// console.log(P == 'Adetou' && Q == 13);
// console.log(P == 'Adetoun' && Q == 3);
// console.log(P == 'Adeton' && Q == 3);


// 5 - 4.5 Fit class

// This is to check if the number is odd or even

// number = 9

// console.log(number % 2);

// if  (number % 2 == 0){
//     console.log(number, 'Is a even number')
// }else{
//     console.log(number, 'Is a odd number')
// }





// Write a JavaScript program that accept two integers and display the larger

a = 11
b = 9

// mth 1
if (a > b){
    console.log(a);
}else{
    console.log(b);
}

// mth 2
max = Math.max(a,b);

if ( max == a){
    console.log(a);
}else{
    console.log(b);
}


// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result

a = -5
b = -2
c = -6
d = 0
e = -1

if (a > b && a > c && a > d && a > e){
    console.log(a);
} else if (b > a && b > c && b > d && b > e){
    console.log(b);
}else if (c > a && c > b && c > d && c > e){
    console.log(c);
}else if (d > a && d > c && d > b && d > e){
    console.log(d);
}else if (e > a && e > c && e > d && e > b){
    console.log(e);
}