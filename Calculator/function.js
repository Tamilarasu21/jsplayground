function disPlay(key)
{
    document.getElementById("screen").value+=key;
}
function calculate()
{
    var a=document.getElementById("screen").value;
    var b=eval(a);
    document.getElementById("screen").value=b;
}
function disableKeyboard()
{
    document.onkeydown=function (e){
        return false;
    }
}
function deleteDigit()
{
    var val = document.getElementById("screen").value;
    if(val.length > 0){
    val = val.substring(0, val.length - 1);
    document.getElementById("screen").value = val;
    }
}