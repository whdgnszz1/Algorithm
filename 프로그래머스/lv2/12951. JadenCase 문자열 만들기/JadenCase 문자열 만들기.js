function solution(s) {
    let arr = s.split('').map((x) => x.toLowerCase());
    arr[0] = arr[0].toUpperCase();
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === ' ') {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}