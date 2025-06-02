let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    console.log('span pr click kiya hai ' + event.target.textContent)
});

