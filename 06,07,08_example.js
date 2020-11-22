// 06,07,08 example code

function a() {
    const aVariable = 'Hi';
}

function b() {
    a();
    console.log(aVariable);
}

// b();

let myFunc = {
    x: function() {
        console.log('hello');
    }
};

myFunc.x(); //hello

(function(){
    console.log('즉시 실행');
 })();

 (function(){
    console.log('즉시 실행');
 }());

 //const ex = if(true){}

function abc() {
    const hello = 'hello';
    console.log(hello);
}

abc()
console.log(hello);

let a = 1;
function abc() {
    console.log(a);
}
console.log(a);
abc();

let number = 2;

function a() {
    let number = 10;
    b();
}
function b() {
    console.log(number);
}

a(); // ?
b(); // ?

function outer() {
    let x  = 1;

    function inner() {
        let y = 2;
        console.log(x+y);
    }

    inner();
}
outer();

function foo () {return 1, 2, 3, 4};
console.log(foo()) //4