function solution(my_string, is_suffix) {
    for(let i = 1 ; i <= is_suffix.length ; i++) {
        if(my_string.slice(-i).includes(is_suffix)){
            return 1
        }
    }
    return 0
}