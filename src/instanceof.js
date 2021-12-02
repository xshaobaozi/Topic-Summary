function test() {};
function b() {};


console.log(myInstanceof(new test, test))
console.log(myInstanceof(new test, b))

function myInstanceof(L, R) {
  let l_prop = L.__proto__;
  let r_prop = R.prototype;
  while (true) {
    if (l_prop === null) {
      return false;
    }
    if (l_prop === r_prop) {
      return true;
    }
    l_prop = l_prop.__proto__;
  }
}
