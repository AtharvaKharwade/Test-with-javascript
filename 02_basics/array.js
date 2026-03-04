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