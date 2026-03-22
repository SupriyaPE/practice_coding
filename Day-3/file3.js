const nums = [1, 2, 3, 4, 5, 6];


const evens = nums.filter(num => num % 2 === 0);

console.log(evens);


const greater = nums.filter(num => num > 3);

console.log(greater); 




const users = [
    { name: "Priya", active: true },
    { name: "Shiva", active: false },
    { name: "Mamatha", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);