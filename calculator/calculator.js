let screen= document.querySelector('#screen');
let results = document.querySelector('#result');
let curentNumber ='';
let prevousNumber = '';
let operator = '';

function clearNumber() {
    screen.value='';
results .value='';
curentNumber ='';
prevousNumber='';
operator='';
}

function delNumber(){
    currentNumber = curentNumber.substring(0,curentNumber.length - 1);
    dispaly();
}

function appendNumber(num){
    curentNumber +=  num;
    dispaly();
}

function appendOperator(op){
    if(curentNumber == ''){
        return;
    }
    operator = op;
    screen.value = curentNumber + " "+operator;
    prevousNumber = curentNumber;
    curentNumber= '';
}

function calculaterResult(){
    let result;
    const prev = parseFloat(prevousNumber);
    const current = parseFloat(curentNumber);

    if(isNaN(prev) || isNaN(current)){
        if(operator === '%'){
            result = prev / 100;
            results.value = result;
        }
        return;
    }

    switch(operator){
        case '+':
            result = prev + current;
            break;
            case '-':
                result = prev - current;
                break;
                case '/':
                    if(curentNumber == 0) return screen.value= 'Error';
            result = prev / current;
            break;
            case '*':
            result = prev * current;
            break;
            case '%':
                if(prev){
                    result = prev / 100;
                }
                else{
            result = prev + current;
        }
            break;
            default:
                return;
    }
    dispaly();
    operator = '';
    prevousNumber = '';
    results.value = result;
}

function dispaly(){
    screen.value = prevousNumber+' '+ operator +' '+ curentNumber;
}