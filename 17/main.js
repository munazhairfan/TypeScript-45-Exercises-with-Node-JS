var guests = ["Areej", "Dua", "Fariha", "Javeria", "Palwasha", "Hafsa"];
console.log("".concat(guests[1], " and ").concat(guests[2], " can't make it tomorrow!"));
guests.splice(1, 2, "Yusra", "Iqra");
console.log("Aoa guys! I found a bigger table so I am inviting few more guests");
guests.unshift("Laiba");
var middleofArray = guests.length / 2;
guests.splice(middleofArray, 0, "Ayesha");
guests.push("Maryam");
var invitation = guests.forEach(function (element) {
    return console.log("Hi ".concat(element, "! Would you like a dinner with me tomorrow?"));
});
//17
console.log("I am really sorry to let you know that my new table won't arrive on time and i can only invite two guests");
//I CAN ONLY INVITE TWO PEOPLE NOW BECAUSE THE BIGGER TABLE WON'T ARRIVE ON TIME
while (guests.length > 2) {
    var removingGuests = guests.pop();
}
;
//INVITING THE REMAINING TWO PEOPLE
guests.forEach(function (lasttwo) { return console.log("Hey! ".concat(lasttwo, " you are still invited for dinner")); });
