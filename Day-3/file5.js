const nums = [1,2,3,4,5,6];

const result = nums
    .filter(n => n % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result); 