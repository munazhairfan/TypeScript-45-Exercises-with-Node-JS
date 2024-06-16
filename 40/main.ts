//CREATING OPTIONAL PARAMETER AND OBJECTS IN A FUNCTION
function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{
        Artist:string;
        Title:string;
        Tracks?:number;
    }={
        Artist:artist_name,
        Title:album_title,
    };
    if(tracks!==undefined){
        album.Tracks=tracks;
    };
    return album;
};

let one=make_album("UMAIR","ROCKSTAR WITHOUT A GUITAR 🎸");
let two=make_album("DILJIT DOSANJH","G.O.A.T 🐐");
let three=make_album("TALHA ANJUM","OPEN LETTER 📧",15);
console.log(one,"\n",two,"\n",three);