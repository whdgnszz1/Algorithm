function solution(array) {
    var answer = 0;
    let map = new Map()
    let arr = array.join("").split("")
    arr.map(v => {
    map.has(v) ?  map.set(v, map.get(v)+1) :map.set(v, 1)     
    })
    return map.get("7") === undefined ? 0 : map.get("7");
}