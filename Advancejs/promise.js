
//executor function
//promise produce
const promise1= new Promise( (resolve, regect)=>{

setTimeout(()=>{
   let r_no=[1,3,4,5,6];
    resolve(r_no);
  // regect('Error while communicating')

},2000);
});


const getBiodata= (indexdata)=>{
     return new Promise((resolve, regect)=>{
     setTimeout((indexdata)=>{
   let biodata={
    name: 'pooja',
    age : 20
   }
    resolve(`my roleno is ${indexdata} .My name is ${biodata.name} and age is ${biodata.age}`)

     },2000,indexdata);

     });
}

promise1.then( (r_no)=>{
console.log(r_no);
return getBiodata(r_no[1]);

}).then((a) =>{ 
    console.log(a);
})

.catch((error)=>{
    console.log(error);
})

//promise all

const promise2 =new Promise( (resolve, regect)=>{

setTimeout(()=> resolve('promise2'),3000);

});

const promise3 =new Promise( (resolve,regect)=>{

    setTimeout(()=> resolve('promise3'),2000);
    
    });


    const promise4 =new Promise( (resolve,regect)=>{

        setTimeout(()=> regect('promise4'),3000);
        
        });

        // Promise.all([promise2,promise3,promise4]).then((value)=>    {
        //  console.log(value);
        // },()=>{
        //     console.log('Error');
        // });


        Promise.allSettled([promise2,promise3,promise4]).then((value)=>    {
            console.log(value);
           },()=>{
               console.log('Error');
           });