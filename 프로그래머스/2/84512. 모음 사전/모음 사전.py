def solution(word):
    answer = 0
    vowels = {'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4}
    countArr = [781, 156, 31, 6, 1]

    for i, char in enumerate(word):
        answer += vowels[char] * countArr[i] + 1

    return answer
