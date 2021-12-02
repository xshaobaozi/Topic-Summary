Function.prototype.myBind = myBind;

function test(...args) {
  console.log(this.a, ...args);
}

const bin = test.myBind({ a: 1 }, 1, 2, 3);
bin(3333);

function myBind(that, ...arg) {
  const fn = this;
  return function () {
    const args = [...arg, ...arguments];
    fn.call(that, ...args);
  };
}
