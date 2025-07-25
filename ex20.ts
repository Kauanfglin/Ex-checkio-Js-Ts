function fuzzyStringMatch(str1, str2, threshold) {
    let differences = 0;

    const minLen = Math.min(str1.length, str2.length); 
    for (let i = 0; i < minLen; i++) {
        if (str1[i] !== str2[i]) {
            differences++; 
        }
    }

    differences += Math.abs(str1.length - str2.length);
    

    return differences <= threshold; 
}
