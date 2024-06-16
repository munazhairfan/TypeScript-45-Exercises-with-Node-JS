let guests = ["Areej","Dua","Fariha","Javeria","Palwasha","Hafsa"]

console.log(`${guests[1]} and ${guests[2]} can't make it tomorrow!`);

guests.splice(1,2,"Yusra","Iqra");
let invitation = guests.forEach(
    element => console.log(`Hi ${element}! Would you like a dinner with me tomorrow?`));

//19
//PRINTING THE NUMBER OF PEOPLE WE ARE INVITING
let NoOfGuests= guests.length;
console.log("No: of Guests are ", NoOfGuests);
