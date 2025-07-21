//object cloning 

//1.iteration method 

let src ={
    a:8,
    b:4,
    c:6 
}

let dest ={} ;

for(let key in src){

    dest[key] = src[key] ;
    // console.log(dest) ;
}

console.log("This is dest " ,dest) ;



let dest4 = {...src};
console.log("this is dest 4" ,dest4)