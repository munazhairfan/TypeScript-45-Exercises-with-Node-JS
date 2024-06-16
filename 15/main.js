//INVITING PEOPLE FOR DINNER
var guests = ["Areej", "Dua", "Fariha", "Javeria", "Palwasha", "Hafsa"];
//SOME PEOPLE CAN'T COME
console.log("".concat(guests[1], " and ").concat(guests[2], " can't make it tomorrow!"));
//REPLACING THOSE PEOPLE WHO CAN'T COME
guests.splice(1, 2, "Yusra", "Iqra");
//NEW SET OF INVITATION
var invitation = guests.forEach(function (element) { return console.log("Hi ".concat(element, "! Would you like a dinner with me tomorrow?")); });
