def freq_map(arr):
    seen={}
    for i in arr:
        if i not in seen:
            seen[i]=1
        else:
            seen[i]+=1
    for i in seen:
        if seen[i]>=2:
            return False
    return True
print(freq_map())
