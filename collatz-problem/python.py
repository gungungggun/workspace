import time
t = time.time()

def a (n):
  return n / 2

def b (n):
  return n * 3 + 1

count = 0
for i in xrange(2, 10001):
    x = i
    while (x != 1):
        if (x % 2 == 0):
            x = a(x)
        else:
            x = b(x)
        count += 1

print(time.time() - t)
print('count:' + str(count))
