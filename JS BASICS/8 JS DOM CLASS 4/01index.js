// .then method


let mypromise2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('hey i am inside promise') }, 5000);
    
    reject(1998);
});

mypromise2.then((value) => {console.log(value)});
console.log('pehla');



//.catch method

mypromise2.catch((error) => {console.log("therer is an error")} );