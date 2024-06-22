let json = { age: "24" };

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete Data :no name");
  }
  console.log(user.name);
} catch (err) {
  console.log("Json Error : " + err); //name ,message ,stack
}
