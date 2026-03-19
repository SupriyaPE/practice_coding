async function test() {
    console.log("1");

    setTimeout(()=>{ 
        console.log("2");
    },0);

    await Promise.resolve();

    console.log("3") 
}

console.log("4")

test();

console.log("5");