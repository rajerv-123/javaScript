// practice set of javaScript
// problem no 1 
// let age = prompt("what is your age")
// if(age > 10 && age<30){
//     console.log("yout age lies between 10 to 30")
// }
// else{
//     console.log("yout age is not lies betwee 10 and 30 ")
// }


// problem 2 

let age = 12;
switch (age) {
    case 12:
        console.log("your age is 12")       
    case 13:
        console.log("your age is 13")
    case 15: 
        console.log("your age is 20")
    default:
        console.log("your age is nothing")
}



Date : 15/11/2022

	insertAdjacentElement: - insertAdjacentElement is a function which is capeble of taking two argument.
        

	1: inserting position 
	2: element 
	
	Syntax : 
			insertAdjacentElement("InsertPosition",element)

	if we want to add new element all the four adjacent sides we go for insertAdjacentElement function()
	
	Beforebegin : 	upside 
	afterbegin: `	left side
	afterend : 	down side
	beforend: 	right side 

eg:  <h1 id="heading">Hello</h1>
	<script>

        // target the element
        var x = document.getElementById("heading");

        // create the element
        var tag = document.createElement("h1")
        tag.textContent = "javascript"
        console.log(tag)


        // add the created element in all the 4 side 

        // x.insertAdjacentElement(InsertPosition,element)

        // x.insertAdjacentElement("beforebegin",tag)
        // x.insertAdjacentElement("beforeend",tag)
        //x.insertAdjacentElement("afterbegin",tag)
        x.insertAdjacentElement("afterend", tag)

    </script>


# Events :	events is basically an action perform for respective event handler should be attached.  
		



eg: 
    <script>

        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 37:
                    document.body.style.backgroud = "black"
                    break;
                case 38:
                    document.body.style.backgroud= "red"
                    break;
                case 39:
                    document.body.style.backgroud = "pink"
                    break;
                case 40:
                    document.body.style.backgroud = "blue"
                    break;
                case 65:
                var  x =  document.createElement("h1")
                x.textContent ="rajeev"
                document.body.appendChild(x)
                break;

            }
        }
    </script>




























