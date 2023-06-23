function solution(s) {
    var answer = [];
    let count = 0
    let zero = 0
   while(Number(s) !== 1) {
        zero += s.length - s.replace(/0/g,"").length
        count++
        let str = s.replace(/0/g,"")
        console.log(str, str.length)
        let binery = str.length.toString(2)
        s = binery
   }
       
    return [count,zero]
}