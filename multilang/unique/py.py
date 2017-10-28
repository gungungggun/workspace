arr = [1, 2, 3, 2, 5, 2, 3, 4]
print(arr)
print(list(set(arr)))

print(sorted(set(arr), key=arr.index))
