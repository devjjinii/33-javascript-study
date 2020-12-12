// setTimeout( () =>  {
//     console.log("settimeout arrow")
// }, 1000)

//callback 함수
let newArr = [1,2,3,4,5].map( (v) => v * 2) ;
   
console.log("arrow newArr" , newArr)

// this context of Arrow function
const myObj = {
    runTimeout() {
        setTimeout(() =>  {
            this.printData();
        }, 200);  //.bind(this) 생략
    },
    printData() {
        console.log('hi')
    }
}
myObj.runTimeout();
