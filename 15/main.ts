//INVITING PEOPLE FOR DINNER
let guests = ["Areej","Dua","Fariha","Javeria","Palwasha","Hafsa"]

//SOME PEOPLE CAN'T COME
console.log(`${guests[1]} and ${guests[2]} can't make it tomorrow!`);

//REPLACING THOSE PEOPLE WHO CAN'T COME
guests.splice(1,2,"Yusra","Iqra");

//NEW SET OF INVITATION
let invitation = guests.forEach(
    element => console.log(`Hi ${element}! Would you like a dinner with me tomorrow?`));

