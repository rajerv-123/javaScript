// Add event listeners

let btn = document.getElementByID("btn")

btn.addEventListener("click",function(e) 
{
    //target element 
    let input1 = document.getElementById("phy").value;
    let input2 = document.getElementById("che").value;
    let input3 = document.getElementById("bio").value;
    let input4 = document.getElementById("maths").value;

    // calculate total number

    let total = parseInt(input1)+parseInt(input2)+parseInt(input3)+parseInt(input4);
    // formula to calculate percentage
     let perc = total/400.0*100;
     // to stop auto from loading
     e.preventDefault();

     // to store the calculated data
     let h1 = document.getElementById("res");
     h1.textContent= "precentage = " + perc; 

});