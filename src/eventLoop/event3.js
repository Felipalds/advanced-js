for (let i = 0; i < 2; i++) {
  queueMicrotask(() => {
    console.log("Microtask")
  })
}

for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log("Task")
  }, 0)
}

for (let i = 0; i < 2; i++) {
  console.log("Call stack") 
}
