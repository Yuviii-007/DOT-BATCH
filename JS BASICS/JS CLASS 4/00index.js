function sum1(){
    let total = 0; 
    for(let value of arguments)
        total = total+value ;
    return total ;
}

let ans = sum1(1,2,3,4,5,6);
console.log(ans)


function sum(a,b){
    console.log(arguments);
    return a+b;
}

sum(5,4,6,4,2)


function sum2(a,b){
    return a+b;
}
console.log(sum2(5,8));
