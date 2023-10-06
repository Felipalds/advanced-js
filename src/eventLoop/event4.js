// Example 3: Simulating an event loop
const eventLoop = () => {
  setTimeout(() => {
    console.log("Event 1: Task completed");
    eventLoop(); // Continues the event loop
  }, 1000);
};

eventLoop(); // Start the event loop
console.log("Event 2: Main program continues");
