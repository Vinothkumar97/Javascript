// AND: && , OR ||
var num = 8;
if(num > 5){
    if(num <10){
        console.log("Unicycle!");
    }

}
 //or

 if(num > 5 && num < 10){
    
        console.log("Unicycle!")

}

function myFriendName(name){
    name = name || "Vinoth";
    console.log("My friend name is " + name);
}
myFriendName();
myFriendName("Viswa");