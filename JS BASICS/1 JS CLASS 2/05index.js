//For-in  Loop

let rectangle ={
    length :4, 
    breath :5 
}

for(let key in rectangle){
    console.log(key, rectangle[key]) ;
}

//example of For-of Loop

for(let key of Object.keys(rectangle)) {
    console.log(key);
}

for(let key of Object.entries(rectangle)) {
    console.log(key);
}


if('color' in rectangle){
    console.log('Present') ;
}

else{
    console.log('Absent') ;
}