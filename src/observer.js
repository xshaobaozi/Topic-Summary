const { ob, watch } = create();
const data = ob({ count: 0, foo: "test" });

watch(() => {
  console.log("watch-count", data.count);
});
watch(() => {
  console.log("watch-foo", data.foo);
});

delete data.count;
data.foo = "test2";
function create() {
  const cbs = [];
  const ob = (obj) => {
    return new Proxy(obj, {
      deleteProperty(target, key) {
          console.log(target, key)
          delete target[key]
          return true
      },
      set(target, property, value, receiver) {
        console.log(target, property, value);
        // cbs.forEach((item) => {
        //   typeof item === "function" && item();
        // });
      },
    });
  };
  const watch = (fn) => {
    cbs.push(fn);
  };
  return {
    ob,
    watch,
  };
}
