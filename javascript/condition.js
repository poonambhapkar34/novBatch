//if condition syntax :
//if(condition){
//cond == true;
//}

var number = 60;
//if - else -condition
if(number < 30){
    console.log('number is greater');
}
else {
    console.log('number is smaller');
}
//else-if condition

if (number == 40) {
    console.log(number);
} 
else if (number == 60) {
    console.log(number);
} 
else if (number == 50) {
    console.log(number);
}
else {
    console.log('else block',number); //Bydefault it will execute if we cannot find any true condition
}

// if (number == 40) {
//     console.log(number);
// } 
// if (number == 60) {
//     console.log(number);
// }
// if (number == 50) {
//     console.log(number);
// }else{
//     console.log(number);  
// }

//switch-statement:
switch (number) {
    case  40 :
        let res = 50+ 60;
        console.log(res); 
        break;
    case  60:
        console.log(number); 
        break;
    case 50:
        console.log(number); 
    case 80:
        console.log(number); 
    

    default:
        console.log('default');
     break;
}