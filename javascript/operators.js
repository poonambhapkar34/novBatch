//Assigment operators: 
//+=
var x = 50 ;
let y = 10
 //x = x + y;
 //x+=y
//x-=y
y = x - y;
console.log(y);
//postfix/prefix operate 
//note:
// variable_name ++ : postfix operator returns the variable value first then got increamented by 1
//++ variable_name  : prefix operator got increamented by 1 ,then returns the variable value
let value1 = 2;
console.log(value1);
console.log(value1++); //i = i + 1 / i = 0 + 1 
console.log(value1);
console.log(value1++);
console.log(value1);

let value2 = 3;
console.log(value2);
console.log(++value2); //j = j + 1
console.log(value2);

let value3 = 4;
console.log(value3);
console.log(value3--); //value3 = value - 1
console.log(value3);

let value4 = 4;
console.log(value4);
console.log(--value4); //value3 = value - 1
console.log(value4);

//logical operators:
// &&	logical and l T && r T = T
// ||	logical or
// !	logical not
var num1 = 20;
var num2 = 50;
if(num1 > 80 && num2 < 80){
console.log('kkkkkkkkkkkkk');
}