//EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst(){
//get user input 1 convert in JS to a number
var userinput1 = parseInt(document.getElementById("input1").value);
//user input 2 convert in JS to a number    
var userinput2 = parseInt(document.getElementById("input2").value);

//output the sum
document.getElementById("demo").innerHTML = userinput1 + userinput2;
}