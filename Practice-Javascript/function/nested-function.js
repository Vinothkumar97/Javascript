//hoisted 
console.log(addSquares(2,2));
function addSquares(a,b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}

console.log(a = addSquares(2,3));
