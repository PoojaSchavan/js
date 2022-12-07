//pass by value

let a=8;
let b=a;
b=b+2;

console.log(a);
console.log(b);

//pass by referance
//refer same memory
// if we try to change value to of one object , other object value also changed
 const obj={
user : "pooja",
pass:"password "
 }
 const obj2=obj;
 
 obj2.pass= "abc";

 console.log(obj);
 console.log(obj2);


 const myName =()=>{
    return "Hellow !!"
 }


 const greetings =(sayHi,name)=>{

    console.log(sayHi(), name);
 }

 greetings(myName, "pooja");



 //returning function

 function test1(){
    return function b(){
        console.log('thankj u');
    }
 }
 test1()();
 