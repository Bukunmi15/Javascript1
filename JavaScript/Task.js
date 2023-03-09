students = [{
    first_name: "Loria",
    last_name: "Brigginshaw",
    test_score: 28,
    exam_score: 50,
    aggregate: null,
    grade: null
}, {
    first_name: "Catriona",
    last_name: "Braithwaite",
    test_score: 15,
    exam_score: 19,
    aggregate: null,
    grade: null
}, {
    first_name: "Edita",
    last_name: "Skinn",
    test_score: 11,
    exam_score: 42,
    aggregate: null,
    grade: null
}, {
    first_name: "Barnie",
    last_name: "Pimbley",
    test_score: null,
    exam_score: 68,
    aggregate: null,
    grade: null
}, {
    first_name: "Liane",
    last_name: "Ector",
    test_score: 26,
    exam_score: 54,
    aggregate: null,
    grade: null
}, {
    first_name: "Emile",
    last_name: "Izchaki",
    test_score: 5,
    exam_score: 24,
    aggregate: null,
    grade: null
}, {
    first_name: "Adella",
    last_name: "Prior",
    test_score: 3,
    exam_score: 41,
    aggregate: null,
    grade: null
}, {
    first_name: "Luise",
    last_name: "Meany",
    test_score: 13,
    exam_score: 7,
    aggregate: null,
    grade: null
}, {
    first_name: "Nevin",
    last_name: "Hulme",
    test_score: 22,
    exam_score: 32,
    aggregate: null,
    grade: null
}, {
    first_name: "Emogene",
    last_name: "Fassman",
    test_score: 22,
    exam_score: 3,
    aggregate: null,
    grade: null
}]

let details = "";

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // This is to get the aggregate
    student.aggregate = student.test_score + student.exam_score;

    // This is to get the grades
    if (student.aggregate >= 70) {
        student.grade = 'A'
    } else if (student.aggregate < 70 && student.aggregate >= 60) {
        student.grade = 'B'
    } else if (student.aggregate < 60 && student.aggregate >= 50) {
        student.grade = 'C'
    } else if (student.aggregate < 50 && student.aggregate >= 40) {
        student.grade = 'D'
    } else if (student.aggregate < 40 && student.aggregate >= 30) {
        student.grade = 'E'
    } else if (student.aggregate < 30) {
        student.grade = 'F'
    }

    details += '<tr><td>' + student.first_name + '</td><td>' + student.last_name + '</td><td>' + student.test_score + '</td><td>' + student.exam_score + '</td><td>' + student.aggregate + '</td><td>' + student.grade + '</td></tr>';
}

// document.getElementById('student_details').innerHTML = details;

let nav = '<nav class="navbar navbar-expand-sm navbar-dark bg-dark"><div class="container-fluid"><a class="navbar-brand" href="javascript:void(0)">Logo</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mynavbar"><ul class="navbar-nav me-auto"><li class="nav-item"><a class="nav-link" href="javascript:void(0)">Link</a></li><li class="nav-item"><a class="nav-link" href="javascript:void(0)">Link</a></li><li class="nav-item"><a class="nav-link" href="javascript:void(0)">Link</a></li></ul><form class="d-flex"><input class="form-control me-2" type="text" placeholder="Search"><button class="btn btn-primary" type="button">Search</button></form></div></div></nav>'

// document.getElementById('navbar').innerHTML = nav;
// document.getElementById('navba').innerHTML= nav;
// console.log(students);

/*
Given an array of employee with the details: name, phone, email, department, salary, employment date.

1. write a function that accept employee and add to the array of employee.

2. write a function that accept 2 parameters 'date from' and 'date to'. And returns the employee that was employed within the date range in an array form.

3. write function that returns the array of employee with invalid email address.

4.write a function that return employee with highest and lowest pay.
*/


