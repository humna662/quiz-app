from collections import deque
burst_times = [7, 3, 5, 6, 4]
n = len(burst_times)
processes = [f'P{i+1}' for i in range(n)]

time_quantum = 2
remaining_bt = burst_times[:]
waiting_time = [0] * n
turnaround_time = [0] * n


queue = deque()
for i in range(n):
    queue.append(i)

time = 0  

while queue:
    i = queue.popleft()
    if remaining_bt[i] > time_quantum:
        time += time_quantum
        remaining_bt[i] -= time_quantum
        queue.append(i)
    else:
        time += remaining_bt[i]
        waiting_time[i] = time - burst_times[i]
        remaining_bt[i] = 0
        turnaround_time[i] = time

avg_waiting_time = sum(waiting_time) / n
avg_turnaround_time = sum(turnaround_time) / n

# Output
print("Process\tBurst Time\tWaiting Time\tTurnaround Time")
for i in range(n):
    print(f"{processes[i]}\t{burst_times[i]}\t\t{waiting_time[i]}\t\t{turnaround_time[i]}")

print(f"\nAverage Waiting Time: {avg_waiting_time:.2f}")
print(f"Average Turnaround Time: {avg_turnaround_time:.2f}")