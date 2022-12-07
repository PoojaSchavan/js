//=== & ==

var myVar= ''
var myvar2= ''

console.log(myVar===myvar2);

let a= 'pooja'
let b ='pooja'

console.log(a===b);

//creating javascript object

let myObject={
 firstname: 'pooja',
 lastname :'chavan',
 add :'pune'
}

let myObject2={
    firstname: 'aerti',
    lastname :'chavan',
    add :'pune'
   }
console.log(myObject);
console.log(`welcome ${myObject.firstname} to this course `);


let changefirstname=function(object){
    console.log(object.firstname);

}
changefirstname(myObject2);