//CREATING ARRAY AS A PARAMETER OF AN ARRAY
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
};
let magicians_names=["Harry","Liam","Zain","Nail","Louis"];
show_magicians(magicians_names);