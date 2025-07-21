console.log("hello")
let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kiya hai ' + event.target.textContent)
    }
   
});

