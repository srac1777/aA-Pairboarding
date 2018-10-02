// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// Ie.a <=> z, b <=> y, c <=> x, m <=> n.

const folding_cipher = str => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let old_index = alphabet.indexOf(str[i]);
        let new_index = (25 - old_index);
        result += alphabet[new_index];
    }

    return result;
}

console.log(folding_cipher("amz"));
