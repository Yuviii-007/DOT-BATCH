let number = [1 ,3,5,7];

//searching or finding 


console.log(number.indexOf(7));

console.log(number.includes(7));


//ab hm search krenge ki koi number ,index number ke bad hai ya nahi

console.log(number.indexOf(3, 3))


if(number.indexOf(4)==-1){
    console.log('absent')
}
else{
    console.log('present')
}