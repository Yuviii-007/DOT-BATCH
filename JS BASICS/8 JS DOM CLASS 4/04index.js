//Fetch API



async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}

utility();


//post method



async function helper() {


    let option = {
        method: 'POST',
        body: JSON.stringify({
            title: 'Yuvraj ',
            body: 'Lean',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    };

    let content1 = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let responce = content1.json();
    return responce ; 
}


async function utility2(){

    let ans =await helper();
    console.log(ans);
}


utility2();