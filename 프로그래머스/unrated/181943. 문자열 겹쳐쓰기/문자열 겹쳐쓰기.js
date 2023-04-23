function solution(my_string, overwrite_string, s) {
    var answer = '';
    let arr = my_string.split("")
    arr.splice(s,overwrite_string.length)    
    arr.splice(s, 0, overwrite_string)
    
    return arr.join("")
}