function solution(n, lost, reserve) {
    let arr = Array.from({length:n} ,(_, index) => index = 1);

    // 여벌 체육복이 있는 학생
    for (let j = 0; j < reserve.length; j++) {
        arr[reserve[j] - 1] += 1;
    }

    // 체육복이 도난당한 학생
    for (let i = 0; i < lost.length; i++) {
        arr[lost[i] - 1] -= 1;
    }

    // 체육복 빌려주기
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === 0) {
            if (arr[k - 1] === 2) {
                arr[k - 1] -= 1;
                arr[k] += 1;
            } else if (arr[k + 1] === 2) {
                arr[k + 1] -= 1;
                arr[k] += 1;
            }
        }
    }

    return arr.filter((v) => v > 0).length;
}