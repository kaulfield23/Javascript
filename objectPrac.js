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
input = input.map((value) => value.split(',')); //dividing by ,
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

console.clear()