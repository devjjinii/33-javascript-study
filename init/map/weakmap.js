// array -> set , object -> map
// map (key/value)

let wm = new WeakMap();
let myFun = function(){};

wm.set(myFun,0);
console.log(wm)

let count = 0;
for(let i=0; i<10; i++) {
    count = wm.get(myFun); // get value
    count ++;
    wm.set(myFun, count);
}

console.log(wm.get(myFun)); // 10

// 초기화
myFun = null;
console.log(wm.get(myFun))  // undefined
console.log(wm.has(myFun)) // false


