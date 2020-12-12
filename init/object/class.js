class Health {
    // this.name = name;
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }
    
    showHealth() {
        console.log("안녕하세요 " + this.name + " 님")
    }
}

const myHealth = new Health("jin")
// myHealth.showHealth();
console.log(toString.call(Health)) //[object Function]

// Health.prototype.showHealth = function() {
//     console.log(this.name + "님 안녕하세요")
// }

// const h = new Health("jin")
// h.showHealth()