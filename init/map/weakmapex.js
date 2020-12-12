// 전역 weakmap
const wm = new WeakMap();

// function Area(height, width) {
//     this.height = height;
//     this.width = width;
// }

function Area(height, width) {
    wm.set(this, {height, width})
}

// Area.prototype.getArea = function() {
//     return this.height * this.width;  
// }

Area.prototype.getArea = function() {
    const { height, width} = wm.get(this);
    return height * width ;
}

let myarea = new Area(10,20);
console.log(myarea.getArea()) // 200
console.log(myarea.height) // undefined

console.log(wm.has(myarea)) //true

myarea = null;

console.log(wm)
console.log(wm.has(myarea)) //false
