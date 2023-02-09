var arrayItem = [10,20,56,32,69,5000,8888,6666];
console.log(arrayItem.length);
let lastInd = arrayItem.length - 1;
console.log(lastInd);
//console.log(arrayItem.IndexOf('20')); not allowed with array
delete arrayItem[2];
let data = arrayItem[2];
console.log(typeof(data));
console.log(arrayItem);
console.log(arrayItem.toString());

let joinedArray = arrayItem.join(' ');
console.log(joinedArray);
//let popedArray = arrayItem.pop();
//console.log(popedArray);

console.log(arrayItem.pop());
console.log(arrayItem);
delete arrayItem[0];
console.log(arrayItem);
console.log(arrayItem.shift());
console.log(arrayItem);
arrayItem.push('200',203);
console.log(arrayItem);

arrayItem.unshift(566,'pooja');
console.log(arrayItem);
arrayItem[3] = 500;
console.log(arrayItem);