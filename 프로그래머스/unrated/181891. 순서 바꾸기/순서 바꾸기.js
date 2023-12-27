function solution(num_list, n) {
    const next = num_list.splice(0,n)
    const prev = num_list
    return [prev, next].flat();
}