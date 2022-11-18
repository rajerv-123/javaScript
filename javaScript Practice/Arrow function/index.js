// function add(a,b){
//     return a+b
// }
// add()

// let x = 12;
// let y = 15;
// let z = x + y
// console.log(z)
// document.write(z)


// traditional way to define a function

function add (a,b){
    return 10 +10
}
console.log(add())
//////////////////////////////////////////////
function sub(a,b){
    return 10-5
}
console.log(sub())
/////////////////////////////////////////////
function mul(a,b){
    return 10 * 10
}
console.log(mul())
////////////////////////////////////////////
function div(a,b){
    return 10 * 5
}
console.log(div())
  
// after coming ES6 in 2015 arrow function is came in the picture

// don't need to write function name 

var x = ()=> console.log("hello world") // if we write function with only single printing statement then no need of 
                                        // writing curly brackets
                                        x()

var x = _ => console.log("hello world") // if we write function with only single printing statement then no need
                                            // to write perenthesis define
                                        x()
var x = (name)=>console.log("student name is " + name)
 x("bala")
 x("sala")
 
