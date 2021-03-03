'use strict';


// using Lodash library and practicing methods.
const books = [{
    name : 'Clean Code',
    writer : 'Robert.C.Martin',
    publisher : 'Prentice Hall',
}, {
    name : 'Harry Potter och Hemligheternas kammare',
    writer : 'J.K.Rowling',
    publisher : 'Tiden',
}, {
    name : "Max räckvidd med HTML & CSS",
    writer : 'Tommy Olsson',
    publisher : 'HME publising',
}];

const output = _.sortBy(books, (book) => book.writer)// sorted in abc order.
console.log(JSON.stringify(output, null, 2));
console.log(output)


// try top 10 popular methods in lodash library

// 1. _.assign
let foo = { a : " a property"};
let bar = { b : 4, c : " an other property"}

let result = _.assign({a: "an old property"}, foo, bar); 
console.log(result); // it works same as object.assign. It will give the sources to a first object (which is a in this case)
// but a will be overwritten. so it shows 'a property' instead of 'an old property'

let kaul = { name : "kaulfield", hobby : "drawing"};
let field = { favoriteFood : "noodles", height : "168cm"};

let kaulfield = _.assign({}, kaul,field);
console.log(JSON.stringify(kaulfield,null,2));
console.log(kaulfield)

//2. _-times
//time will take arguments and it will loop ,second parameter(function) for argument's number's time
// and return it as an array form.

function sayHello() {
    return "Hello!";
}

let times = _.times(5,sayHello);
console.log(times); // result : ["hello", "hello", "hello", "hello", "hello"]

//3. _.debounce
//invoke the function after a certian amount of times since last one.
// _.debounce(func,wait,options)

let debounceHej = _.debounce(function() { console.log("Hej")}, 3000);
debounceHej(); // hej will be coming out after 3 sec later.


console.clear();
