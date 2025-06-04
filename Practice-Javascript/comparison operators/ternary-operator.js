// Ternary Operator
// conditions ? expr1 : expr2

var age = 18;

if(age >= 18){
    console.log("You can go for late night movie")
}else{
    console.log("You can't go for late night party")
}

// Using ternary operator

console.log((age >= 18)? "You can go for late night movie" : "You can't go for late night party");

// Using two ternary operator

var firstCheck = false;
secondCheck = false;
access = firstCheck ? "access denied" : secondCheck ? "access denied" : "access grant";
console.log(access);