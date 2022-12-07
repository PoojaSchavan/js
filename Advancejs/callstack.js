var a1="abc";

function a(){
    var fa="in the function a";
    console.log(fa);
    b();
    console.log('in function a !!!!');
}


function b(){
    console.log('in function !!!!!');
       c();
}
function c(){

    console.log('in the function c');
}


a();