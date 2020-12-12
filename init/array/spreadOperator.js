let pre = ["apple", "orange", 100]
let newData = [...pre] // 펼침연산자

console.log(pre, newData)

let pre = [100,200,"hello", null]
let newData = [0,1,2,3,...pre,4];
        //...pre : 100,200,"hello", null

        
function sum(a,b,c) {
    return a+b+c
}

let pre = [100,200,300]
// sum.apply(null, pre);
sum(...pre)