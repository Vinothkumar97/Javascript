let isLoggedIn = true;
if(isLoggedIn){
console.log("User is successefully logged in.")
}else{
    console.log("User is not logged in.")
}

// Alternative Using Strings
// If you're trying to use yes and no as text, 
// you can make it work by assigning them as string values and comparing them

let isClockedIn = "no";
if(isClockedIn === "yes"){
    console.log("User is successefully clocked in.")
}else{
    console.log("User is not clocked in.")
}