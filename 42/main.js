//CREATING ARRAY AS A PARAMETER OF A FUNCTION
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
//MODIFYING ARRAY
function make_great(magicians) {
    return magicians.map(function (element) { return "The great ".concat(element, "!"); });
}
;
var magicians_names = ["Harry", "Liam", "Zain", "Nail", "Louis"];
show_magicians(make_great(magicians_names));
