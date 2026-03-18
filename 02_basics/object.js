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

////////////////////////////////////////// part 2  ////////////////////////////////////////////////////////////////


// const tinderUser = new Object()  -> this is singleton object which give same output as non singleton object

const tinderUser = {}
 
tinderUser.name = "Atharva"
tinderUser.age = 20
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "regularuser@gmail.com",
    fullname : {
        username : {
            firstname : "Atharva",
            lastname : "Kharwade",
        }
    }
}

console.log(regularUser.fullname.username.firstname)
console.log(regularUser.fullname.username.lastname)

const obj1 = {1:"one", 2:"two", 3:"three"}
const obj2 = {4:"four", 5:"five", 6:"six"}

//const obj3 = {obj1 ,obj2}   //this is how we merge two objects in one object but it is not the correct way to merge two objects because it will create two keys obj1 and obj2 in obj3 and then we can access the values of obj1 and obj2 through obj3.obj1 and obj3.obj2    
//const onj3 = Object.assign({},obj1,obj2)   //this is how we merge two objects , {} (optional) is used to create new object and then we merge obj1 and obj2 in it
const obj3 = {...obj1,...obj2}   //this is the spread operator which is used to merge two objects in one object and it is the correct way to merge two objects because it will not create two keys obj1 and obj2 in obj3 and then we can access the values of obj1 and obj2 directly through obj3

console.log(obj3)

console.log(Object.keys(tinderUser))   //this will give us the keys of the object
console.log(Object.values(tinderUser))   //this will give us the values of the object
console.log(Object.entries(tinderUser))   //this will give us the key-value pairs of the object in the form of an array of arrays

const anything = [         //this is an array of objects used when we are fetching data from an API and we want to store that data in an array of objects
    {
        name : "Atharva",
    } ,
    {
        name : "Kharwade",
    } ,
    {
        name : "Atharva Kharwade",
    }
]

console.log(anything)   

console.log(tinderUser.hasOwnProperty("name"))   //this will check if the object has the property name or not and it will return true or false
console.log(tinderUser.hasOwnProperty("email"))   //this will check if the object has the property email or not and it will return true or false

const {name, age, isLoggedIn:login} = tinderUser   //this is called destructuring assignment which is used to extract the values from the object and assign them to variables with the same name as the keys of the object

console.log(name)
console.log(age)
console.log(login)

//API -> Application Programming Interface

//JSON -> JavaScript Object Notation -> it is a format for storing and exchanging data and it is based on the syntax of JavaScript objects but it is not a JavaScript object and it is used to exchange data between a server and a client and it is also used to store data in a file with .json extension{
//{    "name" : "Atharva",
//    "age" : 20,
//   "email" : "atharva@gmail.com",
//}