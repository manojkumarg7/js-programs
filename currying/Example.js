function test() {
  return function () {
    return function () {
      return "helllo";
    };
  };
}

var a = test();
var b = a();
console.log(b());
