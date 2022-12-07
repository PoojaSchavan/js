let sayHello=  function(){
    console.log('Hello');
}

sayHello();


let addition= function(no1, no2){
let added= no1+no2;
return added;
}
console.log(addition(2,4));
//default parameter
let getUser= function(name='uname' ,no=0){
return 'hello '+ name + 'and your roll no is:' + no

}

console.log(getUser('pooja',1));

//Arrow function
let add= (no1, no2)=>{
    let added= no1+no2;
    return added;
    }
    console.log(add(2,4));


    //arrow functiom
  const test=(studname)=>`hey ${studname}`

  console.log(test('pooja'));


  // synchronous
 const fun2 =()=>{
    console.log('fun2 is staring');
 }


  const fun1=()=>{
    console.log('fun1 is staring');
      fun2();
    console.log('fun2 is staring');
  }
  fun1();


  //Asynchronous code


  const test1 =()=>{
    setTimeout( ()=>{
        console.log('test1 is staring');
    },3000 );
}


  const test2=()=>{
    console.log('test2 is staring');
      test1();
    console.log('test2 is ending');
  }
  test2();
//  //Asynchronous code 2