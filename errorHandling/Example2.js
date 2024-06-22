let jsonString = '{ "age": "24" }';

try {
  let user = JSON.parse(jsonString);
  if (!user.name) {
    throw new SyntaxError("Incomplete Data: no name");
  }
  console.log(user.name);
} catch (err) {
  console.log("JSON Error: " + err.message); // Logs the error message
}