let Employees = [{
    name: "Clarice",
    phone: "366-848-0078",
    email: "crubbert0@narod.ru",
    department: "Services",
    salary: 133628,
    employment_date: new Date('2012-01-01')
}, {
    name: "Miriam",
    phone: "646-118-0108",
    email: "mmacavddy1@hostgator.com",
    department: "Human Resources",
    salary: 110755,
    employment_date: new Date('2012-01-01')
}, {
    name: "Lenna",
    phone: "435-785-2829",
    email: "lbadham2@opera.com",
    department: "Research and Development",
    salary: 203324,
    employment_date: new Date('2012-01-01')
}, {
    name: "Valerie",
    phone: "536-145-0275",
    email: "vmuzzillo3@mediafire.com",
    department: "Marketing",
    salary: 335766,
    employment_date: new Date('2012-01-01')
}, {
    name: "Hestia",
    phone: "530-703-9611",
    email: "hpetras4@yolasite.com",
    department: "Engineering",
    salary: 352579,
    employment_date: new Date('2012-01-01')
}, {
    name: "Loretta",
    phone: "536-384-8072",
    email: "lgreenacre5@about.me",
    department: "Engineering",
    salary: 269330,
    employment_date: new Date('2012-01-01')
}, {
    name: "Hamel",
    phone: "849-468-3997",
    email: "hdoret6@so-net.ne.jp",
    department: "Product Management",
    salary: 72223,
    employment_date: new Date('2012-01-01')
}, {
    name: "Abbey",
    phone: "618-459-7962",
    email: "aducker7@ebay.co.uk",
    department: "Accounting",
    salary: 241861,
    employment_date: new Date('2012-01-01')
}, {
    name: "Bobby",
    phone: "818-935-9224",
    email: "bneeds8@sphinn.com",
    department: "Support",
    salary: 311555,
    employment_date: new Date('2012-01-01')
}, {
    name: "Lanie",
    phone: "695-790-5719",
    email: "lfrancioli9@github.com",
    department: "Accounting",
    salary: 94369,
    employment_date: new Date('2012-01-01')
}, {
    name: "Audrie",
    phone: "681-152-3443",
    email: "awagena@oracle.com",
    department: "Training",
    salary: 492627,
    employment_date: new Date('2012-01-01')
}, {
    name: "Pansie",
    phone: "315-961-3313",
    email: "pepinayb@google.com.hk",
    department: "Human Resources",
    salary: 60122,
    employment_date: new Date('2012-01-01')
}, {
    name: "Jeanette",
    phone: "876-872-3477",
    email: "jjeschnerc@mail.ru",
    department: "Training",
    salary: 404266,
    employment_date: new Date('2012-01-01')
}, {
    name: "Adelbert",
    phone: "287-978-5665",
    email: "atummonsd@bloglines.com",
    department: "Services",
    salary: 192750,
    employment_date: new Date('2012-01-01')
}]

function addEmployee(name, phone, email, department, salary, employment_date) {
    let employee = {'name':name, 'phone':phone, 'email':email, 'department':department, 'salary':salary, 'employment_date':employment_date}
    // console.log(employee);
    Employees.push(employee)
}

addEmployee('Praise','09033556255','emmanuelpraise36@gmail.com','Engineering',99999999999,new Date ());
console.log(Employees);






// let things = ['ball', 'Bat',  'Bag', 'Car', 'couch', 'calendar']

// let person = {name: 'Isaiah', sex: 'M', age: 12}
// things.push(person)

// console.log(things);


// let number = {
//     a: 23,
//     b: 23,
//     c: 34

// }

// let newScore = []

// for(let i = 0 ; i < number.length ; i++){
//     newScore = number[i] + 10
//     console.log(newScore);
// }

let month = ''

const now = new Date();
if (now >= new Date('2023-01-01') && now <= new Date('2023-01-31')) {
    month += 'We are in the month January';
}else if(now >= new Date('2023-02-01') && now <= new Date('2023-02-28')) {
    month += 'We are in the month February';
}else if(now >= new Date('2023-03-01') && now <= new Date('2023-03-31')) {
    month += 'We are in the month March';
}else if(now >= new Date('2023-04-01') && now <= new Date('2023-04-30')) {
    month += 'We are in the month April';
}else if(now >= new Date('2023-05-01') && now <= new Date('2023-05-31')) {
    month += 'We are in the month May';
}else if(now >= new Date('2023-06-01') && now <= new Date('2023-06-30')) {
    month += 'We are in the month June';
}else if(now >= new Date('2023-07-01') && now <= new Date('2023-07-31')) {
    month += 'We are in the month July';
}else if(now >= new Date('2023-08-01') && now <= new Date('2023-08-31')) {
    month += 'We are in the month August';
}else if(now >= new Date('2023-09-01') && now <= new Date('2023-09-30')) {
    month += 'We are in the month September';
}else if(now >= new Date('2023-10-01') && now <= new Date('2023-10-31')) {
    month += 'We are in the month October';
}else if(now >= new Date('2023-11-01') && now <= new Date('2023-11-30')) {
    month += 'We are in the month November';
}else if(now >= new Date('2023-12-01') && now <= new Date('2023-12-31')) {
    month += 'We are in the month December';
}


document.getElementById('month').innerHTML = month;
