function solution(myStr) {
    var answer = [];
    const firstSplit = myStr.split("a")
    
    const secondSplit = firstSplit.map(str => {
        return str.split("b")
    }).flat()
    
    const thirdSplit = secondSplit.map(str => {
        return str.split("c")
    }).flat()
    
    thirdSplit.map(str => {
        if(str){
            answer.push(str)
        }
    })
    return answer.length ? answer : ["EMPTY"];
}