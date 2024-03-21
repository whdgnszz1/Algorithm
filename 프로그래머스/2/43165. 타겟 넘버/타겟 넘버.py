def DFS(L, sum, numbers, target, answer):
    if L == len(numbers):
        if sum == target:
            answer[0] += 1
        return
    DFS(L + 1, sum + numbers[L], numbers, target, answer)
    DFS(L + 1, sum - numbers[L], numbers, target, answer)

def solution(numbers, target):
    answer = [0]
    DFS(0, 0, numbers, target, answer)
    return answer[0]
