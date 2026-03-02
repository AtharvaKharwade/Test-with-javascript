const score  = 400 ;

const num = new Number(550)
console.log(score)
console.log(num)

console.log(num.toString().length)  // length is a string property cant be used in number

console.log(num.toFixed(2))  //gives us the decimal value after number 

const anothernum = 123.5899  //when used precision it roundup the value as per set limits  

console.log(anothernum.toPrecision(4))

const reprented = 434234103

console.log(reprented.toLocaleString()) //used to represent number in us standard reprentation
console.log(reprented.toLocaleString('en-IN')) //in Indian standard


//++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-78))

console.log(Math.round(9.45))   //roundup 
console.log(Math.ceil(4.23))   // takes highest value even if decimal is less than 5
console.log(Math.floor(8.96))  // takes lowest value even if decimal is more than 5

console.log(Math.min(2.2,4,3.3,12,1.1)) //same for max

console.log(Math.random())  // gives value from 0 and 1

console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1))+min) //we have defined the range here with (max-min+1) , +1 for avoiding 0  