function solution(number) {
    const sum = number.split("").map(v => +v).reduce((acc, cur) => acc + cur)
    return sum % 9;
}