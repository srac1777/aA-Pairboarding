// Write a method that takes a string as input.
// It should return true if the input is a valid IPv4 address
// (ie.anything between 0.0.0.0 and 255.255.255.255 is valid).

const valid_ip = str => {
    if(str.length > 15)return false;
    if(str.length < 7)return false;

    let arr = str.split(".");
    if(arr.length !== 4) return false;
    arr.forEach(el => {
        // console.log(parseInt(el) > 255);
        
        if(parseInt(el) > 255 || parseInt(el) < 0) return false;
    });
    return true;
}

console.log(valid_ip("0.0.0.677"));


