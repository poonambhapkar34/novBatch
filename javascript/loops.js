// for (statement; condition; increament) {
//   //code block
    //break if u want to 
// }

let list = ['red','white','black','blue','yellow'];
var newList = [];
for(let i = 0 ; i < list.length ; i++ ){ //5<=5 i++ = i =i+1
    newList.push(list[i]);  //list[0]
    
}
console.log('newList-->',newList);

let newList2 = [];
for(let i = 0 ; i < 3; i++ ){ //5<=5 i++ = i =i+1
    newList2.push(list[i]);  //list[0]
}
console.log('newList2-->',newList2);

let newList1 = [];
for(let i = 0 ; i < list.length ; i++ ){ //5<=5 i++ = i =i+1
    newList1.push(list[i]); 
   
    if(i==3){
    break; //jumps out from the loop
    }
    console.log('newList1-->',newList1); 
}

for(let j = 1 ; j<=10 ; j++){
    console.log(j);
    if(j == '5'){
        break;
    }
}
// let no = [1,2,3,4,5,6,7,8,9,10]
// for(let j = 0 ; j<no.length ; j++){
//     console.log(no[j]);
//     if(j == 4){
//         break;
//     }
// }

let list1 = ['red','white','black','blue','yellow','orange'];
let newList3= [];
for(let i = 0 ; i < list1.length ; i++ ){ //5<=5 i++ = i =i+1
   
    if(i==3){ 
      continue; //jumps in to the loop
    }
    newList3.push(list1[i]); 
    console.log('newList1-->',newList3); 
}