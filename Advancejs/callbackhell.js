const getRollno=()=>{
setTimeout(()=>{
   console.log('api getting rollno')
   let  rollno=[1,2,3,4,5];
   console.log(rollno);
   
setTimeout((rolln)=> {
  const biodata={
    name: 'pooja',
    age: 20
  }
  console.log(`My role no is ${rolln},my name is ${biodata.name} and age is ${biodata.age}`);

setTimeout((name)=>{
biodata.gender='female'
console.log(`My role no is ${rolln},my name is ${biodata.name} and age is ${biodata.age} ,gender is ${biodata.gender}`);

},2000, biodata.name);


},2000, rollno[1]);


},2000);

}
getRollno();
