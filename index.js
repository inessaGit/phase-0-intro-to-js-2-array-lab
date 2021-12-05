// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();//takes no arguments! returns removed element
}

function destructivelyRemoveFirstCat(){
    cats.shift(); //takes no arguments! returns removed element
}

function appendCat(name){
    let newCats=[...cats.slice(), name]
    return newCats;
}
function prependCat(name){
    let newCats=[name,...cats.slice()];
   // let newCats=[name,...cats];

    return newCats;
}

function removeLastCat(){

   let newCats= cats.slice(0,-1);
   return newCats;
}

function removeFirstCat(){
    let newCats=cats.slice(1);
    return newCats;
}