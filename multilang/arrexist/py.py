arr = [1, 2, 3, 2, 5, 2, 3, 4]
print 2 in arr  # True
if 2 in arr:
    print "True"
else:
    print "False"

arr2 = (1, 2, 3, 2, 5, 2, 3, 4)
print 2 in arr2 # Truw
if 2 in arr2:
    print "True"
else:
    print "False"

arr3 = {'a':1, 'b':2, 'c':3}
print 2 in arr3  # False
print 2 in arr3.values()  # True
