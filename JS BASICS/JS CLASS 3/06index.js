let number = [1,2,3,4,5,6,7,8,9]

let number2=number
number=[];             // that is not a good practice
console.log(number);
console.log(number2);



let number3 = [1,2,3,4,5,6,7,8,9]

let number4 = number3

//2nd Method
number3.length =0;
console.log(number3);
console.log(number4);


//3rd Method

let number5 = [1,2,3,4,5,6,7,8,9]

let number6 = number5;

number5.splice(0, number5.length)

console.log(number5)