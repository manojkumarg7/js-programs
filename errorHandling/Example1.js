try {
  console.log("start of try runs");
  unicycle;
  console.log("End of try runs never reached");
} catch (err) {
  console.log("Error has occured " + err.stack);
} finally {
  console.log("always runs");
}
console.log("Then theExecution Continue");
