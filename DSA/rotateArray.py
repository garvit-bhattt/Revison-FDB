def rotate(nums,k):
    n=len(nums)
    res=[0]*len(nums)
    for  i in range(len(nums)):
        res[(i+k)%n]=nums[i]
    return res
print(rotate([1,2,3,4,5,6,7],3))