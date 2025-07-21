const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }


const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total); // Output: 15
