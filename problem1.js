const delayedGreeting = (name, delayTime) => {
    setTimeout(()=>{
        console.log(`Hello, ${name}`);
    }, delayTime)
}

delayedGreeting('Raja', 5000);