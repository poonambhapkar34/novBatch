//forEach(para,index,array) loop

let number = [10,20,30,40,50,60];
let number2 = [];
number.forEach(ele => {
    if (ele != 40) {
        number2.push(ele);
    }

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
//var add5 = ()=>20=30;
console.log(add2(30,30));

var emp = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
]

var empData = emp.filter(element => {
   return element.age >=50 && element.sal == 30000;
})
console.log('empData',empData);

function test(){
    let i = 30 ;
    return ++i;
}

var valueOfI =  test();

console.log('valueOfI',valueOfI);

var empName = emp.map(item=> {
    return item.name;
});

var zeroIndevValue ;
 emp.map((item,ind)=>{
  if(ind == 0){
    zeroIndevValue = item;
  }
 
})
console.log(zeroIndevValue);
let chars = ['A','P', 'B','C','T','A','B','D','C']
var newCars =  chars.filter((item, index) =>{
  return  chars.lastIndexOf(item) === index
} )
console.log("chars---",newCars);
var empNew = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
]

let y = empNew.map(({name,age})=>({name,age}))
console.log('y',y);
// empNew.map(item=> {
//     emp_Name_age.name = item.name;
//     emp_Name_age.age = item.age;
// })
// console.log("emp_Name_age",emp_Name_age)
// console.log("empName--",empName);
var emp_Name_age = Object.keys(empNew).map(item=>{
    console.log(item);
    return  empNew[item] 
})
console.log("emp_Name_age",emp_Name_age)

let a = 'i like mango i live in mumbai mango mumbai live'// assigment : remove duplicate words from string

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];

  var arrNew =  [...new Set(arr)];
console.log(arrNew)

function display() { 
    if(true){
        var a = 10;
        var b = 10;
        var y=x=50;
        let d;
        var z = x;
        var t = d;
    }
   console.log(a , b ,x, y,z,t);
 } 
display();