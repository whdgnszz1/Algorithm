import heapq
import sys

N = int(sys.stdin.readline())
heap = []

for _ in range(N):
    x = int(sys.stdin.readline())
    if x != 0:
        heapq.heappush(heap, -x)  # 값을 힙에 넣을 때 -1을 곱해준다
    else:
        try:
            print(-heapq.heappop(heap))  # 값을 힙에서 꺼낼 때 다시 -1을 곱해준다
        except:
            print(0)  # 힙이 비어 있는 경우 0을 출력한다
