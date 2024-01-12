function solution(myString, pat) {
    const patLength = pat.length;
    for (let i = myString.length - patLength; i >= 0; i--) {
        if (myString.slice(i, i + patLength) === pat) {
            return myString.slice(0, i + patLength);
        }
    }
    return ""; 
}
