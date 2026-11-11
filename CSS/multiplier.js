function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let product = num1*num2;
    let answer = document.getElementById("answer");
    answer.textContent = product;
    
}