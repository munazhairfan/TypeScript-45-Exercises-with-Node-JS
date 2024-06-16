var personName = "munazha irfan";
// TO LOWERCASE
console.log(personName.toLowerCase());
// TO UPPERCASE
console.log(personName.toUpperCase());
// TO TITLECASE
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
