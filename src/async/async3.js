// Asynchronous function without setTimeout
function fakeAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    // Replace this with your actual asynchronous logic
    const randomNumber = Math.random();

    // Simulate success or failure based on some condition
    if (randomNumber > 0.5) {
      resolve("Async Operation: Succeeded");
    } else {
      reject("Async Operation: Failed");
    }
  });
}

// Synchronous function
function syncOperation() {
  // Simulate a synchronous operation
  return "Sync Operation: Completed";
}

// Using the functions
console.log("Start of program");

fakeAsyncOperation()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

const syncResult = syncOperation();
console.log(syncResult);

console.log("End of program");
