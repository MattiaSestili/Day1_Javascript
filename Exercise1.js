var event2 = document.getElementById("button1");
event2.addEventListener('click',calculation,false);

//Function for the calculate of 3 value.
function calculation(){
    //get user first number
    var userinput1 = parseInt(document.getElementById("input1").value);//get user second number
    var userinput2 = parseInt(document.getElementById("input2").value);//get user third number  
    var userinput3 = parseInt(document.getElementById("input3").value);
    
    //display the result of the calculation
    document.getElementById("demo2").innerHTML = (userinput1 + userinput2)*userinput3;
    
    document.getElementById("demo3").innerHTML = userinput1 + userinput2 + userinput3;
    
}