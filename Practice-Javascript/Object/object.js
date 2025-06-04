let person = {
name: "Vinoth",
age: 28,
isEmployed: true,
greet: function(){
    console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");  
}
};
person.greet();