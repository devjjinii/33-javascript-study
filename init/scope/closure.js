var list = document.querySelectorAll("li")
for(let i=0; i<list.length; i++) {  // var -> let
    list[i].addEventListener("click", function() {
        console.log( i + "번째 리스트 입니다.")
    })
}

//var -> 5번째 리스트입니다....5번째 리스트입니다...
//let -> 1번째 리스트입니다...2번째 리스트입니다...