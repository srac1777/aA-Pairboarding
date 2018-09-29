// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring.
// A substring is defined as any consecutive slice of letters from another string.

const longest_common_substring = (str1, str2) => {
    let longest_substring = "";
    let i, j, temp;
    let max = "";

    for(i = 0; i < str1.length - 1; i++){
        for(j = i + 1; j < str1.length; j++){
            temp = str1.slice(i,j+1);
            if (str2.indexOf(temp) < 0) continue;
            else {
                if (temp.length > max.length) {
                    max = temp;

                }
            }
        }
    }
    return max;
}

// console.log(longest_common_substring("hello", "pelloy"))

// Write a function that takes an array of integers and returns their sum.Use recursion.

const rec_sum = (arr) => {
    if (arr.length <= 1) return arr[0];

    return arr[arr.length - 1] + rec_sum(arr.slice(0,arr.length-1));
}

console.log(rec_sum([1,0,1]));
