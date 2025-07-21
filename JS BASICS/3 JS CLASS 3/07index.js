let first = [1, 2, 3, 4]

let second = [5, 6, 7, 8]
//combining array  

let combine = first.concat(second);

console.log(combine);

//slicing an array 

let number = [1, 2, 3, 4, 5, 6, 7]


let slicing = number.slice(2, 6);   //yaha pr 2 starting index hai jabki 6 ending index hai na ki number jo remove krna hai ending index me vo number+1 krke dala jata hai jaha tk ka remove kna ho.
console.log(slicing)



//spread Operator  

let num1 = [1,2,3,4]
let num2 = [5,6,7,8]

let spread = [...num1 , ...num2];
console.log(spread)