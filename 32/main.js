var current_users = ["Fahad", "Shahmeer", "Murad", "Momin", "Omar"];
var new_users = ["Ali", "faHaD", "Zohaib", "Arham", "oMaR"];
//CHECKING FOR SAME USERNAMES
new_users.forEach(function (users) {
    var condition = current_users.some(function (user2) { return user2.toLowerCase() == users.toLowerCase(); });
    if (condition) {
        console.log("Sorry! ".concat(users, " is already taken."));
    }
    else {
        console.log("".concat(users, " is available."));
    }
});
