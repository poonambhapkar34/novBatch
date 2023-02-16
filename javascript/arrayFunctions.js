//forEach(para,index,array) loop

let number = [10,20,30,40,50,60];
let number2 = []
number.forEach(ele => {
    number2.push(ele);
})
console.log(number2);

function test(){
    let result = 20 + 30;
    return result;
    //let a =30; unreachable code block;

}
console.log(test());

function add(a,b){
    return a+b;
}
console.log(add(30,60));

var add1 = (a,b)=>{
    return a+b;
}
var add3 = ()=>{
    return 20 + 60;
}
console.log(add3());

var add2 = (a,b)=>a+b;

console.log(add2(30,30));

var emp = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
]

var age = emp.filter(ele => {
   return ele.age >=50
})
console.log('age',age);