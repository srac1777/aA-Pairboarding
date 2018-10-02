// Implement the Array.prototype.map function in JavaScript.

Array.prototype.myMap = function(fn){
    let result = [];
    this.forEach(el => {
        result.push(fn(el));
    });
    return result;
}

console.log([1,2,3].myMap(el => el*2));
