let mySet = new Set();
console.log(toString.call(mySet))

mySet.add("dev");
mySet.add("jin");
mySet.add("dev");

console.log(mySet.has("jin")) // true

mySet.forEach(function(v){
    console.log(v)
})

// mySet.delete("dev");  //jin
// 중복없이 모든 타입의 값