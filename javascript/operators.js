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
// &&	logical and l T && r T = T 1*1 =1
// ||	logical or  L F || R F = F 0*0=0
// !	logical not
var num1 = null;
var num2 = 50;
if(num1 > 80 && num2 < 80){
console.log('ANDDDD');
}

if(num1 >= 80 || num2 <= 80){ 
    console.log('ORRRRRRRR');
}
if(num2 == 50 && num1 == undefined  ){
console.log('!!!!!!!!!!!!!!!111');
}
//= == === difference 

var myRank = '2' //Assigment operator used to assign value to the variable
var samRank = 2

//equality operator
if (myRank == samRank) {  // equality operator it will compare only value of variables
    console.log('equality operator');
}

if (myRank === samRank) { //it will compare value as well as data type of variable
    console.log('equality operator');
}
if(myRank !== samRank ){
console.log('!== condition');
}
//? ternory operator :
//condition-->(true)? true : false;
let city = 50;

if(city === 50){
console.log('I live in mumbai');
}else{
console.log('i live pune');
}

city === 50 ? console.log('I live in mumbai') : console.log('i live pune');