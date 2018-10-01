// Write a function, fibs(num) which returns the first num elements from the fibonnacci sequence, given n.
// Solve it both iteratively and recursively.

const fibs_iterative = num => {
    let result = [0,1];
    if(num <= 2) return result;

    for (let i = 0; i < num - 2; i++) {

        result.push(result[result.length - 1] + result[result.length - 2])
    }

    return result;
}

// console.log(fibs_iterative(7));

const fibs_recursive = num => {
    if(num === 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0,1];

    let fibs = fibs_recursive(num - 1);
    fibs[fibs.length] = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    return fibs;
}

console.log(fibs_recursive(7));
