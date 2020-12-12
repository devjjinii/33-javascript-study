/**
 * filter, includes, from 을 사용해서 문자열 'e'
 * 가 포함된 노드로 구성된 배열을 만들어서 반환
 */

function print() {
    let list = document.querySelectorAll('li')
    console.log(toString.call(list)) // [object NodeList]
    let listArray = Array.from(list) // [object Array]
    
    let eArray = listArray.filter(function(v) { // v-> node
        return v.innerText.includes("e")
    })
    console.log(eArray.length) 
    return eArray;
}


