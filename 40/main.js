//CREATING OPTIONAL PARAMETER AND OBJECTS IN A FUNCTION
function make_album(artist_name, album_title, tracks) {
    var album = {
        Artist: artist_name,
        Title: album_title,
    };
    if (tracks !== undefined) {
        album.Tracks = tracks;
    }
    ;
    return album;
}
;
var one = make_album("UMAIR", "ROCKSTAR WITHOUT A GUITAR 🎸");
var two = make_album("DILJIT DOSANJH", "G.O.A.T 🐐");
var three = make_album("TALHA ANJUM", "OPEN LETTER 📧", 15);
console.log(one, "\n", two, "\n", three);
