//Array

const myarr = [0,1,2,3,4,5]

console.log(myarr)

const myarr2 =new Array(1,2,3,4)
console.log(myarr2[2])

myarr.push(9)
myarr.push(7)

myarr.pop()
console.log(myarr)

myarr2.unshift(7)
myarr2.unshift(9)
myarr2.shift()
console.log(myarr2)

console.log(myarr2.includes(0))

console.log(myarr.indexOf(3))

const newarr = myarr.join()
console.log(newarr)
console.log(typeof newarr)

//slice and splice

console.log("A " , myarr)

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr)

const myn2 = myarr.splice(1,3)
console.log(myn2)
console.log("C ", myarr)



//part2

const marvel_heroes = ['spidermsn','ironman','thor']

const dc_heroes = ['batman','flash','superman']


/*marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)  // 3rd index as whole dc array

//same for
*/
/*
const new_heroes = marvel_heroes.concat(dc_heroes)   only one value can be given 
console.log(new_heroes) //actually concat elements

//This same thing can be done using spread operator
*/

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes)  //merged using spread operator ...


//when there is array inside array inside array
const another_arr = [1,2,[3,4,5],[6,[7,8,[9,10]]]]

const new_another_arr = another_arr.flat(Infinity) //here infinity is depth which can be 1,2,4,3
console.log(new_another_arr)

console.log(Array.isArray("Atharva"))  //checking if the given value is array or not

console.log(Array.from("Atharva")) //converting given value into array

//interesting case
console.log(Array.from({name: "Atharva"}))  //return empty cause it is not defined what ti be array key ? or value? or else etc.


//now this "of" is used to make a array out of set of elements that can be variable , array , vectors etc.
let score1 = 100
let score2 = 200
let score3 = 300 
const score4 = [400 , 500]

console.log(Array.of(score1,score2,score3,...score4))  //used spread operator