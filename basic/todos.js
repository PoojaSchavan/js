let myTodos= {
    day: 'Monday',
    meetings: 1,
    meetDone: 0

}


let addMeeting= function(todo, meet=0){
todo.meetings= todo.meetings+ meet;

}

addMeeting(myTodos, 2);

let meetDone =function(todo, meet=0){

    todo.meetDone =  todo.meetDone+ meet;

}

let resetDay= function(todo){
tod0.meetings=0
todo.meetDone=0
}

let summuryodDay= function(todo){
let meetLeft= todo.meetings-todo.meetDone;
return `you have ${meetLeft} meetings todday`


}

addMeeting(myTodos,4)

addMeeting(myTodos,3);

meetDone(myTodos,5)

console.log(summuryodDay(myTodos));
