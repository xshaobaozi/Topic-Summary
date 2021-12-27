const PEDDING = "PEDDING";
const SUCESS = "SUCESS";
const FAIL = "FAIL";

class MyPromise {
  constructor(excute) {
    this.value = undefined;
    this.status = PEDDING;
    this.success = [];
    const resolve = (val) => {
      if (this.status === PEDDING) {
        this.status = SUCESS;
        this.value = val;
        this.success.forEach((cb) => {
          this.value = cb(this.value);
        });
      }
    };

    const reject = (val) => {};

    excute(resolve, reject);
  }
  then(successcb, failcb) {
    const that = this;
    return new MyPromise((resolve, reject) => {
      const resultCb = () => {
        const result = successcb(that.value);
        return result instanceof MyPromise
          ? result.then(resolve, reject)
          : resolve(result);
      };
      if (that.status === SUCESS) {
        return resultCb();
      }
      if (this.status === PEDDING) {
        that.success.push(resultCb);
      }
    });
  }
}

// new MyPromise((resolve) => {
//   resolve(1 + 1);
// })
//   .then((val) => {
//     console.log("then 2", val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log("then 3", val);
//     return new MyPromise((resolve) => {
//       setTimeout(() => {
//         resolve(val + 1);
//       }, 3 * 1000);
//     });
//   })
//   .then((val) => {
//     console.log("then 4", val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log("then 5", val);
//   });

Promise.prototype.myRace = (arrs) => {
    return new Promise((resolve, reject) => {
        arrs.forEach(item => {
            item.then(resolve, reject)

        })
    })
}
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed");
  }, 100);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result, 1);
  })
  .catch((error) => {
    console.log(error, 2); // 打开的是 'failed'
  });
