    console.log('before');
    const user= getUser(1);

    console.log(user);
    console.log('after');

     function getUser(id){
      setTimeout( ()=> {
        console.log('Reading user from db');
        return {id:id , name :'pooja'} 
      },2000);

      return 1;
    }


    // assume responce is coming form server
    const student = [
        {name: "pooja", subject: "js"},
       {name: "arti", subject: "java"},
       {name: "rahul", subject: "java&php"},

    ]

    
    function enrollStudent(student){
     setTimeout(function(){
        student.push(student);
     },3000);

    }


    function  getStudents(){
        setTimeout(function(){
            let str="";
            student.forEach(function(student){
              console.log(student) 
             
            
            });

         },5000); 
}
    