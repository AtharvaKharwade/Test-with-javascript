//dates

const Current = new Date()

console.log(Current)
console.log(Current.toString())
console.log(Current.toLocaleDateString())
console.log(Current.toJSON())
console.log(Current.toISOString())
console.log(Current.toDateString())
console.log(Current.toLocaleTimeString())
console.log(Current.toLocaleString())
console.log(Current.toTimeString())
console.log(Current.toUTCString())


console.log(typeof(Current))

const createdate = new Date(2026 ,2,2 , 5, 1);  //months start from 0 -> January
console.log(createdate.toDateString())
console.log(createdate.toLocaleString())

const createdate2 = new Date("2026-03-02")  //we format is yyyy-mm-dd then months start from 01 -> Jan 
console.log(createdate2.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)  //in miliseconds

console.log(Math.floor(myTimeStamp/1000))

console.log(myTimeStamp.toLocaleString('default',{     
    weekday:"long" 
}))