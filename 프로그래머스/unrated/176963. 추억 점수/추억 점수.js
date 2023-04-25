function solution(name, yearning, photo) {
    var answer = Array.from({length:photo.length}, (_,index) => 0)
    let arr = new Map()
    name.map((v,i) =>{
        arr.set(name[i], yearning[i])
    }) 
    photo.map((a,index1) =>{
        a.map((b) => {
            arr.has(b) ? answer[index1] += arr.get(b) : answer[index1] += 0
        })
    })
    return answer;
}