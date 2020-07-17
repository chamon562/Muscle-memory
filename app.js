// //muscle memory of things we did before
// // 5 variables of different data types 
// // first would be string var = string
// // var = number
// //var = array
// // var == boolean
// // var to object (4 different key /value pairs
// // [string], [number], [array], [boolean],)

var string = 'This is my string!'

var num = 1

const array = [1,2,3,4,5,]

let thisTrue = true 

const things = {
    name:'string', 
    num:1, 
    numbLike: [1,2,3], 
    toQuit: false
}

let sentence = 'Today, is the Friday!'
console.log(sentence);

let age = 32;
console.log(age);

const motorcycles = ['kawasaki', 'yamaha', 'suzuki', 'haybusa'];
console.log(motorcycles);

let doesThisWork = true;
console.log(doesThisWork);

const lakers = {
    headquarters: 'Los Angelos',
    numberOfPlayers: 11,
    players: ['LBJ','Anthony Lewis', 'Danny Green'],
    areChampions: true
}

console.log(lakers);
// spend 7 min 10 different functions 
//one function pass in an array
//one of your functions need to pass a callback
//one of your functions pass in a string
//pass in object
//pass boolean
//the rest freestyle
function printStuff(words){
    let word = 'Dont ever quit!';
    return words;
}

function callItBack(name, callback){
    let name = 'Channee';
    let calling = callback()
    return callItBack;
}

console.log(callItBack);

function thisIsString(){
    let array = ['one','two','three'];
    return array;
}

function adding(num1, num2){
    let adding = num1 + num2;
    return num1 + num2
}

console.log(adding(1, 3))