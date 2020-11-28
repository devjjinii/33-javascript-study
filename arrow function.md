##  Arrow Function (화살표 함수)
  * `정적` 바인딩
  * 익명 함수
  * 화살표 함수의 this 는 언제나 상위 스코프의 this를 가리킴. >> Lexical this
    * 화살표 함수의 this 바인딩 객체 결정 방식은 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프와 유사
  ```js
  function study(ment) {
    this.ment = ment;
  }

  study.prototype.array = function (arr) {
    return arr.map(x => `${this.ment} ${x}`)
  }

  const member = new study('Study Hard!!');
  console.log(member.array(['감동란','개밥','뇸뇸,','열공찐']))
  ```
  * 화살표 함수는 call, apply, bind 메소드를 사용하여 this를 변경할 수 없음.
  * 콜백 함수로 사용하기 편리