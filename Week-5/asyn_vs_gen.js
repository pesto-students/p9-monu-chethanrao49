function doTask1() {
  return Promise.resolve("resolved from doTask1").then((msg) => {
    setTimeout(() => {
      console.log(msg);
    }, 1000);
  });
}

function doTask2() {
  return Promise.reject(new Error("rejected from doTask2")).then(
    function () {},
    function (err) {
      setTimeout(() => {
        console.error(err.message);
      }, 2000);
    }
  );
}

function doTask3(msg) {
  return Promise.resolve(`resolved from doTask3 through ${msg}`).then((msg) => {
    setTimeout(() => {
      console.log(msg);
    }, 5000);
  });
}

async function asyncEx() {
  console.log("async/await example");
  await Promise.all([doTask1(), doTask2(), doTask3('async/await')]);
  console.log("async function ends");
}

function* genEx() {
  console.log("generator started");
  yield doTask1();
  yield doTask2();
  yield doTask3('generator');
  console.log("generator function ends");
}

asyncEx();

const gen = genEx();
gen.next();
gen.next();
gen.next();
