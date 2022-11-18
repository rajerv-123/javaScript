const inputkey  = document.getElementById("inputkey");
const inputvalue = document.getElementById("inputvalue");
const btn  = document.getElementById("btn");
const output = document.getElementById("output");


// logic to store the date to the local storage api

btn.onclick = function() {
    const key = inputkey.value;
    const value = inputvalue.value;
    if(key && value) {
        localStorage.setItem(key, value)
        location.reload();
    }
}
     
// fetch the data from the local storage one by one

for(let i = 0; i < localStorage.length; i++) {

    const k = localStorage.key(i);
    const v  = localStorage.getItem(k)
    output.innerHTML+=`${k}: ${v} <br>`
}