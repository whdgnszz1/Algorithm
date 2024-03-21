def solution(my_string, s, e):
    reversed_str = my_string[s:e+1][::-1]    
    answer = my_string[:s] + reversed_str + my_string[e+1:]
    return answer