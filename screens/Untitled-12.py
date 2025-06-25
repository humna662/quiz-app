
processes = ['P1', 'P2', 'P3', 'P4']
burst_times = [3, 7, 5, 8]

combined = list(zip(processes, burst_times))
combined.sort(key=lambda x: x[1])
waiting_time = 0
total_waiting_time = 0

print(f"{'Process':<10}{'Burst':<10}{'Waiting':<10}{'Turnaround'}")

for i, (p, bt) in enumerate(combined):
    turnaround_time = waiting_time + bt
    print(f"{p:<10}{bt:<10}{waiting_time:<10}{turnaround_time}")
    total_waiting_time += waiting_time
    waiting_time += bt

average_waiting_time = total_waiting_time / len(processes)
print(f"\nAverage Waiting Time: {average_waiting_time}")