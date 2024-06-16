let usernames=["Admin","Eric","Tess","Eliot","Harry"];
usernames=[];
//IF-ELSE STATEMENTS USING AN ARRAY
if(usernames.length==0){console.log("Array is empty. We need to find users.")}
    else{
usernames.forEach(oneUser=>{
    if(oneUser=="Admin"){
        console.log(`Hello ${oneUser}! Would you like to see the status report?`)
    }else{console.log(`Hello ${oneUser} thank you for logging in again..`)}
})};