function solution(arr, query) {
    var answer = [];
    let newArr = query.map((item, index) => {
       if(index === 0 || index % 2 === 0) {
          arr = arr.slice(0, item+1)
       } else {
          arr = arr.slice(item, arr.length)
       } 
        console.log(arr)
    })

    return arr
}