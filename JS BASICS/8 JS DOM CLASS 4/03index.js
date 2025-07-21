// Async - Await function


async function abc() {
    return 7;
}

console.log(abc());



async function utility() {


    let delhiMausm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi me bhot garmi hai ")
        },
            5000);
    });

    let hydmau = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hyd is cool");
        }, 6000);

    });
    let dm = await delhiMausm;
    let hm = await hydmau;

    return [dm, hm];

}

console.log(utility())