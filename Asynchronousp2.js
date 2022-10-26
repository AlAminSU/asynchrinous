//7.promise utility
function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("after 2 second");
      resolve(1);
    }, 2000);
  });
}
one()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise Result Already got");
  });

// another way to call the promise
// const p1 = Promise.resolve(1);
// p1.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// promise-all and race
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject(3);

Promise.all([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.race([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//8.Async awai
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("after 2 second");
      resolve(2);
    }, 2000);
  });
}

function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("after 2 second");
      resolve(3);
    }, 2000);
  });
}

async function run() {
  try {
    const out2 = await two();
    const out3 = await three();
    return [out2, out3];
  } catch (error) {
    return error;
  }
}

(async function () {
  console.log(await run());
})();

//9.Avoid nested promise
function four() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("after 2 second");
      resolve(4);
    }, 2000);
  });
}

function five(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("after 2 second");
      resolve(number + 5);
    }, 2000);
  });
}

let result = [];
four()
  .then((num1) => {
    console.log(num1);
    result.push(num1);
    return five(num1);
  })
  .then((num2) => {
    result.push(num2);
    //console.log(num1 + num2);
    console.log(num2);
  })
  .catch((error) => {
    console.log(error);
  });

//10.Exercise.
