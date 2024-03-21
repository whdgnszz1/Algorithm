def solution(strArr):
    dic = {}
    for str in strArr:
        length = len(str)
        if length in dic:
            dic[length] += 1
        else:
            dic[length] = 1
    
    answer = max(dic.values())
    
    return answer