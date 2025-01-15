let animal = "The lion king";
console.log(animal.includes("king"));  // includes(): Checks if a string contains a specific substring.
console.log(animal.slice(0,8)); // slice(): Extracts a portion of a string.

let talk = " Hello ";
console.log(talk);
console.log(talk.trim());

var myName = "My name is Vinothkumar"
console.log(myName.startsWith("My"));  //Checks if a string starts with a specific substring
console.log(myName.endsWith("kumar"));  //Checks if a string ends with a specific substring
console.log(myName.repeat(2));  //Repeats a string multiple times
console.log(myName.replace("Vinothkumar","Viswa"));  //Replaces a part of a string with another string
console.log(myName.split(" "));  //Splits a string into an array of substrings