console.log("Start");

setTimeout(()=>{ 
    console.log("T1");
},0);

Promise.resolve().then(()=>{
    console.log("Promise-1"); 
})

Promise.resolve().then(()=>{
    console.log("Promise-2"); 
})

setTimeout(()=>{ 
    console.log("T2");
},0);

console.log("End");