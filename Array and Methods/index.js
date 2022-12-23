let num = [1,2,3,34,4]
let b = num.toString()
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)

// let r = num.pop()  //pop returns the popped element
// console.log(num, r)

// let r = num.push(22)  //push returns the new array element
// console.log(num, r)

// let r = num.shift() //Remove an element from the start of the array
// console.log(r,num)

let r = num.unshift(37)
console.log(r,num)