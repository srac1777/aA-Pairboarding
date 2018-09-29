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

console.log(longest_common_substring("hello", "pelloy"))
