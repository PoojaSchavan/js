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
    
    // promise1.then( (r_no)=>{
    // console.log(r_no);
    // return getBiodata(r_no[1]);
    
    // }).then((a) =>{ 
    //     console.log(a);
    // })
    
    // .catch((error)=>{
    //     console.log(error);
    // })
    

async function getData(){

    try{

        const rollnodata=  await promise1;
        console.log(rollnodata);
          const bio= await getBiodata(rollnodata[1]);
          console.log(bio);

    }
    catch(error){
  console.log(`Error is: ${error}`);
    }


}

getData();
