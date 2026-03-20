function delay() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done"), 1000);
    });
}

async function run() {
    console.log("Start");
    const res = await delay();
    console.log(res);
}

run();