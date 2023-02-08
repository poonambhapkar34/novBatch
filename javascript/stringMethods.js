var text = 'pooja       patil     ';
console.log(text.length);
console.log(text);
var carNames = 'Audi Jaguar 1111 tt444 Jaguar,mini Cupoj0sw mini ift jjjjjj mini jjjj ';
let res = carNames.slice(-5,-2);
console.log(carNames.substring(-1,5));//internally negative value will consider as 0
let text1 = "Hello world!";
let result = text1.substr(1, 4);
console.log(result);
console.log(carNames.replace(/1111/,'bmw'));
let carNames2 = carNames.replace(/Jaguar/g,'I20');
console.log(carNames2);

let lastName ='pAtil';
console.log(lastName.toUpperCase());
let copyWord = lastName.toLowerCase();
console.log(lastName.toLowerCase());

let firstName = 'poonam is living is in mumbai is';
let last_Name = 'patil';
let fullName = firstName + ' ' + last_Name;
console.log(fullName);
let fullName2 = last_Name.concat(firstName);
console.log(fullName2);

console.log(firstName.charAt(7));
console.log(firstName[7]);
console.log(firstName.indexOf('is'));
console.log(firstName.lastIndexOf('is'));
console.log(firstName.search(/is/));

var myName = '  poonam   ';
myName1 = myName.trim();
console.log(myName1);

var DOB = '10/10/2010';
let DOB1 = DOB.split("/");
console.log(DOB1);