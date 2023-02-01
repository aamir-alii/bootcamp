const operands = document.getElementsByClassName("operands");
const operators = document.getElementsByClassName("operator");
const result = document.getElementById("result");


let value;
let operator;

for(elem of operands) {
    elem.addEventListener('click', e => {
        value = parseInt(e.target.innerText);
        const val1 = document.getElementById("val1");
        const val2 = document.getElementById("val2");
        result.value = "";
        if(!operator){
            val1.value += value;
        }else{
            val2.value += value;
        }
        // console.log(value)
    })
}
for(let elem of operators) {
    elem.addEventListener('click', e => {
        operator = e.target.innerText;
        // console.log(operator)
    })
}

const solve = () => {
    const val1 = parseInt(document.getElementById("val1").value);
    const val2 = parseInt(document.getElementById("val2").value);
    let res = "";
        switch(operator){
            case '/':
                res = val1/val2;
                break;
            case 'x':
                res = val1*val2;
                break;
            case '+':
                res = val1+val2;
                break;
            case '-':
                res = val1-val2;
                break;
            default:
                res = "";

        }
        result.value = res;
        if(res) {
            document.getElementById("val1").value = "";
            document.getElementById("val2").value = "";
        }
}
