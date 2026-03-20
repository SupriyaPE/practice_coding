console.log("Start");

async function test() {
    console.log("Inside");

    await Promise.resolve();

    console.log("After await");
}

test();

console.log("End");