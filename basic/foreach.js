const days=['mon','tue','wed','thursday','frieday', 'sat', 'sun'];

// let demo=function(){
//     console.log('Test');
// }
// days.forEach(function(){
//         console.log('Test');
//     } );

    //for loop

    for(let i=0;i<days.length;i++){
      const elemets= days[i];
    console.log(elemets);
    }


    //for of
    let name = "pooja";
let text = "";

for (let x of name) {
    text += x + " ";
}
console.log(text);


// break statment 
for (let i = 0; i < 10; i++) {
    if (i === 3) 
    { 
        break;
     }
    text += "The number is " + i ;
  }
console.log(text);


// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         continue; 
//     }
    
//     text += "The number is " + i ;
//   }

//   console.log(text);