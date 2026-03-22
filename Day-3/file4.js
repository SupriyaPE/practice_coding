const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 


const max = nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, nums[0]);

console.log(max); 





const cart = [
    { item: "Lipstick", price: 500 },
    { item: "Perfume", price: 1500 },
    { item: "Cream", price: 700 }
];

const total = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(total); 