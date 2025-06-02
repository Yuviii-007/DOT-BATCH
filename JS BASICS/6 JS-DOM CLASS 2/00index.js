document.addEventListener('click', function(){
    console.log('i click here')
});

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event)
})
