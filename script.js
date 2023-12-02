// Part 1

// let Data = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
// let ID = '';
// let Name = '';
// let Occupation = '';
// let Age = '';
// let counter = 1;

// for (let i = 0; i < Data.length; i ++) {
//     if (Data[i] === '\n') {
//         counter ++
//     }
//     if (counter == 1) {
//         ID += Data[i];
//     } else if (counter == 2) {
//         Name += Data[i];
//     } else if (counter == 3) {
//         Occupation += Data[i];
//     } else {
//         Age += Data[i]
//     }
// }
// console.log(ID, Name, Occupation, Age);


// Part 2

const newArray = [
     ['ID', 'Name','Occupation', 'Age'],
     ['42', 'Bruce', 'Knight', '41'],
     ['57', 'Bob', 'Fry Cook', '19'],
     ['63', 'Blaine', 'Quiz Master', '58'],
     ['98', 'Bill', 'Doctor"\s" Assistant', '26'],
    ]

console.log(newArray);


const Obj1 = [
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
];

const obj2 = [
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age:'19'},
];

const obj3 = [
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'},
];

const obj4 = [ 
    {id: '98', name: 'Bill', occupation: 'Doctor\s" Assistant', age: '26'},
];

const multiObj = Obj1.concat(obj2, obj3, obj4); 

console.log(multiObj);

function lowercaseKeys(multiObj) {
    return Object.keys(multiObj).reduce((accumulator, key) => {
        accumulator[key.toLowerCase()] = multiObj[key];
        return accumulator;
    }
)}
multiObj.splice(1, 1, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
multiObj.pop();
multiObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });