//iterating an array 


let arr = [10,20,30,40,50]

for(let value of arr){
    console.log(value);
}

let arr2 = [1,2,3,4,0]

arr2.forEach(function(num){
    console.log(num);
})


//isi ko likhne ka ek dusra method 

arr.forEach(num => console.log(num));



//joining an array

let num = [10,20,30,40,50]
console.log(num)

const joined = num.join('...');
console.log(joined)

let string = 'this is my last message';
console.log(string) ;

let parts = string.split(' ')
console.log(parts);


let join = parts.join('_');
console.log(join);