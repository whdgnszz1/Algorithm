function solution(n, arr1, arr2) {
    var answer = [];
    let newArr1 = []
    let newArr2 = []
    
    for (let i = 0; i< n ; i ++) {
        let x = arr1[i].toString(2).padStart(n, "0")
        let y = arr2[i].toString(2).padStart(n, "0")
        newArr1.push(x)
        newArr2.push(y)
    }
    
    for (let k = 0; k < n ; k ++) {
        let newArr3 = []
        for(l = 0 ; l < n ; l++) {
            newArr1[k].split("")[l] === "1" || newArr2[k].split("")[l] === "1" ? newArr3.push("#") : newArr3.push(" ")
        }
        answer.push(newArr3.join(""))
    }
    return answer
}