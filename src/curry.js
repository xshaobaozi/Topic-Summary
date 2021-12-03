const add1 = curry(add);

console.log(add1(1)(3)(4)); // 8

function curry(fn, ...args) {
  const length = fn.length;
  if (args.length >= length) {
    return fn(...args);
  }
  return (..._args) => {
    return curry(fn, ...args, ..._args);
  };
}

function add(x, y, z) {
  return x + y + z;
}
