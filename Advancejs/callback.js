const person1 =(friend, fun)=>{
 console.log(`hey iam busy ,taking to ${friend}`);
 fun()
}

const person2=()=>{
    console.log(`hey your msg recieved`);
}

person1("pooja", person2);