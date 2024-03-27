def solution(s):
    stack = []
    for element in s.split():
        if element == "Z":
            if stack:
                stack.pop()
        else:
            stack.append(int(element))
    return sum(stack)