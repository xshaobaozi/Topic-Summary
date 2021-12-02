Function.prototype.myCall = myCall;

function test(...args) {
  console.log(this.a, ...args);
}

test.call({ a: 1 }, 2, 3, 4);
function myCall(...args) {
    const fn = this;
    const obj = {};
    const sy = Symbol(null);
    obj[sy] = fn;
    obj[sy](...args);
    delete obj[sy];
}
