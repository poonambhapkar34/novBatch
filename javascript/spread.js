//... spred operator: to copy all or part of an
// existing array or object into another array or obj .
let cars = ['i10','i20','swift','jaguar','audi'];

let newCars = [...cars] //[...original_array_name]
console.log(newCars);

//copy some part of an array :
//let firstItem
//let [firstItem, secondItem , ...remainingItem] = ['i10','i20','swift','jaguar','audi'];
 let [firstItem, secondItem , ...remainingItem] = cars;

console.log(firstItem);
console.log(secondItem);
console.log(remainingItem);

let color1  = ['red','white','black','blue','','orange'];
let color2  = ['red','white','black'];
let color3 = [...color2, ...color1 , 'purple','yellow'];
console.log(color3);

let student = {
    name :'Raj',
    age : 25,
    city : 'pune',
    car : 'Audi'
}
let student2 = {...student};
console.log(student2);

let student3 = {
    name :'Raj',
    age : 25,
    city : 'pune',
    car : 'Audi'
}
let  student4 = {
    name :'Roy',
    ageOfStudent : 25,
    city : 'mumbai',
    car : 'Audi',
    carPrice: 300000
}

let student5 = {...student4, ...student3};
console.log(student5);