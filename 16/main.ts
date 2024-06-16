let guests = ["Areej","Dua","Fariha","Javeria","Palwasha","Hafsa"]

console.log(`${guests[1]} and ${guests[2]} can't make it tomorrow!`);

guests.splice(1,2,"Yusra","Iqra");

//INVITING MORE PEOPLE BECAUSE I FOUND A BIGGER TABLE
console.log("Aoa guys! I found a bigger table so I am inviting few more guests")
//ADDING A GUESTS AT THE START
guests.unshift("Laiba");
//ADDING A GUEST IN THE MIDDLE
let middleofArray = (guests.length / 2);
guests.splice(middleofArray,0,"Ayesha");
//ADDING A GUEST AT THE END
guests.push("Maryam");
//INVITATION
let invitation = guests.forEach(
    element => console.log(`Hi ${element}! Would you like a dinner with me tomorrow?`));