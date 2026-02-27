
const string1 = "Atharva-note"
const age = 21

const printstring = string1 + age ;  //works but wrong implementation
console.log(printstring)


console.log(`Hello , this is a demo username is ${string1} and age is ${age}`)  //right implementation

console.log(string1[1])
console.log(string1.length)
console.log(string1.toUpperCase())
console.log(string1.charAt(3))
console.log(string1.indexOf('a'))

const newstring = string1.substring(0,4)  //this doesnt follow nwgative values 
console.log(newstring)

const slicestring = string1.slice(-7,2)
console.log(slicestring)

const spacestring = "      Atharva        "
console.log(spacestring)
console.log(spacestring.trim())

const url = 'https://atharva.com/note%30Gaming'
console.log(url.replace('%30','-'))

console.log(url.includes('note'))

console.log(string1.split('-'))