document.addEventListener('click', function(){
    console.log('i click here')
});




// the Event object


const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event)              //yaha event likhna jarur nahi hai vahi likha jayega jo function ke undr likha hoga
})



//The Default Action

let links = document.querySelectorAll('a');           //sare link nikalne ka trika

let thirdlink = links[2];                 //third link nikalne ka trika

thirdlink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('maza Aaya');
})