//冒泡排序 升序
#define N 10
#include <stdio.h>
int main()
{
    int i, j, t;
    int a[N] = {4, 6, 2, 7, 9, 10, 1, 5, 8, 3};
    puts("排序前");
    for (i = 0; i < N; i++)
        printf("%3d", a[i]);
    puts("\n");
    for (i = 1; i < N; i++) //外层循环N-1次 (趟次)。
    {
        for (j = 0; j < N - i; j++) //内层循环N-1-i次，因为每次内循环都会把最大值排到最后。
        {
            if (a[j] > a[j + 1])
            {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
    puts("排序后：");
    for (i = 0; i < N; i++)
    {
        printf("%3d", a[i]);
    }
    return 0;
}
