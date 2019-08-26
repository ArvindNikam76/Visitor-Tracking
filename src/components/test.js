const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    reject(new Error("Error Condition"));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

Promise.race([p1, p2])
  .then(resolve => {
    console.log(resolve);
  })
  .catch(reject => {
    console.log("Error", reject);
  });
