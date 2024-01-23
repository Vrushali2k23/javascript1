function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original and reversed strings
    return cleanedStr === cleanedStr.split('').reverse().join('');
}


console.log("Madam is palindrome",isPalindrome("madam"));  
console.log("dad is palindrome",isPalindrome("dad"));   
console.log("Hello is palindrome",isPalindrome("hello"));  


console.log("=====================step 2===============");
function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Check if the sorted characters of both strings are the same
    return cleanedStr1.split('').sort().join('') === cleanedStr2.split('').sort().join('');
}

// Test the function with examples
console.log("Silent-Listen is Anagram",isAnagram("Silent", "Listen")); // true
console.log("Hello-World is Anagram",isAnagram("Hello", "World"));   // false
console.log("Such-Much is palindrome",isAnagram("Such", "Much"));     // true