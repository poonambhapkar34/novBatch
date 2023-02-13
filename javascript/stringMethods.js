var text = 'pooja       patil     ';
console.log(text.length);
console.log(text);
var carNames = 'Audi-Jaguar  tt444 Jaguar,mini Cupoj0sw mini ift jjjjjj  mini jjjj ';
let res = carNames.slice(5,11);
console.log(res);
console.log(carNames.substring(-4,5));//internally negative value will consider as 0
let text1 = "Hello world!";
let result = text1.substr(1, 6);
console.log(result);
let res1=  carNames.replace(1111,'bmw')
console.log(res1);
let carNames2 = carNames.replace(/Jaguar1/g,'I20');
console.log(carNames2);

let lastName ='pAtil';
console.log(lastName.toUpperCase());
let copyWord = lastName.toLowerCase();
console.log(lastName.toLowerCase());

let firstName = 'poonam is living is in mumbai is';
let last_Name = 'patil';
let fullName = firstName + ' ' + last_Name;
console.log(fullName.length);
let fullName2 = last_Name.concat(' '+ firstName);
console.log(fullName2);

console.log(firstName.charAt(40));//beyond length it will return empty string
console.log(firstName[40]); //beyond length it will return undefined
console.log(firstName.indexOf('is')); // it will return  -1 if no match found
console.log(firstName.lastIndexOf('isu')); // it will return  -1 if no match found
console.log(firstName.search(/ist/));

var myName = '  poonam   ';
myName1 = myName.trim();
console.log(myName1);

var DOB = '10/10/2010';
let DOB1 = DOB.split("/");
console.log(DOB1);