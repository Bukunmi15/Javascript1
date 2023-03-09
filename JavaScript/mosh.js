// Declaring an Object 

let persons = [
    {
        name: 'David',
        lastName: 'Bukunmi',
        age: 22,
        email: 'Oyeoluwaubukunmi@gmail.com',
        address: '5 , Golden Grace Obantoko Abk',
        sex: 'Male',
        phoneNumber: 070346112323
    }
]

// console.log(person);


function info(name, lastName, age, email, address, sex, phoneNumber) {
    let informations = { 'name': name, 'lastName': lastName, 'age': age, 'email': email, 'address': address, 'sex': sex, 'phoneNumber': phoneNumber }
    persons.push(informations);
}

// info(name='olamide', lastName='Adesua', age=19, email='balablue@gmail.com', address='1,lalubu street okelawo, abk', sex='M', phoneNumber=8100830930)
info('Taiwo', 'Fatimoh', 50, 'TaiwoFatimoh@gmail.com', '5 , Golden Grace obantoko abk', 'Female', 08055357272)
info('Felix', 'Adejare', 22, 'felixadejare@gmail.com', '7 okikiolu street obantoko abk', 'Male', 82737947724)
console.log(persons);


let person = {
    name: 'Jao Felix',
    age: 50,
    email: 'Jaofelix@gmail.com'
}

console.log(person.age);
// console.log(person.name);







// Hour 
// If hour is between 6am to 12pm : Good Morning 
// If hour is between 12pm to 6pm :  Good Afternoon
// Otherwise: Good Evening 

// let hour = 15;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning');
// } else if (hour >= 12 && hour < 18) {
//     console.log('Good Afernoon');
// } else {
//     console.log('Good Evening');
// }

// const now = new Date();
// if (now >= new Date('2023-01-01') && now <= new Date('2023-01-31')) {
//     console.log('We are in the month January')
// } else if (now >= new Date('2023-02-01') && now <= new Date('2023-02-28')) {
//     console.log('We are in the month February')
// } else if (now >= new Date('2023-03-01') && now <= new Date('2023-03-31')) {
//     console.log('We are in the month March')
// } else if (now >= new Date('2023-04-01') && now <= new Date('2023-04-30')) {
//     console.log('We are in the month April')
// } else if (now >= new Date('2023-05-01') && now <= new Date('2023-05-31')) {
//     console.log('We are in the month May')
// } else if (now >= new Date('2023-06-01') && now <= new Date('2023-06-30')) {
//     console.log('We are in the month June')
// } else if (now >= new Date('2023-07-01') && now <= new Date('2023-07-31')) {
//     console.log('We are in the month July')
// } else if (now >= new Date('2023-08-01') && now <= new Date('2023-08-31')) {
//     console.log('We are in the month August')
// } else if (now >= new Date('2023-09-01') && now <= new Date('2023-09-30')) {
//     console.log('We are in the month September')
// } else if (now >= new Date('2023-10-01') && now <= new Date('2023-10-31')) {
//     console.log('We are in the month October')
// } else if (now >= new Date('2023-11-01') && now <= new Date('2023-11-30')) {
//     console.log('We are in the month November')
// } else if (now >= new Date('2023-12-01') && now <= new Date('2023-12-31')) {
//     console.log('We are in the month December')
// }

function getMonth(now) {
    if (now >= new Date('2023-01-01') && now <= new Date('2023-01-31')) {
        console.log('We are in the month January')
    } else if (now >= new Date('2023-02-01') && now <= new Date('2023-02-28')) {
        console.log('We are in the month February')
    } else if (now >= new Date('2023-03-01') && now <= new Date('2023-03-31')) {
        console.log('We are in the month March')
    } else if (now >= new Date('2023-04-01') && now <= new Date('2023-04-30')) {
        console.log('We are in the month April')
    } else if (now >= new Date('2023-05-01') && now <= new Date('2023-05-31')) {
        console.log('We are in the month May')
    } else if (now >= new Date('2023-06-01') && now <= new Date('2023-06-30')) {
        console.log('We are in the month June')
    } else if (now >= new Date('2023-07-01') && now <= new Date('2023-07-31')) {
        console.log('We are in the month July')
    } else if (now >= new Date('2023-08-01') && now <= new Date('2023-08-31')) {
        console.log('We are in the month August')
    } else if (now >= new Date('2023-09-01') && now <= new Date('2023-09-30')) {
        console.log('We are in the month September')
    } else if (now >= new Date('2023-10-01') && now <= new Date('2023-10-31')) {
        console.log('We are in the month October')
    } else if (now >= new Date('2023-11-01') && now <= new Date('2023-11-30')) {
        console.log('We are in the month November')
    } else if (now >= new Date('2023-12-01') && now <= new Date('2023-12-31')) {
        console.log('We are in the month December')
    }

    if (now >= new Date('2023-01-01') && now <= new Date('2023-01-05')) {
        console.log('Welcome to the month of January and Happy New Year')
    } else if (now >= new Date('2023-02-01') && now <= new Date('2023-02-05')) {
        console.log('Welcome to the month of February')
    } else if (now >= new Date('2023-03-01') && now <= new Date('2023-03-05')) {
        console.log('Welcome to the month of March')
    }else if (now >= new Date('2023-04-01') && now <= new Date('2023-04-05')) {
        console.log('Welcome to the month of April')
    } else if (now >= new Date('2023-05-01') && now <= new Date('2023-05-05')) {
        console.log('Welcome to the month of May')
    } else if (now >= new Date('2023-06-01') && now <= new Date('2023-06-05')) {
        console.log('Welcome to the month of June')
    } else if (now >= new Date('2023-07-01') && now <= new Date('2023-07-05')) {
        console.log('Welcome to the month of July')
    } else if (now >= new Date('2023-08-01') && now <= new Date('2023-08-05')) {
        console.log('Welcome to the month of August')
    } else if (now >= new Date('2023-09-01') && now <= new Date('2023-09-05')) {
        console.log('Welcome to the month of September')
    } else if (now >= new Date('2023-10-01') && now <= new Date('2023-10-05')) {
        console.log('Welcome to the month of October')
    } else if (now >= new Date('2023-11-01') && now <= new Date('2023-11-05')) {
        console.log('Welcome to the month of November')
    } else if (now >= new Date('2023-12-01') && now <= new Date('2023-12-05')) {
        console.log('Welcome to the month of December')
    }
}

getMonth(new Date('2023-12-25'))

console.log(new Date('T11:13:00'));


function isArray(Input) {
    return Array.is_array(input);
}

console.log(is_array(['Bukunmi']));
console.log(is_array('Bukunmi'));
console.log(is_array({firstName:  'Bukunmi'}));