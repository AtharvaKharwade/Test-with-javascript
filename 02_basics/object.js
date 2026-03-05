//singleton
//object.create

//object literals

const mysym = Symbol("key1")  //Symbol is defined here


const myuser = {
    name : "Atharva",
    [mysym] : "Mykey1",        //this is how we define the symbol
    age : 20,
    email: "akkharwade@gmail.com",
    "anime name":"Attack On titan",
}

console.log(myuser.email)
console.log(myuser["email"])
console.log(myuser["anime name"])
console.log(myuser[mysym])

myuser.email = "atharva@gmail.com"

//Object.freeze(myuser) we have to comment this out for function to work

myuser.email = "newchange@gmail.com"

console.log(myuser)

myuser.greeting = function(){
    console.log("hello JS user !")
}

myuser.greeting2 = function(){
    console.log(`hello JS user ! , ${this.name}`)   //calling the parameter from myuser
}

//console.log(myuser.greeting)      // gives output : [Function (anonymous)]
console.log(myuser.greeting())
console.log(myuser.greeting2())