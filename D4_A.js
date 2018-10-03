// Write a method that finds all the unique substrings for a word.

const uniqSubs = (str) => {
    let res = {};

    for (let i = 0; i < str.length-1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if(!res[str.slice(i,j+1)]){
                res[str.slice(i,j+1)] = true;
            }
        }
    }
    return Object.keys(res);
}

// console.log(uniqSubs("hellobilly"));

// Given an array of integers(positive and negative)
//  find the largest contiguous subsum(sum of a subarray).
// You can solve this trivially in O(n ** 2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.

const lcss = (arr) => {
    
}