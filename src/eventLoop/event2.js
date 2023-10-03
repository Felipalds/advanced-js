console.log(1)
// Blocking operation
// Call Stack

queueMicrotask(() => {
  // Non blocking operation
  // Web Api
  // Microtask
  console.log(2)
})

setTimeout(() => {
  // Non blocking operation
  // Web Api
  // Task
  console.log(3)
}, 0)



for(let c = 0; c < 10; c++){
  console.log(4)
}
// Blocking operation
// Call Stack

Promise.resolve(true).then(() => {
  // Non Blocking operation
  // Web Api
  // Microtask
  console.log(5)
})














