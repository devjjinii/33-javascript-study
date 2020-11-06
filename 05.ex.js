let log = console.log;

// strict
log(5 === 5); // true
log('hello world' === 'hellow world'); // false
log(true === true); // true

log(77 === '77'); // false
log('cat' === 'dog'); // false
log(false === 0); // false

// loose equality
log(77 == '77'); //true
log(false == 0) //true

// 6 falsy values
// false, 0, "", null, undefined, NAN

log(false == 0) // true
log(0 == "") // true
log("" == false) // true
log(null == null) // true

// NaN is not equivalent to anything
log(NaN == null); //false
log(NaN == undefined); //false
log(NaN == NaN); // false

log([] == "0"); // false
log([1,2,3] == 123); // false
// "1,2,3" -> NaN
log([123] == 123); // true
// "123" == 123

log(typeof 2); // "number"
log(typeof "2"); //"string"
log(2 == "2"); // true
log(2 === "2"); // false

log(typeof 0); // "number"
log(typeof false); // "boolean"
log(0 == false); // true
log(0 === false); // false