$(document).ready(function()    {
    var currentEntry = '0';
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    $('button').click(function(event){
        var buttonPressed = $(this).val();
        $('#porcentaje').click(function(){
            currentEntry = currentEntry / 100;
        });
        $('#raizCuadrada').click(function(){
            currentEntry = Math.sqrt(currentEntry);
        });
        $('#cuadrado').click(function(){
            currentEntry = Math.pow(currentEntry);
        });
        $('#unoX').click(function(){ 
            currentEntry = 1 / currentEntry;
        });
        $('#CE').click(function(){
            currentEntry = '0';
        });
        $('#C').click(function(){
            result = 0;    
            currentEntry = '0';
        });
        $('#borrar').click(function(){
            currentEntry = currentEntry.slice(0, -1);
        });
        $('#igual').click(function(){
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        });        

        if(esNumero(buttonPressed)){
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
        }else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        }
          
        updateScreen(currentEntry);

    });

    updateScreen = function(displayValue) {
        var displayValue = displayValue.toString();
        $('#operator').val(displayValue);
    };

    esNumero = function(value) { return !isNaN(value); }
    isOperator = function(value) {
        return value === '/' || value === '*' || value === '+' || value === '-';
    };
    
    operate = function(a, b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a, b, operation);
        if (operation === '+') return updateScreen(a + b);
        if (operation === '-') return updateScreen(a - b);
        if (operation === '*') return updateScreen(a * b);
        if (operation === '/') return updateScreen(a / b);
    }

});

