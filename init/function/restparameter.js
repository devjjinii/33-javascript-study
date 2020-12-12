function checkNum(...argArray) {
    // const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray))
    const result = argArray.every((v) => typeof v === "number")
    console.log(result)
}

// const result = checkNum(10,2,3,4,5) // true
const result = checkNum(10,2,3,4,false) // false