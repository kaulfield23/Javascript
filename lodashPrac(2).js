'use strict';

console.log(`--------✔️✔️✔️------lodash------✔️✔️✔️--------`);




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

//4. _.find
// you can find the specific object without using iteration.

let cats = [
    { name : "moonie", lastname : "Kim", age : 2, feature : "very big"},
    { name : "ggori", lastname : "Kim", age : 1, feature : "talkative"},
    { name : "dari", lastname : "Kim", age : 2, feature : "calm"},
    { name : "maknae", lastname : "Kim", age : 2, feature : "very small"},
];

const moonie = _.find(cats, { feature : "very big"});
console.log (moonie)
console.log(cats)

// you can also use a function to find a specific object which has same value

const ggori = _.find(cats, function(value) {
    return value.age < 2;
});
console.log(ggori);

//5. _.get and _.set .... I don't get it 100% yet.

let birthday = { mybirthday : { august : 23}};
birthday = _.set(birthday, 'mybirthday.gift[0]', 'food');
let feature = _.get(cats, "feater", "calm");
console.log(feature)
console.log(birthday)

// 6. _.deburr
// this will turn other languages letter into english letter

console.log(_.deburr("Linköping ligger i östergötland"));

// 7. _.keyBy : very useful funciton to find an object with a specific property.

cats = _.keyBy(cats, "name");
const maknae = cats["maknae"];
console.log(maknae)
console.log(cats)
let courses = [
    {name : "english", teacher : "anna", startingDay : "1st Mar"},
    {name : "webbutveckling 2", teacher : "conny", startingDay : "22nd Feb"},
    {name : "art", teacher : "june", startingDay : "15st March"},
];

courses = _.keyBy(courses,"name");
const englishCourse = courses["english"];
console.log(englishCourse);
console.log(`--------------------lodash fin----------------------`);