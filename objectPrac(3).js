// const num = 150;

// num.kr = function () { 
//     return this.valueOf() + "kr";
// }

// console.log(num.kr()) 

//in this code, num can't have function cause it is a primitive type.
// to make it work, you gotta add prototype.

const numberForKr = 150;
Number.prototype.kr = function() {
    return this.valueOf() + "kr";
}
console.log(numberForKr.kr());

function print(code) {
    return printLang[code];
}

let printLang = {
    ko : "korean",
    en : "english",
    fr : "french"
};

console.log('printLang("ko") : ', print('ko'));

//using split to make a new array.

let input =`daslf,welr,wet,sdf
02,134.4,234.67,2356.45
03,23.34,325.4,2134.66
04,234.234,2345,1.2355.2`;

input = input.split('\n'); // dividing by \n

console.log(input)
input = input.map((value) => value.split(',')); //dividing by ','
console.log(input)


//JSON

let json = {
    "name" : "hongongza",
    "price" : 19990,
    "publisher" : "hanbit",
}

let hongong = [{
    "name" : "hongongpy",
    "price" : 13345,
    "publisher" : "hanbit",
}, {
    "name" : "html 5 webprogramming",
    "price" : 20000,
    "publisher" : "hanbit"
}]

const data = [{
    name : 'a',
    age : 20,
    height : '168cm',
}, {
    name : 'b',
    age : 26,
    height : '160cm',
}]
let toJSON = JSON.stringify(data) // make it to json type.
console.log(typeof(toJSON)) //string
console.log(JSON.stringify(data, null, 2))
console.log(JSON.parse(toJSON)) //make it to js array type again.


// to see if there is a property in object.

const fruit = {
    red : "apple",
    green : "grape",
    yellow : "banana",
}

if(fruit.red !== undefined) {
    console.log('it has red property');
} else {
    console.log('it doesn\'t have red property');
}


//it is simple but to make it even more simpler, you can write like this

if(fruit.purple) {
    console.log('it has purple property')
} else {
    console.log('it doesn\'t have purple property');
}

//set the property

fruit.red = fruit.red !== undefined ? fruit.red : "there is no red fruit";
fruit.black = fruit.black !== undefined ? fruit.black : "there is no black fruit";
console.log(fruit);// there was no black property so it sets a black property with "there is no black fruit"

//make it simpler

fruit.silver = fruit.silver || "there is no silver fruit"
console.log(fruit); // added silver property.


// you can make plural statement in a one sentence.

let [ai,bi] = [1,2];
[ai,bi] = [bi,ai]
console.log(ai,bi)

let arrayA = [1,2,3,4,5]
const [aa,bb,cc] = arrayA
console.log(aa,bb,cc) //1,2,3

// take out properties and assign it.

const smartPhone = {
    name : "galaxy S9",
    company : "samsung",
    country : "korea",
}

const {name, company,country } = smartPhone;
console.log(`take it out by properties' name
- ${name}, ${company}`)

const {phoneName = name, land = country} = smartPhone;

console.log(`take out properties with other valueables
${phoneName},${land}`);

// clone array
// if you use spread operator, it will clone the array.
const todoList = ['study js', 'cook dinner'];
const todoTmr = [...todoList];
todoTmr.push('sell a book');
todoList.push('play game');

console.log(todoList,todoTmr)

// but you can also clone the array and add new things.

const todoOnFri = [...todoList,'meet my friend']; // add 
console.log(todoOnFri)

// using plural spread operator at the same time

const pizzaDough= ['flour','water','tomato sacue'];
const topping = ['cheese', 'pineapple','mushrooms'];

console.log([...pizzaDough,...topping]); // will be array with 6 length.

// you can also clone object with tha same way.

const minBror = {
    name : 'HJ',
    age : 26,
    live : 'Korea'
}

const minBrorInfor = {...minBror}
minBrorInfor.born = "busan";
minBrorInfor.feature = "cute";
console.log(minBror)
console.log(minBrorInfor)


// you can change the particular properties from the origin one

const minBrorInforV2 = {
    ...minBrorInfor,
    name : "HJ.E",
    koreanAge : 28,
}

console.log(minBrorInfor);
console.log(minBrorInforV2); // but an order is very important in spread operator cause it can overwrite things.


console.log("ya");
