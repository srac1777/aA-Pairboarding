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
    let current_sum = arr[0];
    let largest_sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const el = arr[i]
        if(current_sum + el <= current_sum){
            if(el > current_sum) current_sum = el;
            largest_sum = current_sum;
        } else {
            current_sum += el;
            
        }
    }

    return largest_sum;
}

console.log(lcss([5, 3, 7, 6, 0, -2]));
