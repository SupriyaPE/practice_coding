function add(a, b) {
    return a + b;
}


const addLambda = (a, b) => a + b;

console.log(add(2, 3));      
console.log(addLambda(2, 3));  


const square = x => x * x;
console.log(square(5)); 


const greet = () => "Hello Priya";
console.log(greet());