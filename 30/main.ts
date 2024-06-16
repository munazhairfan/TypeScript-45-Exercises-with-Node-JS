let usernames=["Admin","Eric","Tess","Eliot","Harry"];
//PERSONALIZED MESSAGES FOR USERS
usernames.forEach(oneUser=>{
    if(oneUser=="Admin"){
        console.log(`Hello ${oneUser}! Would you like to see the status report?`)
    }else{console.log(`Hello ${oneUser} thank you for logging in again..`)}
})