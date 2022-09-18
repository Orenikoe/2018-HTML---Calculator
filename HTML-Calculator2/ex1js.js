let number1 = document.getElementById('factor1');
let number2 = document.getElementById('factor2');
let result = document.getElementById('result');
let choose = document.getElementById('pick').value

function equal(){
    let choose = document.getElementById('pick').value
    
if (choose === 'add'){
    result.innerHTML = Number(number1.value) + Number(number2.value)
}else {
    result.innerHTML = number1.value - number2.value
}

}


