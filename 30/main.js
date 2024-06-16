var usernames = ["Admin", "Eric", "Tess", "Eliot", "Harry"];
//PERSONALIZED MESSAGES FOR USERS
usernames.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("Hello ".concat(oneUser, "! Would you like to see the status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for logging in again.."));
    }
});
