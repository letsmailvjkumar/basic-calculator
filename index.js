let output = document.getElementById('output');
let operator = document.querySelectorAll('.operator');

let currentOperator = null;
let currentValue = null;

operator.forEach(function(operator){
    operator.addEventListener('click', function(){
        let value=this.textContent;

        if(value === 'C'){
            output.innerText = "0";
             currentOperator = null;
             currentValue = null;
        }else if(value === '='){
            let result =calculate(currentValue, currentOperator, parseFloat(output.innerText));
            output.innerText=result;
            currentOperator = null;
             currentValue = null;
        }else if(['+','-','x','/'].includes(value)){
            currentOperator=value;
            currentValue=parseFloat(output.innerText);
            output.innerText='';
        }
        else{
            output.innerHTML+=value;
        }
    });
});
function calculate(a,operator,b){
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === 'x') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    }
}