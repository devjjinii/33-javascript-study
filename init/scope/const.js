function home() {
    var HOME_NAME = 'my house';  //컨벤션 방법
    const homename = 'my house';  // var -> const
    // homename = 'your house';
    console.log(homename);
}

home();

// const : 기본으로 사용
// 변경이 될 수 있는 변수는 let 을 사용
// var는 사용하지 않는다.

function home() {
    const list = ["apple", "orange"];
    list.push("banana")
    console.log(list)
}
//const 를 사용하더라도 배열의 오브젝트 값을 변경하는 것은 가능.
home()

// immutable array 를 어떻게?
// 뒤로가기 , 앞으로가기
const list = ["apple", "orange"]
list2 = [].concat(list, "banana")
console.log(list2) // ["apple", "orange", "banana"]