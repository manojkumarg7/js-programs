function yak() {
  function test() {
    // return "Test";
    throw new Error("Error in test function Manoj");
  }

  function disp() {
    return "disp";
  }

  let a = Promise.all([test(), disp()]);
  return a;
}

async function main() {
  try {
    let y = await yak();
    console.log(y);
  } catch (err) {
    console.log("Error Manu : " + err.message);
  }
}

main();
