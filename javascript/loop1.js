//for of loop -- array iteration
let cars = ['i10','i20','swift','jaguar','audi'];
let carsNew = [];

for(var item of cars){
    carsNew.push(item)
    //console.log(item);
}
console.log(carsNew);
console.log(item); //let name = 'pooja'

//for in --obj iteration

let student = {
    name :'Raj',
    age : 25,
    city : 'pune',
    car : 'Audi'
}
console.log(student.car);
for(let i in student){
// console.log(objKey);
// if(objKey == 'car'){
//   let car =  student[objKey]
//   console.log(car);
// }
 console.log(student[i]);
}

let no = 20;

while(no > 10){
    no -- ; // if we are not giving inc or dcr then compiler will go in infinite loop
    console.log(no);
}

let a = 10;
do{
    a++
    console.log(a);
}
while(a < 15)