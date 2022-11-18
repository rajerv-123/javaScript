// compairing the for loop time taken 

console.time("for loop")
for(let i = 0; i <500; i++){
    console.log(i)
}
console.timeEnd("for loop")
//for loop: 202.015ms
// compairing the while loop time taken


console.time("while loop")
let i = 0;
while (i<500){
    console.log(i)
    i++;
}
console.timeEnd("while loop")
//while loop: 261.264ms
