const elemets=['abc', 'aaa','hakak','uihd'];

console.log(elemets);
console.log(elemets[3]);
console.log('Lenght of Array:' +elemets.length);
 var lenght=elemets.length;

//find last value of Array

console.log(elemets[lenght-1]);

console.log(`we have ${lenght-1} Strings in array`);


const numbers=['one','two','three', 'four', 'five','six','seven'];
//numbers[1]='something';
//console.log(numbers); 


//shift method : removing first index value
console.log(numbers.shift());
console.log(numbers);


//unshift method : adding value at first index
numbers.unshift('something');
console.log(numbers);


//pop()
numbers.pop();
console.log(numbers.pop());
console.log(numbers);


//push

numbers.push('seven');
console.log(numbers);


//splice()

numbers.splice(2,2, 'something');