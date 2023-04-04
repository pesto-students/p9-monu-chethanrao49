const STATE = {
  REJECTED: "rejected",
  PENDING: "pending",
  FULFILLED: "fulfilled",
};

class CustomPromise {
  constructor(executionFun) {
    this.state = STATE.PENDING;
    this.promiseChain = [];
    this.handleError = (err) => {
      console.log("error", err);
    };

    // to bind resolve & reject function to current object because executionFun will be called from outside & in js the value of 'this' is based on from where the function is called but not from where it's initialized.
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    try {
      executionFun(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve = (value) => {
    if (this.state !== STATE.PENDING) return;
    let storedValue = value; //for multiple then statement as each time a new value will be sent that has to override previous then value.
    try {
      this.state = STATE.FULFILLED;
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue); // using storedValue & replace it with the next value in 'then' chain
        console.log("promise resolved");
      });
    } catch (error) {
      this.promiseChain = [];
      this.reject(error);
    }
  };

  reject = (error) => {
    if (this.state !== STATE.PENDING) return;
    this.state = STATE.REJECTED;
    this.handleError(error);
    console.log("promise rejected");
  };

  then(onSuccess) {
    if (this.state == STATE.PENDING) {
      this.promiseChain.push(onSuccess);
      return this;
    }
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  finally() {
    console.log("finally");
  }
}

const getNumber = (ms) => {
  return new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      num = Math.floor(Math.random() * 101);
      if (num % 5 == 0) {
        reject(Error(`${num} is divisible by 5`));
      } else {
        resolve(num);
      }
    }, ms);
  });
};

getNumber(5000)
  .then((num) => {
    console.log(num, "is not divisible by 5");
  })
  .catch((err) => {
    console.log("error", err);
  })
  .finally(() => {});
