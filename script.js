exp="";
function appendNumber(number){
    exp+=number;
    updateDisplay();
}
function appendOperator(operator){
    exp+=operator;
    updateDisplay();
}
function clear(){
    exp="";
    updateDisplay();
}
function backspace(){
    exp=exp.slice(0,-1);
    updateDisplay();
}
function calculate(){
    try{
        const ans= eval(exp);
        exp=ans.toString();
    }
    catch(error){
        exp='Error!!!'
    }
    updateDisplay();
}
function updateDisplay(){
    const results=document.getElementById("ans");
    results.value= exp;
}