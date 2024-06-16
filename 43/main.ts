//CREATING AN ARRAY AS A PARAMETER OF A FUNCTION
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    })};
//MODIFYING FUNCTION
    function make_great(magicians:string[]){
       return magicians.map(element => `The great ${element}!`)
        };
let magicians_names=["Harry","Liam","Zain","Nail","Louis"];
//CREATING A COPY OF AN ARRAY
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
//PRINTING THE ORIGINAL AND COPIED FUNCTION
show_magicians(magicians_names);
show_magicians(copy_great_magicians);