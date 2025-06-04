let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red"
};

for(let key in car){
    console.log(key + ":" + car[key]);
}