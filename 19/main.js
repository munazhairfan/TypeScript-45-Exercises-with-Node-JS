var guests = ["Areej", "Dua", "Fariha", "Javeria", "Palwasha", "Hafsa"];
console.log("".concat(guests[1], " and ").concat(guests[2], " can't make it tomorrow!"));
guests.splice(1, 2, "Yusra", "Iqra");
var invitation = guests.forEach(function (element) { return console.log("Hi ".concat(element, "! Would you like a dinner with me tomorrow?")); });
//19
//PRINTING THE NUMBER OF PEOPLE WE ARE INVITING
var NoOfGuests = guests.length;
console.log("No: of Guests are ", NoOfGuests);
