//CREATING ARRAY AS A PARAMETER OF A FUNCTION
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    })};
//MODIFYING ARRAY

    function make_great(magicians:string[]){
       return magicians.map(element => `The great ${element}!`)
        };
let magicians_names=["Harry","Liam","Zain","Nail","Louis"];
show_magicians(make_great(magicians_names));
