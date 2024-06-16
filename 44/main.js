function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nThe prepared sandwich have ".concat(items, ".\n"));
    console.log("Enjoy Your Sandwich!!");
}
;
sandwich("chicken patty", "Tomato", "cheese");
sandwich("Cabbage", "Olives", "Eggs");
sandwich("Beef Patty", "Mustard sauce", "Cucumber");
