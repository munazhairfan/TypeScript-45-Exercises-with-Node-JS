let current_users=["Fahad","Shahmeer","Murad","Momin","Omar"];
let new_users=["Ali","faHaD","Zohaib","Arham","oMaR"];
//CHECKING FOR SAME USERNAMES
new_users.forEach(users=> {
    let condition=current_users.some(user2=> user2.toLowerCase()==users.toLowerCase())
    if(condition){
        console.log(`Sorry! ${users} is already taken.`)
    }
    else {
        console.log(`${users} is available.`)
    }
})