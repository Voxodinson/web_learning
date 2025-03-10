import { getData } from "./module.js";
const dataFetch = [];

await getData(dataFetch, 'https://fakestoreapi.com/products');

var i = 0;
let num = 10;
const name = '';


//object

const person = {
    name: 'Amra',
    age: 10
}

console.log('My name is' + person.name +  'Im' + person.age);


//array

let fruits = ["apple", "banana", "cherry"];

//built in function work with array

fruits.push('mango');
fruits.unshift('newItem');
fruits.pop();
fruits.shift();

// for(let i = 0; i <= fruits.length; i++){
//     console.log(fruits[i]);
// }


fruits.forEach(function(fruit, idx) {
    console.log(fruit, idx);
});



//array in object
let arr_in_obj = {
    name: "Alice",
    hobbies: ["reading", "hiking", "cooking"]
};

arr_in_obj.hobbies.forEach(function(item){
    console.log(item);
})

//object in array or array of ibject

let people = [
    {   
        name: "Alice", 
        age: 30, 
        obj: {
            acc_type: 'Teacher',
            phone: [
                '0999888723', 
                '082838239'
            ]
        }
    },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

people.forEach(function(item){
    console.log(item.name, item.age);
});

people[0].obj.phone.forEach(function(ph){
    console.log(ph)
})


//function

function func_name(name){
    console.log(name);
}

console.log(func_name('XXxxxx'));

//arrow function

const arrow_function = (x, y) => x + y;


console.log(arrow_function(10, 10));



const func_with_param = (_name = 'quest') => {
    console.log(_name);
}

func_with_param('new quest');




function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("✅ Data Loaded!"), 6000);
    });
}

let data = [];

// async function getData() {
//     let response = await fetch("https://fakestoreapi.com/products");
    
//     if(response){
//         data = await response.json();
//         console.log(data);

//         data.forEach((item) => {
//             console.log(item.title)
//         });
//     }
//     else
//     {
//         console.log('fetch data failed...!');
//     }
// }

// getData();


//rest parameter ( ... )
function func_sum(...numbers) {
    let total = 0;

    numbers.forEach((num) => {
        total += num;
    });
    return total;
}
let newNum = 1000
console.log(func_sum(10, 120, 39, 823, 23 ,23 ,234, 203, 239, newNum, 1200, 'uuue'));



let score = 90;

if (score >= 50 || score >= 90) {
    console.log("Grade: A");
} else if (score >= 80 ) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
//Ternary Operator (? :) – Shorter if...else

const isOpenButton = false;

const buttonText = isOpenButton ? 'Button is open' : 'Button is false';

console.log(buttonText)



let number = 3;

switch (number) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Not in the range");
}




let mySet = new Set([1, 2, 3, 4, 4]);
console.log('set', mySet);  // Set {1, 2, 3, 4}

let myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 30);

console.log(myMap.get('name'));
console.log(myMap.has('age'));


function sum(...numbers) {
    return numbers.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 10, 20)); 



let arr1 = [1, 2, 120 ,12881, 8128];
let arr2 = [3, 4];

let merged = [...arr1, ...arr2];
console.log(merged);



const obj1 = { name: "Alice" };
const obj2 = { age: 30 };

const combinedObj = { ...obj1, ...obj2 };

console.log(combinedObj);




