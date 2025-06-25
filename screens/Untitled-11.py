from collections import deque

bt = [7, 3, 5, 6, 4]
n = len(bt)
qt = 2

rt = bt[:]
wt = [0] * n
tat = [0] * n
q = deque(range(n))
time = 0

while q:
    i = q.popleft()
    if rt[i] > qt:
        time += qt
        rt[i] -= qt
        q.append(i)
    else:
        time += rt[i]
        wt[i] = time - bt[i]
        tat[i] = time
        rt[i] = 0

print("P\tBT\tWT\tTAT")
for i in range(n):
    print(f"P{i+1}\t{bt[i]}\t{wt[i]}\t{tat[i]}")

print(f"\nAvg WT: {sum(wt)/n:.2f}")
print(f"Avg TAT: {sum(tat)/n:.2f}")
