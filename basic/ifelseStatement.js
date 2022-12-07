// if (true) {
//     console.log('inside if block');
    
// } else if(true){
//     console.log('inside ifelse block');
// }


// else {
//     console.log('not in  if block');    
// }


var whoishere ='user';

if(whoishere=='user'){
console.log('welcome');
}
else if(whoishere=='techer'){
console.log('teacher');
}

else{
    console.log('please verify email'); 
}

//logical operator


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are 200rs');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are 300rs');
  
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// while loop
let n = 0;

while (n < 3) {
  n++;
}

console.log('while loop!!!'+n);


//do - while loop in javaScripts

// program to display numbers
let i = 1;
const num = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= num);