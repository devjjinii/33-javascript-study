var data = [1,2,undefined, NaN, null, ""]

Array.prototype.getIndex = function(){};

for(let value of data) {
    console.log(value)
}

var str = "hello"
for(let value of str) {
    console.log(value)
}
// for(var i=0; i<data.length; i++) {
//     data[i]
// }
// data.forEach(function(value) {
//     console.log(value)
// })
