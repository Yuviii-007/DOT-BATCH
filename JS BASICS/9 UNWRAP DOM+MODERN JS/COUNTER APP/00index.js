const countValue = document.querySelector('#counter');

const increment = () => {
    let Value  = parseInt(countValue.innerText);

    Value = Value + 1; 

    countValue.innerText = Value ;
}


//bina Arrow function ke bhi kiya ja skta hai 

function decrement(){
    let Value = parseInt(countValue.innerText);

    Value = Value - 1 ; 

    countValue.innerText = Value ;
}