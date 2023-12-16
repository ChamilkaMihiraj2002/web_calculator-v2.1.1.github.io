let assign_number = "";
let number_1 = 0, number_2 = 0,auto_memory = 0,operator;

function assign (re_value) {
    assign_number = assign_number + re_value;
}

function number_01_btn () {
    let num_01 = document.getElementById("num_1").value;
    assign(num_01);
    display(assign_number);
}

function number_02_btn () {
    let num_02 = document.getElementById("num_2").value;
    assign(num_02);
    display(assign_number);
}

function number_03_btn () {
    let num_03 = document.getElementById("num_3").value;
    assign(num_03);
    display(assign_number);
}

function number_04_btn () {
    let num_04 = document.getElementById("num_4").value;
    assign(num_04);
    display(assign_number);
}

function number_05_btn () {
    let num_05 = document.getElementById("num_5").value;
    assign(num_05);
    display(assign_number);
}

function number_06_btn () {
    let num_06 = document.getElementById("num_6").value;
    assign(num_06);
    display(assign_number);
}

function number_07_btn () {
    let num_07 = document.getElementById("num_7").value;
    assign(num_07);
    display(assign_number);
}

function number_08_btn () {
    let num_08 = document.getElementById("num_8").value;
    assign(num_08);
    display(assign_number);
}

function number_09_btn () {
    let num_09 = document.getElementById("num_9").value;
    assign(num_09);
    display(assign_number);
}

function number_0_btn () {
    let num_00 = document.getElementById("num_0").value;
    assign(num_00);
    display(assign_number);
}

function add_button () {
    number_1 = parseInt(assign_number);
    assign_number = "";
    operator = "+";
    display(operator);
}

function sub_button () {
    number_1 = parseFloat(assign_number);
    assign_number = "";
    operator = "-";
    display(operator);
}

function mul_button () {
    number_1 = parseFloat(assign_number);
    assign_number = "";
    operator = "x";
    display(operator);
}

function div_button () {
    number_1 = parseFloat(assign_number);
    assign_number = "";
    operator = "/";
    display(operator);
}

function cl_button () {
    number_1 = 0;
    number_2 = 0;
    assign_number = "";
    auto_memory = 0;
    display(0);
}

function addition(num1,num2) { return num1 + num2; }
function subtraction(num1,num2) { return num1 - num2; }
function Multiplication(num1,num2) { return num1 * num2;}
function Divison(num1,num2) {
    try {
        if (num2 === 0) {
            throw new_error = "Zero division";
        } else {
            return num1 / num2;
        }
    } catch (e) {
        alert(e);
        return 0;
    }
}

function selection (value_01,value_02,OP) {
    switch (OP) {
        case "+":
            return addition(value_01,value_02);
        case "-":
            return subtraction(value_01,value_02);
        case "x":
            return Multiplication(value_01,value_02);
        case "/":
            return Divison(value_01,value_02);
    }
}

function display (value) {
    let cal_dispaly = document.getElementById("dispaly");
    cal_dispaly.innerHTML = value;
}

function eq_button () {
    number_2 = parseFloat(assign_number);
    assign_number = "";
    let answer;

    if (auto_memory === 0) {
        answer = selection(number_1, number_2,operator);
    } else {
        answer = selection(auto_memory, number_2,operator);
    }
    auto_memory = answer;
    display(answer);
}