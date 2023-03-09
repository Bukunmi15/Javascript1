// This is how to declare an array 
let name = ['oyeneye' , 'David' , 'Bukunmi' , 'ola']
console.log(name);
console.log('His name is ' + name[1])
console.log('His surname is ' + name [0]);

var footBaller = ['Ronaldo' , 'messi' , 'Neymar' , 'mbappe']
console.log(footBaller)
console.log('My Favourite foorballer is ' +footBaller [1]);
console.log('The Fastest Player in the world is ' +footBaller [3]);
console.log('The best hardworking player is ' +footBaller [0]);



const cars = ['mercedes' , 'bmw' , 'toyota' , 'range rover' , 'volvo']
console.log(cars);
console.log('My favorite car are ' +cars[3]);
console.log('The fastest car are ' +cars[0]);

const fruits = [
    'Banana',
    'Watermelon',
    'Orange' ,
    'Mango'
];
console.log(fruits);

// changing of value 
let girls = ['Anu' , 'mary' , 'tosin']
girls[2] = 'Serah'
console.log(girls);


const person = ['John' , 'Joe' , 46];
console.log(person);
console.log(person[1]);



// This is how to declare an object


let info = {
    myName:  'david' ,
    myAge: 20 ,
    height: 7.5 ,
    brothersName: 'Olamide'
} ;
console.log(info);



// This how access object inside array 

var family = [{
    husband: 'Agbajelola Johnson',
    hesAGE: 54,
    address: '25 shomorin, abeokuta' ,
    emial: 'agba@gmial.com'
},
{
   wife: 'agbajelola mary' ,
   herAge: 45 ,
   address: '25 shomorin, abeokuta',
   email: 'maryagb@gmaail.com'
}
]
console.log(family[1])


// Array inside object 

let messi = {
    fullName: 'Lionel andres messi',
    age: 35 ,
    children: ['mateo' , 'thiago' , 'ciro'] ,
    wife: 'lionel antonela' ,
    clubs: ['barcelona' , 'psg']
}
console.log(messi)
console.log(messi.children[2])
console.log(messi.children[1])
console.log(messi.clubs[0]);


