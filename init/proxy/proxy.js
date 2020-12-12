const myObj = { name : 'jin'}
const proxy = new Proxy(myObj, {
    get : function(target, property, receiver) {
        console.log('get value')
        return target[property];
    },
    set : function(target, property, value) {
        console.log('change value')
        target[property] = value;
    }
})
// console.log(proxy === myObj) // false

proxy.name = "dev" //change value
proxy.name;
