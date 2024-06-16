//CREATING OPTIONAL FEATURES IN A FUNCTION
function car(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var Car = {
        manufacturerOfCar: manufacturer,
        modelOfcar: model_name,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        Car[Key.trim()] = value.trim();
    });
    return Car;
}
;
var one = car("Daimler AG", "S-Class");
var two = car("Sant'Agata", "Aventador", "color:Golden", "price:66000000");
var three = car("Volkswagen", "718 Boxter", "automatic_mode:true", "year:1996");
console.log(one, "\n", two, "\n", three);
