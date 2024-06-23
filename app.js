function test(callback) {
  console.log("func1");
  setTimeout(() => {
    callback(); // Call the callback function after some delay
  }, 3000); //
}

function disp() {
  console.log("func2");
  run();
}
function run() {
  console.log("func3");
  main();
}
function main() {
  console.log("func4");
}

test(disp);
