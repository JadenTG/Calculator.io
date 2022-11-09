const answer = document.getElementById("answer");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero")
const add = document.getElementById("add");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const subtract = document.getElementById("subtract")
const result= document.getElementById("result");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal")

var equation = "";

one.addEventListener('click', () => AddValue("1"))
two.addEventListener('click', () => AddValue("2"))
three.addEventListener('click', () => AddValue("3"))
four.addEventListener('click', () => AddValue("4"))
five.addEventListener('click', () => AddValue("5"))
six.addEventListener('click', () => AddValue("6"))
seven.addEventListener('click', () => AddValue("7"))
eight.addEventListener('click', () => AddValue("8"))
nine.addEventListener('click', () => AddValue("9"))
zero.addEventListener('click', () => AddValue("0"))

add.addEventListener('click', () => AddValue("+"))
multiply.addEventListener('click', () => AddValue("*"))
subtract.addEventListener('click', () => AddValue("-"))
divide.addEventListener('click', () => AddValue("/"))
decimal.addEventListener('click', () => AddValue("."))

result.addEventListener('click', Solve);
clear.addEventListener('click', () => SetValue(''));

function AddValue(value)
{
    equation += value;
    UpdateDisplay();
}

function SetValue(value)
{
    equation = value;
    UpdateDisplay(); 
}

function Solve()
{
    let result = eval(equation); 
    console.log(result);

    SetValue(result);
}

function UpdateDisplay()
{
    answer.textContent = equation;
}

