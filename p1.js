function clearScreen(){
    document.getElementById("result").value="";
}

function calculate(){
    var d=document.getElementById("result").value;
    var p=eval(d);
    document.getElementById("result").value=p;
}
function display(value)
{
    document.getElementById("result").value+=value;
}