//promise

let mypromise = new Promise(function(resolve , reject){
    console.log('hey i am inside promise')
    resolve(1998);
})

console.log('first');


//promise-

let mypromise2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('hey i am inside promise') }, 5000);
    
    resolve(1998);
});

console.log('pehla');


let p  = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Dusra promise') }, 3000);
    
    resolve(1998);
});

console.log('pehla');


