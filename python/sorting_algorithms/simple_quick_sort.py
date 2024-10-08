# quick sort with recursion, using mid pivot

def quick_sort(arr):
    if len(arr) < 2:
        return arr

    lesser = []
    mid = []
    bigger = []

    pivot = arr[len(arr) // 2]

    lesser = [i for i in arr if i < pivot]
    mid = [i for i in arr if i == pivot]
    bigger = [i for i in arr if i > pivot]

    return quick_sort(lesser) + mid + quick_sort(bigger)


print(quick_sort([-2, 14, 4, 29, -5, 10, 1]))
