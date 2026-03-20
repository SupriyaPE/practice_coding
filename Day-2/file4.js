function task(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, time);
    });
}

async function run() {
    await Promise.all([
        task("A", 1000),
        task("B", 500),
    ]);
}

run();