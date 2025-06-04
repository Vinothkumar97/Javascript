let user = {
    firstName: "Vinothkumar",
    lastName: "K",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(user.fullName()); 

