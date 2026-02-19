//Primitive 

//7 types: number , string , Boolean , null , undefined , symbol , BigInt

//non primitive (Reference)

let user ; // underfined value 
console.log(typeof (user))

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)

const Bignumber = 543836344839649n;

const heros = ["hattori","doremon","shinchan"]  //array

let myobj = {  //object
    name : "Atharva" ,
    age : 22 ,
}

const myfunctiom = function fun(){
    console.log("function calling");
}

console.log(typeof null)  // return object
// array , objects , functions