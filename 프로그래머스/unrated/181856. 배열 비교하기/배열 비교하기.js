function solution(arr1, arr2) {
    const a = arr1.reduce((a,b) => a+b)
    const b = arr2.reduce((a,b) => a+b)
    if(arr1.length > arr2.length) {
        return 1
    } else if (arr1.length < arr2.length) {
        return -1
    } else {
        if( a > b) {
            return 1
        } else if(a < b) {
            return -1
        } else {
            return 0
        }
    }
}