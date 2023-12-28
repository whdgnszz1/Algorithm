const isEven = (num) => {
 return num % 2 ? false : true
}


function solution(num_list) {
    const oddArr = []
    const evenArr = []
    num_list.map(num => {
        isEven(num) ? evenArr.push(num) : oddArr.push(num)
    })
    return Number(oddArr.join("")) + Number(evenArr.join(""))
}

