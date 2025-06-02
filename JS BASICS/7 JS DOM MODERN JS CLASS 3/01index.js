// Documnet Fragment

const t1 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1 ; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'this is my para no.' + i ; 
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);

const t2 = performance.now();
console.log('this took ' + (t2-t1) + 'time');