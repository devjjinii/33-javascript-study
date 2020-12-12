// object assign 메서드
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime)
    }
}

const previousObj = {
    name : "jinn",
    lastTime : "11:20"
}

// 새로운 값이 있으면 대체
const myHealth = Object.assign({}, previousObj, {
    "lastTime" : "12:30",
    "name" : "dev",
    "age" : 26
})

// const myHealth = Object.assign(Object.create(healthObj), {
//     name : "jin",
//     lastTime : "12:00"
// })

console.log("previousObj", myHealth)

// const myHealth = Object.create(healthObj);
// myHealth.healthTime = "12:00";
// myHealth.name = "jin"
// console.log(myHealth) // { healthTime: '12:00', name: 'jin' }