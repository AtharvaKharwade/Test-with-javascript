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



//***********************************************************/

//memory types : Stack -> primitive , Heap -> non-primitive 


let username = "NoteGaming" ;
//this is same in every stack
let titlename = username ;  //here its creates a copy in stack of username to pass to titlename

titlename = "AtharvaKharwade"


console.log(username);
console.log(titlename);

let userone = {
    email : "spider@gamil.com",
    upi : "spider@ybl",
}


let usertwo = userone;
//this is same in every Heap 
usertwo.email = "akkharwade@gmail.com"   //this changes in both userone and usertwo because both of them gets the values from same reference . 

console.log(userone.email)
console.log(usertwo.email)