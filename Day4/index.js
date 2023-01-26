// function validate(e){
//     e.preventDefault();
//     const userName = document.querySelector("#userName").value;
//     const pass = document.querySelector("#pass").value;   
//     const res = document.querySelector("#error");
//     if(pass.length < 8){
//         res.innerText = "Password must be 8 charcter long!";
//     }else{
//         res.innerText = "";
//     }

// }
let operator;
let res;
const output = document.querySelector("#error")
let operators = document.querySelectorAll(".operation");
for (const oper of operators) {
    oper.addEventListener('click', event => {
        event.preventDefault();
        if(oper.value === "="){
            let inputOne = parseInt(document.querySelector("#input-one").value);
            let inputTwo = parseInt(document.querySelector("#input-two").value);
            switch(operator){
                case '+':
                    res = inputOne + inputTwo;
                    break;    
                case '-':
                    res = inputOne - inputTwo;
                    break;
                case '*':
                    res = inputOne * inputTwo;
                    break;
                case '/':
                    res = inputOne/inputTwo;
                    break;
                default:
                    res = "invalid operator";
            }
            output.innerText = res;
            document.querySelector("#input-one").value = '0';
            document.querySelector("#input-two").value = '0';

        }else{
            operator = oper.value;
        }
    })
}
