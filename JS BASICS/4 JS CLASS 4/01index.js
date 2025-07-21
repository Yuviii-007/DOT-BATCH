//Rest Operator 

function sum(num, ...args) {
  console.log(num)
  console.log(args)
}

sum(1, 2, 3, 4, 5, 6)


function abc(a, b) {
  console.log('helo')
  return a + b;
}
console.log(abc(4, 5));

//default parameter
function intrest(p, r = 5, t) {
  return p * r * t / 100;

}
console.log(intrest(5, undefined, 6));



//getter 

let person = {
  fname: 'yuvraj',
  lname: 'vaishnav',

  get fullname() {
    return `${person.fname}          ${person.lname}`;
  },

  set fullname(value) {
    let part = value.split(' ');
    this.fname = part[0];
    this.lname = part[1];
  }
};

console.log(person.fullname);
person.fullname=`rahul kumar`;
console.log(person.fullname);