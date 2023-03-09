let nom = 'Agbabiaka Emmanuel Samba'
console.log(nom.charAt(9)) //
console.log(nom.concat(' ', 'ade','', 'wale'))
console.log(nom.length)
console.log(nom.indexOf('a'))
console.log(nom.lastIndexOf('a'))

//Javascript in-built mathematics method
console.log(Math.PI)
console.log(Math.SQRT1_2)
console.log(Math.min(3, 4))
console.log(Math.max(304, 798))


let myAge = 7 //number
let yourAge = '7' //String

let isEqual = myAge === yourAge
console.log('isEqual value is   ' + isEqual)
let answer = 33 == 22
//console.log(answer)
//4Logical Operators
// && ||
//myAge == yourAge && myAge > 10 expresssion
if (myAge == yourAge || myAge < 10) {
  //This is how && works
  //true && false----false
  //false && true----false
  //false && false----false
  //true && true----true

  //true || true----true
  //true || false----true
  //false || true----true
  //false || false----false
  console.log('our age are equal and less than 10' )
}

console.log(typeof yourAge)
//Type Operators

const person ={
  firstname: 'bukunmi' ,
  lastname: 'Dave' ,
  age: 20 ,
  eyecolor: 'black' 

}

console.log(person.firstname +  ' is ' + person.age + ' years old and his eye color is ' + person.eyecolor);

let color = 'Yellow'
let paint = 'black'

console.log(color + ' ' + paint);

if(paint.length > 7 ){
  console.log('paint');
}else if(paint.length >= 5){
  console.log(paint.length);
}else{
  console.log('i do not have an info');
}