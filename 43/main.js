//CREATING AN ARRAY AS A PARAMETER OF A FUNCTION
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
//MODIFYING FUNCTION
function make_great(magicians) {
    return magicians.map(function (element) { return "The great ".concat(element, "!"); });
}
;
var magicians_names = ["Harry", "Liam", "Zain", "Nail", "Louis"];
//CREATING A COPY OF AN ARRAY
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
//PRINTING THE ORIGINAL AND COPIED FUNCTION
show_magicians(magicians_names);
show_magicians(copy_great_magicians);
