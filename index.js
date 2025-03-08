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
fruits.forEach(function(fruit) {
    console.log(fruit);
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
    console.log(item.name, item.age, item.type);
});

people[0].obj.phone.forEach(function(ph){
    console.log(ph)
})


//function

function func_name(name = 'Voxodinson'){
    console.log(name)
}
console.log(func_name('XXxxxx'));



function _name(fname, lname){
    console.log(fname + lname);
}

_name('Outh', 'Menghour');


//arrow function

const arrow_function = (x, y) => x + y;


console.log(arrow_function(10, 10));


