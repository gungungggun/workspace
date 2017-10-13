#include <stdio.h>
#include <time.h>

int a (int n) {
  return (n / 2);
}

int b (int n) {
  return (n * 3 + 1);
}

int main(int argc, char *args[])
{
    clock_t t1, t2;
    int i, x, count;
    t1 = clock();

    count = 0;
    for (i = 2; i <= 10000; i++) {
        x = i;
        while (x != 1) {
            if (x % 2 == 0) {
                x = a(x);
            } else {
                x = b(x);
            }
            count++;
        }
    }
    printf("count:%d\n", count);

    t2 = clock();
    printf("%f[s]\n", (double)(t2-t1)/CLOCKS_PER_SEC);
    return 0;
}

