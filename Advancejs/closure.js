//closure and lexical scoping

// const outerfun= (a)=>{
//  let b=10;
//  const innerfun=()=>{
//     let sum=a+b;
//     console.log(`sum of elemet ${sum}`);
//  }
//  innerfun();

// }

// outerfun(4);


const outerfun= (a)=>{
    let b=10;
    const innerfun=()=>{
       let sum=a+b;
       console.log(`sum of elemet ${sum}`);
    }
  return innerfun;
   
   }
   
  let inner=  outerfun(4);
  console.dir(inner);