// Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.
//anonumous function
var userName = function (name) {
    return name;
};
console.log(userName("Mahira"));
//Normal function
function userName1(name) {
    return name;
}
console.log("Mahira");
