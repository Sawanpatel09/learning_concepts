





# nums = [16,13,10,0,0,0,10,6,7,8,7]
# i = 0
# while i < len(nums):
#     print(nums[i])
#     nums.pop()
#     i = i + 1


# for i in range(len(nums)):
#     print(nums[i])
#     nums.pop()
#     print(nums)



# sum1 = sum(nums)
# sum2 = 0
# collection = 0
# for i in range(len(nums)):
#     if nums[i] == 0:
#         if (sum1 - sum2) == 0:
#             collection = collection + 2
#         elif abs(sum1 - sum2) == 1:
#             collection = collection + 1
#     else:
#         sum2 += nums[i]
#         sum1 -= nums[i]
# print(collection)






'''list1 = [1,2,3,4,2,1,4]
dict1 = {}
for i in list1:
    if i not in dict1:
        dict1[i] = 1
    else:
        dict1[i] += 1

max1 = 0
value1 = 0

for value in dict1.values():
    if max1 < value:
        max1 = value
        value1 = value
    elif max1 == value:
        value1 = value1 + value
        max1 = value
print(value1)'''

# a = [1,3,4,5]
# b = a
# b[0] = 90
# print(a)







# def my_decorator(func):
#     def wrapper(name):
#         print("Something is happening before the function call.")
#         result = func(name)
#         print("Something is happening after the function call.")
#         return result
#     return wrapper

# @my_decorator
# def say_hello(name):
#     print(f"Hello, {name}!")
#     return f"Greeting for {name}"

# # Calling the decorated function
# message = say_hello("Alice")
# print(message)


# def plus(a,b):
#     return a + b

# def mul(a,b):
#     return a * b

# def divi(a,b):
#     return a / b

# hash1 = {
#     "add":plus,
#     "mul":mul,
#     "divi":divi
# }

# a = 9
# b = 3

# for key in hash1.keys():
#     print(hash1[key](a,b))



# words = ["e","a","b"]
# groups = [0,0,1]
# ans1 = []
# flag = False
# for i in range(len(groups)-1):
#     if groups[i] != groups[i+1]:
#         if flag == False:
#             ans1.append(words[i])
#             ans1.append(words[i+1])
#             flag  = True
#         else:
#             ans1.append(words[i+1])


# ans = []
# flag = False
# for i in range(len(groups)-1):
#     if groups[i] != groups[i+1]:
#         if flag == False:
#             ans.append(words[i])
#             ans.append(words[i+1])
#             flag = True
#         else:
#             ans.append(words[i+1])
# print(ans1)
# print(ans)

# s = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxzyxwvutsrqponmlkjihgfedcba'  #
# k = 25
# set1 = set()
# change = False
# count = 0
# check = False
# for item in range(len(s)-1):
#     if change == True and s[item] == s[item+1]:
#         set1.add(s[item])
#         check = True
#         if len(set1) == k:
#             count += 1
#         break

#     if s[item] not in set1:
#         set1.add(s[item])
#     elif s[item] in set1 and change == False:
#         change = True
#         set1.add(1)
#     elif s[item] in set1 and change == True:
#         check = True
#         break
#     if len(set1) == k:
#         count += 1
#         set1 = set()
# if set1 != set() and  k >= len(set1) and check == False:
#     count += 1
# elif check == False and set1 == set():
#     count += 1

# print(count)
    
    
    

# s = "baac"
# k = 3
# str1 = ""
# flag = False
# start = 0
# end = 0
# inedx = 0
# max_window = 0
# minimum = 0
# maximum = 0
# list2 = []
# for i in range(len(s)-1):
#     if s[i] == s[i+1]:
#         if flag == False:
#             str1 = str1 + s[i]
#             str1 = str1 + s[i+1]
#             flag = True
#             start = i
#             end = i + 1
#         if flag == True:
#             str1 = s[i+1]
#             end = i + 1
#     else:
#         start = 0
#         end = 0
#         str1 = ""
#         flag = False
#     if max_window < (end - start):
#         maximum = end
#         minimum = start
#         max_window = (end - start)

# # print(maximum,minimum)
# flag1 = False
# if (max_window + 1) >= k:
#     index1 = (maximum + minimum)//2
#     flag1 = True
# list1 = list(s)
# if flag1:
#     list1[index1] = "1"

# count = 0
# set1 = {}
# for i in range(len(list1)):
#     if list1[i] not in set1:
#         set1[list1[i]] == 1
#     else:
#         set1[list1[i]] += 1
    
#     if len(set1) <= k:
#         pass
#     else:
#         count += 1
#         set1 = {}
#         set1
        
# if set1 != set():
#     count += 1
# hash1 = {}
# if flag1 == False:
#     for i in range(len(s)):
#         if s[i] not in hash1:
#             hash1[s[i]] = 1
#         else:
#             hash1[s[i]] += 1

# for key, value in hash1.items():
#     if value >= k and len(s)<=3:
#         count += 1
#         break
# print(count)