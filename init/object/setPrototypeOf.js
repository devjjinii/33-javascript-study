// object assign 메서드
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime)
    },
    setHealth : function(newTime) {
        this.healthTime = newTime
    }
}

const healthChildObj = {
    getAge : function() {
        return this.age
    }
}

//const lastHealthObj =
Object.setPrototypeOf(healthChildObj, healthObj)

const childObj = Object.setPrototypeOf({
    age : 26
},healthChildObj)

childObj.setHealth("11:55")
childObj.showHealth()

console.log("childObj", childObj)

// const newobj = Object.setPrototypeOf({
//     name : "jin",
//     lastTime : "12:00"
// }, healthObj)

// console.log("newobj", newobj) //newobj { name: 'jin', lastTime: '12:00' }
