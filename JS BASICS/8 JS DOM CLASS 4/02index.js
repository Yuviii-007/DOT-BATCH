let wada1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('1');
    }, 2000);
    resolve(true)
})

let output = wada1.then(() => {
    let wada2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('2')
        }, 3000);
        resolve("wada 2 resolve ");
    })
    return wada2
})
output.then((value) => console.log(value));