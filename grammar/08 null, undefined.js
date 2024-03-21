let foo
console.log(foo)    //undefined

const obj = {}
console.log(obj.아무속성)    //undefined

console.log(bar)     //error

let bar = null
console.log(null)  //null

//주의할 것
console.log(null == undefined)  //true
console.log(null == undefined)  //false