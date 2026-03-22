const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); 


const max = nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, nums[0]);

console.log(max); 