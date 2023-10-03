setTimeout(() => {
  console.log("This function will appear 1 sec later")
}, 1000);

queueMicrotask(() => {
  console.log("2")
})
console.log("This will appear now!")
