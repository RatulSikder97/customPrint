customPrint(7, "Hello, World!");

// custom print function definition
function customPrint(n, message) {
  console.log(Array(n + 1).join(message + "\n"));
}
