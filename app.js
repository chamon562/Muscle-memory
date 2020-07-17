// //muscle memory of things we did before
// // 5 variables of different data types 
// // first would be string var = string
// // var = number
// //var = array
// // var == boolean
// // var to object (4 different key /value pairs
// // [string], [number], [array], [boolean],)

var myString = 'This is my string!'

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

let name = 'Channee'

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

// function callItBack(name, callback){
//     let name = 'Channee';
//     let calling = callback()
//     return callItBack;
// }

// console.log(callItBack);

// function thisIsString(){
//     let array = ['one','two','three'];
//     return array;
// }

// function adding(num1, num2){
//     let adding = num1 + num2;
//     return num1 + num2
// }

// console.log(adding(1, 3))


// function trueThat(true, false){
//     let true = true
//     if(true === true){
        
//     } else 
// }

/// first function pass in array
function displayCoolBikes(array){
    let result = [];
    
    for(let i =0; i <array.length; i++){
        let bike = array[i];
        if(bike.length > 7){
            result.push(bike);
        }
    }

    return result;
}

console.log(displayCoolBikes(motorcycles));
// going to pass in displayCoolBikes
function removeFromArray(callback, array) {
    let result = callback(array)[0];
    console.log(result);
}
// pass in array of pass in motorcicles call backs
removeFromArray(displayCoolBikes, motorcycles);

function printSentence(string){
    console.log(string)
}

printSentence(sentence);
printSentence(name);

function printPlayers(object) {
    console.log(object.players);
}
printPlayers(lakers);

function printEachPlayer(object) {
    object.players.forEach(eachPlayer =>{
        console.log(eachPlayer);
    });
}

//invoke 

printEachPlayer(lakers);

function doesThisReallyWork(boolean){
    //this is conditional if this do this else do this
    if(boolean){
        console.log('This Works')
    } else{
        console.log('this does not work')
    }
}

//invoke
doesThisReallyWork(doesThisWork);

// you can getElelementById or querySelector
// use two geElement

const sectionOne = document.getElementById('section-one')
console.log(sectionOne)

const sectionTwo = document.getElementById('section-two')
console.log(sectionTwo)
// if you get id by queryselector use #
const sectionThree = document.querySelector('#section-three')
console.log(sectionThree)

const sectionFour = document.querySelector('#section-four')
console.log(sectionFour)

const sectionFive = document.querySelector('#section-five')
console.log(sectionFive)

// const sectionFour = document.querySelector('#section-four')
// console.log(sectionFour)

//one way to add something to your h2

//innerHtml innerText use textContent
//textContent is allows you to put in html within the lement itself
//with innerHtml what can happen is somebody can add code inside your code
//innerHtml is unsafe 

//sections will be teams

sectionOne.textContent = 'Lakers';

sectionTwo.textContent ='Warriors';

sectionThree.textContent = 'Nets';

sectionFour.textContent = 'Celtics';

sectionFive.textContent = 'Utah';

sectionOne.textContent ='Vegita';

sectionTwo.textContent = 'Goku';

sectionThree.textContent = 'Gohan';

sectionFour.textContent = 'Piccolo';

sectionFive.textContent = 'Crillin';

function printMyString(string){
    console.log(string)
}

printMyString(myString);

function printMyArray(array){
    console.log(array)
}
printMyArray(things)

// function grabArray(array){
//     let result = [];
//     for(let i =0; i < array.length; i++){
//         let array = array[i]
//     }
// }

//add info to paragrph
// dont forget the dot('.paragraph')
 const paraOne = document.querySelector('.paragraph-one');
 console.log(paraOne);

 paraOne.textContent = 'Lebron James';

 const paraTwo = document.querySelector('.paragraph-two');
 console.log(paraTwo)
 paraTwo.textContent = 'Steph Curry';

 const paraThree = document.querySelector('.paragraph-three');
 paraThree.textContent = 'Kemba Walka';

 const paraFour = document.querySelector('.paragraph-four');
 console.log(paraFour);
 paraFour.textContent = 'Kyrie Irving';

 const paraFive = document.querySelector('.paragraph-five');
 console.log(paraFive);
 paraFive.textContent = 'Damien Lillard';

 const containerSix = document.createElement('div');
 
 containerSix.classList.add('container-six');
 
 console.log(containerSix)

 const sectionSix = document.createElement('h2');
 console.log(sectionSix);


 