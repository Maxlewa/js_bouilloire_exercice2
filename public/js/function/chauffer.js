
chauffer = (temperature) => {
    while (temperature < 100) {
        setTimeout(move, 1000)
        return temperature + 20
    }
}

console.log(chauffer(temperature));

export {chauffer}