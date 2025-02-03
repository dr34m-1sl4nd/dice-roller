function rollD6() {
    // randomly generates number 1-6
    return Math.floor(Math.random() * 6);
}

for (let i = 0; i < 5; i++) console.log(rollD6());