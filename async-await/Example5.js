async function test() {
  return "func1";
}

async function disp() {
  return "func2";
}

async function good() {
  try {
    let one = await test();
    let two = await disp();
    return { one, two };
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  let g = await good();
  console.log(g);
}
main();
