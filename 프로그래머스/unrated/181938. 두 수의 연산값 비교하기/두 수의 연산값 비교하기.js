function solution(a, b) {
    const add = String(a) + String(b)
    const multiple = 2 * a * b
    return +add >= multiple ? +add : multiple
}