
def sum67(nums):
    nums=nums[:]
    while 6 in nums:
        i=nums.index(6)
        j=nums.index(7,i)
        del nums[i:j+1]
    return sum(nums)


print(sum67([1, 2, 2, 6, 99, 99, 7, 3]))  
print(sum67([1, 6, 2, 2, 7, 1]))         # 2
print(sum67([6, 7, 1, 6, 7, 2]))         #3
print(sum67([1, 2, 2]))           