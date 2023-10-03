function a(){
  console.log("Second Log!")
  b()
}

function b(){
  console.log("Third Log!")
}

console.log("First Log!")
a()
