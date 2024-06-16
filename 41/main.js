//CREATING ARRAY AS A PARAMETER OF AN ARRAY
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
var magicians_names = ["Harry", "Liam", "Zain", "Nail", "Louis"];
show_magicians(magicians_names);
