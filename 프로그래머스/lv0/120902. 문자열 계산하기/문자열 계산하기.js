function solution(my_string) {
    let arr = my_string.split(" ")
    while(arr.length !== 1) {
        arr[1] === "+"? 
        arr[2] = Number(arr[0]) + Number(arr[2]) : 
        arr[2] = Number(arr[0]) - Number(arr[2])
        arr.shift()
        arr.shift()
    }
    return arr[0]
}