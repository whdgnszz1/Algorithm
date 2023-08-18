function solution(num_list) {
    let odd = 0
    let even = 0
    num_list.map((v,i) => {
        (i + 1) % 2 === 0 ? odd += v : even += v
    })
    return odd >= even ? odd : even
}