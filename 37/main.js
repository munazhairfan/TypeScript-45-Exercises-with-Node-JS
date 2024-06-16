//SETTING DEFAULT MESSAGES IN A FUNCTION
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " \nand The message that will be printed on the shirt will be \"").concat(message, "\""));
}
;
make_shirt();
make_shirt("Medium");
make_shirt("small", "keep swimming");
