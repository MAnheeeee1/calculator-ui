

    

let operator = "+";
let num1 = 12;
let num2 = 3;









function add(num1, num2){
    let summa = num1 + num2;
    console.log(summa);
}
function minus(num1, num2){
    let differense = num1 - num2; 
    console.log(differense);
}
function mulitply(num1, num2){
    let produkt = num1 * num2;
    console.log(produkt);
}
function division(num1, num2){
    let kvot = num1 / num2;
    console.log(kvot);
}

function operate(num1, num2, operator){
    if(operator == "+"){
        add(num1,num2);
    }
    else if(operator == "-"){
        minus(num1,num2);
    }
    else if(operator == "*"){
        mulitply(num1, num2);
    }
    else if(operator == "/"){
        division(num1,num2);
    }
}

