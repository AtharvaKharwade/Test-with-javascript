
function greet(name) {   //here name is the parameter which we are passing to the function
    console.log(`Hello ${name} !`)
}
 
greet("Atharva")  //here Atharva is the argument which we are passing to the function

function addTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(addTwoNumbers(5, 10))  //here 5 and 10 are the arguments which we are passing to the function

const result = addTwoNumbers(20, 30)  //we can also store the result of the function in a variable
console.log(result)

function isEven(num) {
    if(num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(4))  //true
console.log(isEven(7))  //false

function calculateprice(val1,val2,...num1) {   //here val1 and val2 are the first two arguments and ...num1 is the rest operator to take multiple arguments
    console.log(val1)   //this will give us the first argument
    console.log(val2)   //this will give us the second argument
    console.log(num1)   //this will give us an array of the remaining arguments which we are passing to the function
}

calculateprice(100, 200, 300, 400)   //here we are passing multiple arguments to the function and it will give us an array of those arguments


const username = {  //object which we are passing as an argument to the function
    name : "Atharva",
    age : 20,
}

function printUserDetails(user){
    console.log(`My name is ${user.name} and I am ${user.age} years old.`)
}

//printUserDetails(username)   //here we are passing the object as an argument to the function and it will give us the details of the user in the form of a string

printUserDetails({name: "John", age: 25})   //we can also pass the object directly to the function without storing it in a variable
