function hi() {
  console.log("Hello!");
  for (let c = 0; c < 100000; c++) {
    // console.log(c);
  }
  return new Promise(() => { });
}

function main() {
  console.log("World!");
}

hi().then(() => {
  console.log("Task is over");
});
main();
console.log("AAA");
