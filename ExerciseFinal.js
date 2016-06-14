var event1 = document.getElementById("button1");
event1.addEventListener('click',compare,false);

function compare(){

var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value);    
    

if(userinput1 >= 10){
    document.getElementById("demo").innerHTML = userinput1;
}else{
    document.getElementById("demo").innerHTML = ("");
};
if(userinput2 >=10){
    document.getElementById("demo2").innerHTML = userinput2;
}else{
    document.getElementById("demo2").innerHTML = ("");
}
}